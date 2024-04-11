<?php

namespace App\Controller;

use App\Entity\Produit;
use App\Form\ProduitType;
use App\Service\Uploader;
use App\Repository\ProduitRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ProduitController extends AbstractController
{

    #[Route('/santonnier/produit', name: 'produit_add')]
    #[Route('/santonnier/produit/edit/{id}', name: 'produit_edit')]
    public function produitAjout(Uploader $upload,Request $request, EntityManagerInterface $em, ProduitRepository $repo, ?int $id = null,): Response
    {
        $user = $this->getUser();
        $imageProduit = new Produit();

        if (!$user) {
            return $this->redirectToRoute('login');
        }

        $santonnierId = $user->getId();

        if ($id) {
            $produit = $repo->findOneBy(['id' => $id, 'santonnier' => $santonnierId]);
        } else {
            $produit = new Produit();
        }

        $form = $this->createForm(ProduitType::class, $produit);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $produit->setSantonnier($user);
            $produit->setCategory($produit->getCategory());
         
            /**
             * @var UploadedFile
             */
            $picture = $form->get('imageFile')->getData();
           
            if ($picture instanceof UploadedFile) {
                
                $produit->setImage($upload->UploadedFileImageProducts($picture, $imageProduit->getImage()));
            }
            $em->persist($produit);
            $em->flush();
            $this->addFlash('success', 'Vous avez ajouté un santon');
          

            return $this->redirectToRoute('produit_list');
        }

        return $this->render('produit/add.html.twig', [
            'form' => $form->createView(),
            'id' => $id,
        ]);
    }




    #[Route('/santonnier/produit/list', name: 'produit_list')]
    public function produitList(ProduitRepository $repo): Response
    {
        $user = $this->getUser();

        $santonnierId = $user->getId();

        $produits = $repo->findBy(['santonnier' => $santonnierId]);

        return $this->render('produit/list.html.twig', [
            'produits' => $produits
        ]);
    }

    #[Route('/santonnier/produit/delete/{id}', name: 'produit_delete')]
    public function produitDelete(int $id, EntityManagerInterface $em, ProduitRepository $repo): Response
    {
        $user = $this->getUser();

        if (!$user) {
            
            return $this->redirectToRoute('login');
        }

    
        $santonnierId = $user->getId();

        $produit = $repo->findOneBy(['id' => $id, 'santonnier' => $santonnierId]);

        if (!$produit) {
         
            throw $this->createNotFoundException('Le produit demandé n\'existe pas.');
        }

        $em->remove($produit);
        $em->flush();
        $this->addFlash('success', 'Le produit a été supprimé avec succès.');

        return $this->redirectToRoute('produit_list');
    }

    #[Route('/produit/search/{search}', name: 'produit_search')]
    public function produitSearch(string $search, ProduitRepository $produitRepository)
    {
        $produits = $produitRepository->findBySearch($search);
        return $this->json(json_encode($produits));
    }


    #[Route('/produit/{id}', name: 'produit_detail')]
    public function produitDetail(int $id, ProduitRepository $produitRepository)
    {
        $produit = $produitRepository->find($id);

        return $this->render('produit/produit_detail.html.twig', [
            'produit' => $produit
        ]);
    }
}
