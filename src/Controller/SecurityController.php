<?php

namespace App\Controller;

use DateTime;
use App\Entity\User;
use App\Form\UserType;
use App\Entity\ResetPassword;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ResetPasswordRepository;
use App\Service\Uploader;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\RateLimiter\RateLimiterFactory;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;
use Symfony\Component\Security\Http\Authenticator\FormLoginAuthenticator;

class SecurityController extends AbstractController
{
    #[Route('/inscription', name: 'inscription')]
    public function signup(FormLoginAuthenticator $formLogin,UserAuthenticatorInterface $userAuthenticator,Uploader $uploader,EntityManagerInterface $em,UserPasswordHasherInterface $passwordHash,Request $request,MailerInterface $mailer): Response
    {
        $user = new User();

        $form = $this->createForm(UserType::class,$user);

        $form->handleRequest($request);

        if ($user->getCheckbox()) {
          $user->setRoles(['ROLE_SANTONNIER']);
    }

        if($form->isSubmitted() && $form->isValid())
        {
          $user->setActive(0);

          $token = $this->generateToken();

          $user->setToken($token);
           
            $picture = $form->get('pictureFile')->getData();
        
           $user->setAvatar($uploader->UploadedFileImage($picture));


            $hash = $passwordHash->hashPassword($user,$user->getPassword());
            $user->setPassword($hash);
            $em->persist($user);
            $em->flush();

            $email = new TemplatedEmail();
            $email->from('karim <karimtouaibia549@gmail.com>')
                  ->to($user->getEmail())
                  ->subject('Bienvenue dans le portail des santonnier')
                  ->htmlTemplate('@email_templates/validateAccount.html.twig')
                  ->context([
                    'username' => $user->getName(),
                    'token' => $token
                  ])
            ;
            $mailer->send($email);

            $this->addFlash('success','Félicitations votre compte a bien été créé');

            return $userAuthenticator->authenticateUser($user,$formLogin,$request);
        }
        
        return $this->render('security/index.html.twig', [
          'form' => $form->createView(),
        ]);
    }

    #[Route('/validate_account/{token}',name:'validate_account')]
    public function validateAccount(UserRepository $userRepository,string $token,EntityManagerInterface $em)
    {
      $user = $userRepository->findOneBy(['token'=> $token]);

      if($user)
      {
         $user->setActive(1);
         $user->setToken(null);
         $em->persist($user);
         $em->flush();
         $this->addFlash('success','Félicitations votre compte est actif');
      }
      else
      {
          $this->addFlash('danger','une erreur s\'est produite');
      }
      return $this->redirectToRoute('login');
      
    }

    #[Route('/login',name:'login')]
    public function login(AuthenticationUtils $authenticationUtils)
    {
         $user = $authenticationUtils->getLastUsername();
         $error = $authenticationUtils->getLastAuthenticationError();

         

         return $this->render('security/login.html.twig',[
            'user' => $user,
            'error'=> $error,
         ]);
    }

    #[Route('/logout',name:'logout')]
    public function logout()
    {

    }

    public function generateToken() 
    {
        return  substr(str_replace(['+','-','/'],'',base64_encode(random_bytes(20))),0,15);
    }

    #[Route('/reset_password/{token}', name: 'reset_password')]
    public function resetPassword(string $token,ResetPasswordRepository $resetPasswordRepository,EntityManagerInterface $em,Request $request,UserPasswordHasherInterface $hasher,RateLimiterFactory $passwordRecoveryLimiter)
    {

      $passwordReset = $resetPasswordRepository->findOneBy(['token' => $token]);

      if(!$passwordReset || $passwordReset < new DateTime('now'))
      {
          if ($passwordReset) 
            $em->remove($passwordReset);
            $em->flush();
          }
      
          $passwordForm = $this->createFormBuilder()->add('password',RepeatedType::class,[
            'type' => PasswordType::class,
            'first_options' => [
              'label' => '*Nouveau mot de passe',
            ],
            'second_options' => [
              'label' => '*Confirmation du nouveau mot de passe',
            ],
            'constraints' => [
              new NotBlank([
                'message' => 'Le champ ne peut être vide',
              ]),
              new Length([
                'min'=> 6,
                'minMessage' => 'Le mot de passe doit faire au moins 6 charactéres',
              ])
            ]
          ])->getForm();

          $passwordForm->handleRequest($request);

          if ($passwordForm->isSubmitted() && $passwordForm->isValid()) {
               $password = $passwordForm->get('password')->getData();
               $user = $passwordReset->getUser();
               $hash = $hasher->hashPassword($user,$password);
               $user->setPassword($hash);
               $em->flush();

               $this->addFlash('success','Votre mot de passe a bien était mise a jour');
               return $this->redirectToRoute('login');
          }
          return $this->render('security/reset_password.html.twig',[
            'form' => $passwordForm->createView()
          ]);
    }

    #[Route('reset_password_request',name: 'reset_password_request')]
    public function resetPasswordRequest(Request $request,UserRepository $userRepository,ResetPasswordRepository $resetPassword,EntityManagerInterface $em,MailerInterface $mailer,RateLimiterFactory $passwordRecoveryLimiter)
    {
      $limit = $passwordRecoveryLimiter->create($request->getClientIp());
      if(false === $limit->consume(1)->isAccepted())
      {
        $this->addFlash('danger','Vous devez attendre 1 heures pour refaire une demande');
        return $this->redirectToRoute('login');
      }

       $emailForm = $this->createFormBuilder()->add('email',EmailType::class,[
        'label' => '*Votre mail',
        'constraints' => [
          new NotBlank([
            'message' => 'Le champ mail ne peut être vide',
          ])
        ]
          ])->getForm();

            $emailForm->handleRequest($request);

          if($emailForm->isSubmitted() && $emailForm->isValid())
          {
             $email = $emailForm->get('email')->getData();
             $user =  $userRepository->findOneBy(['email' => $email]);
             if ($user) {
                 
                 $resetEmail =  $resetPassword->findOneBy(['user' => $user]);
                 if($resetEmail)
                 {
                   $em->remove($resetEmail);
                   $em->flush();
                 }

                 $mail = new ResetPassword();
                 $mail->setCreatedAt(new \DateTimeImmutable('+2 hours'));
                 $mail->setUser($user);
                 $token = $this->generateToken();
                 $mail->setToken($token);
                 $em->persist($mail);
                 $em->flush();
                 
                 $mailValue = new TemplatedEmail();
                 $mailValue->from('karim <santonnier@gmail.com>')
                           ->to($email)
                           ->subject('Réinstalisation du mot de passe')
                           ->htmlTemplate('@email_templates/reset_password_request.html.twig')
                           ->context([
                            'token' =>  $token,
                           ]);
                  $mailer->send($mailValue);
             }
             $this->addFlash('success','un mail vous à était envoyé');

          }
          return $this->render('security/reset_password_request.html.twig',[
            'form' => $emailForm->createView()
          ]);

    }

}
