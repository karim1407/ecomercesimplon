<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    
   
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
        ->setEntityLabelInPlural('Utilisateurs')
        ->setEntityLabelInSingular('Utilisateur')
        ->setPaginatorPageSize(10)
        ->setPageTitle('index','Santonnier - Administrations des utilisateurs')
        ;
    }


     
     public function configureFields(string $pageName): iterable
    {
         return [
            IdField::new('id')
            ->hideOnForm(),
            TextField::new('name'),
            TextField::new('lastName'),
            TextField::new('email')
            ->setFormTypeOptions(['disabled' => 'disabled']),
            TextField::new('avatar'),
            ArrayField::new('roles')
            ->hideOnIndex()

        ];
    } 
    
    
}
