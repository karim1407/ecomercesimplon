<?php

namespace App\Controller\Admin;

use App\Entity\Produit;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Form\Type\TextEditorType;
use Symfony\Component\DomCrawler\Field\FileFormField;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ProduitCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Produit::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud 
        ->setEntityLabelInPlural('Produits')
        ->setEntityLabelInSingular('Produit')
        ->setPageTitle('index','Santonnier - Administrations des produits')
        ->setPaginatorPageSize(10)
        ;
    }
    
    // public function configureFields(string $pageName): iterable
    // {
    //     return [
    //         IdField::new('id')
    //         ->hideOnForm(),
    //         TextField::new('nom'),
    //         NumberField::new('prix'),
    //         NumberField::new('taille'),
    //         BooleanField::new('typologie'),
    //         FileFormField::new('image'),
    //         TextEditorField::new('description'),
    //         IdField::new('santonnier'),
            

    //     ];
    // }
    
}
