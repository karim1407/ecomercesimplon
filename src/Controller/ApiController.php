<?php

namespace App\Controller;

use App\Repository\ProduitRepository;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiController extends AbstractController
{
 
 
    #[Route('/api/products', name: 'api_product')]
    public function getAllproducts(ProduitRepository $produitRepository)
    {
        $produit =  $produitRepository->findAll();

        return $this->json($produit,200,[],['groups' => 'produit']);


    }
}
