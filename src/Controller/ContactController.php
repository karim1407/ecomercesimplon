<?php

namespace App\Controller;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Attribute\Route;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'contact')]
    public function contact(MailerInterface $mailer,Request $request): Response
    {
        $user = $this->getUser();

        $form = $this->createFormBuilder()->add('nom',TextType::class,[
            'label' => '*Votre nom',
        ])->add('prenom',TextType::class,[
            'label' => '*Votre prénom'
        ])->add('mail',EmailType::class,[
            'label' => '*Votre email'
        ])
        ->add('message',TextareaType::class,[
            'label' => '*Votre message'
        ])
        ->add('submit',SubmitType::class,[
            'label' => 'Envoyer'
        ])
        ->getForm();
 
        $form->handleRequest($request);


        if ($form->isSubmitted() && $form->isValid()) {

            $prenom = $form->get('prenom')->getData();
            $nom = $form->get('nom')->getData();
            $message = $form->get('message')->getData();

            $mail = new TemplatedEmail();
            $mail->from($form->get('mail')->getData())
                  ->subject('formulaire de contact')
                  ->to('karimtouaibia549@gmail.com')
                  ->context([
                      'prenom' => $prenom,
                      'nom' => $nom,
                      'message' => $message
                  ])
                  ->htmlTemplate('@email_templates/contact.html.twig')
            ;
            $mailer->send($mail);
            $this->addFlash('success','Votre message à bien êtait envoyer,notre équipe vous répondra');
        }
        return $this->render('contact/index.html.twig', [
            'form' => $form
        ]);
    }
}
