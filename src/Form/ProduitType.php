<?php
namespace App\Form;

use App\Entity\Produit;
use App\Entity\Category;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ProduitType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $imageProduit = $builder->getData();
        
        $builder
            ->add('nom', TextType::class, [
                'label' => '*Nom du produit',
                'constraints' => [
                    new Assert\Length([
                        'min' => 3,
                        'minMessage' => 'Le nom du produit doit faire au minimum 3 caractères',
                    ]),
                    new Assert\NotBlank([
                        'message' => 'Le champ ne peut être vide',
                    ]),
                ],
            ])
            ->add('description', TextareaType::class, [
                'label' => '*Description du produit',
                'required' => false,
            ])
            ->add('prix', NumberType::class, [
                'label' => '*Prix du produit',
                'constraints' => [
                    new Assert\NotBlank([
                        'message' => 'Le prix du produit ne peut être vide',
                    ]),
                ],
            ])
            ->add('typologie', CheckboxType::class, [
                'label' => '*Non Peint ou Peint(Typologie)',
                'required' => false
            ])
            ->add('taille', NumberType::class, [
                'label' => '*Taille du produit',
                'constraints' => [
                    new Assert\NotBlank([
                        'message' => 'La taille du produit ne peut être vide',
                    ]),
                ],
            ])->add('imageFile',FileType::class,[
                'label' => '*Image du produit',
                'mapped' => false,
                'required' => $imageProduit?->getImage() ? false : true,
                'constraints' => [
                    new Image([
                        'maxSize' => '100k',
                        'maxSizeMessage' => 'Votre image {{ name }} fait {{ size }} {{ suffix }} et la limit est de {{ limit }} {{ suffix }}.',
                        'mimeTypesMessage' => 'Veuillez mettre une image valide',
                    ])
                    
                ]
            ])->add('category', EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'title',
            ])
            ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Produit::class,
        ]);
    }
}
