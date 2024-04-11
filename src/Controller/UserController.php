<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\AtelierRepository;
use App\Service\Uploader;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Authorization\Voter\RoleVoter;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


class UserController extends AbstractController
{
    #[Route('/profil', name: 'profil_user')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function profilCurrent(): Response
    {
    
        return $this->render('user/index.html.twig', [
        ]);
    }

    #[Route('/profil/{id}', name: 'profil')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function profil(User $user2, int $id,AtelierRepository $atelierRepo): Response
    {
        $user = $this->getUser();

        $userId = $user->getId();

        if ($user == $user2) {
            return $this->redirectToRoute('profil_user');
        }


        $ateliers = $atelierRepo->findBy(['user' => $user2]);

        return $this->render('user/profil_id.html.twig', [
            'user' => $user2,
            'ateliers' => $ateliers
        ]);
    }

    
    #[Route('/editionProfil', name: 'profil_edit')]
    public function editProfil(Uploader $upload,Request $request,EntityManagerInterface $em,UserPasswordHasherInterface $passwordHasher)
    {
        {

            /**
             * @var App\Entity\User $user
             */

            $user = $this->getUser();
    
            $form = $this->createForm(UserType::class,$user);
            $form->remove('password');
            $form->remove('checkbox');
            $form->remove('checkboxValidate');
            $form->remove('captcha');
            $form->add('newpassword',PasswordType::class,[
                'label' => 'Nouveau mot de passe',
                'required' => false
            ]);
            if ($user->getCheckbox()) {
                $user->setRoles(['ROLE_SANTONNIER']);
              // $user->addRole('ROLE_SANTONNIER');
            }
    
            $form->handleRequest($request);
            if ($form->isSubmitted() && $form->isValid()) {

                $newPassword = $user->getNewPassword();
                if($newPassword)
                {
                  $hash = $passwordHasher->hashPassword($user,$newPassword);
                  $user->setPassword($hash);
                }
                $picture = $form->get('pictureFile')->getData();
                if($picture) {
                  $user->setAvatar($upload->UploadedFileImage($picture,$user->getAvatar()));
                }
                $em->flush();
                $this->addFlash('success','Modifications savegardées !');
                return $this->redirectToRoute('profil_user');
            }
            return $this->render('user/editProfil.html.twig', [
                'form' => $form->createView(),
            ]);
        }
    }

}
