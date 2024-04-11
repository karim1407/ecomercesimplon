<?php

namespace App\Controller;

use App\Repository\ProduitRepository;
use App\Repository\CategoryRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;


class CategoryController extends AbstractController
{
    #[Route('/category/{search}', name: 'category_couple')]
    public function index(ProduitRepository $produitRepo, CategoryRepository $categoryRepo, string $search, PaginatorInterface $paginator, Request $request): Response
    {
        $min = $request->query->get('min');
        $max = $request->query->get('max');

        $category = $categoryRepo->findBy(['title' => $search]);
       
        $results = $produitRepo->findByRange($min, $max, $category[0]->getId());

        if(!$category) 
        {
            return $this->redirectToRoute('home');
        }

        $pagination = $paginator->paginate(
            $produitRepo->findByCategory($search),
            $request->get('page', 1),
            2
        );

        return $this->render('category/index.html.twig', [
            'paginations' => $pagination,
            'search' => $search,
            'results' => $results
        ]);
    }
}
