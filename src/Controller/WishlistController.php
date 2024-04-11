<?php

namespace App\Controller;

use App\Entity\Whislist;
use App\Entity\Wishlist;
use App\Repository\ProduitRepository;
use App\Repository\WhislistRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class WishlistController extends AbstractController
{
    #[Route('/wishlist/add/{id}', name: 'wishlist_add')]
    public function wishlistAdd(EntityManagerInterface $em, ProduitRepository $produitRepo, int $id): Response
    {
        $user = $this->getUser();
    
        $produit = $produitRepo->find($id);
    
        if (!$user) {
            return $this->redirectToRoute('login');
        }
    
        $wishlist = $user->getWhislists();
    
        foreach ($wishlist as $existingWishlist) {
            if ($existingWishlist->getProduit() === $produit) {
                $this->addFlash('danger', 'Ce produit est déjà dans votre de liste de souhaits');
                return $this->redirectToRoute('offre_list');
            }
        }

    
        $newWishlist = new Whislist();
        $newWishlist->setProduit($produit);
        $newWishlist->setUser($user);
    
        $em->persist($newWishlist);
        $em->flush();
        $this->addFlash('success', 'Ce produit à était ajouter dans votre de liste de souhaits');
    
        return $this->redirectToRoute('wishlist_list');
    }
    

    #[Route('/wishlist/list', name: 'wishlist_list')]
    public function wishlistList()
    {
        $user = $this->getUser();
    
        if (!$user) {
            return $this->redirectToRoute('login');
        }
    
        $wishlist = $user->getWhislists();
    
        return $this->render('wishlist/list.html.twig', [
            'wishlists' => $wishlist,
        ]);
    }
   
    #[Route('/wishlist/delete/{id}', name: 'wishlist_delete')]
    public function wishlistDelete(EntityManagerInterface $em, WhislistRepository $wishlistRepository, int $id)
    {
        $user = $this->getUser();
    
        if (!$user) {
            return $this->redirectToRoute('login');
        }
    
        $wishlist = $wishlistRepository->find($id);
        
        $em->remove($wishlist);
        $em->flush();
    
        $this->addFlash('success', 'Produit supprimé de la liste de souhaits avec succès.');
    
        return $this->redirectToRoute('wishlist_list');
    }
    
}
