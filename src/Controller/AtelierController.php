<?php

namespace App\Controller;

use App\Entity\Atelier;
use App\Form\AtelierType;
use App\Repository\AtelierRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AtelierController extends AbstractController
{
    #[Route('/santonnier/atelier', name: 'atelier_add')]
    #[Route('/santonnier/atelier/edit/{id}', name: 'atelier_edit')]
    public function addOrEdit(Request $request,EntityManagerInterface $em,AtelierRepository $atelierRepo,int $id = null): Response
    {

        if($id)
        {
           $atelier = $atelierRepo->find($id);
        }
        else
        {
            $atelier = new Atelier();
        }
        $user = $this->getUser();
        $form = $this->createForm(AtelierType::class,$atelier);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $atelier->setUser($user);
            $em->persist($atelier);
            $em->flush();
            $this->addFlash('success','Vous avez bien ajouter des informations');
            return $this->redirectToRoute('atelier_list');
        }

        return $this->render('atelier/edit_add.html.twig', [
            'form' => $form,
            'id' => $id
        ]);
    }

    #[Route('/santonnier/atelier/list', name: 'atelier_list')]
    public function atelierList(AtelierRepository $atelierRepo): Response
    {
         $ateliers = $atelierRepo->findAll();

          return $this->render('atelier/list.html.twig', [
            'ateliers' => $ateliers
        ]);
    }

    #[Route('/santonnier/atelier/delete/{id}', name: 'atelier_delete')]
    public function atelierDelete(EntityManagerInterface $em,AtelierRepository $atelierRepo,int $id)
    {
         $atelier = $atelierRepo->find($id);
         $em->remove($atelier);
         $em->flush();
         return $this->redirectToRoute('atelier_list');

    }
}
