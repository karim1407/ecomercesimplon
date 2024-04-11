<?php

namespace App\Controller;

use Symfony\Component\Mime\Email;
use App\Repository\ProduitRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\SerializerInterface;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            
        ]);
    }
     
    #[Route('/histoire', name: 'histoire')]
    public function pageHistoire(): Response
    {
        return $this->render('home/histoire.html.twig', [
            
        ]);
    }

    /**
     *  Affiche la liste des offres des santons de la page d'accueil 
     */
    #[Route('/offre/list', name: 'offre_list')]
    public function produitListOffre(ProduitRepository $repo,PaginatorInterface $paginator,Request $request): Response
    {

        $pagination = $paginator->paginate
        (
            $repo->paginationQuery(),
            $request->get('page',1),5
        );
        
        return $this->render('produit/offre.html.twig', [
             'pagination' => $pagination
        ]);
    }

}
