<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Karser\Recaptcha3Bundle\Form\Recaptcha3Type;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Image;
use Beelab\Recaptcha2Bundle\Form\Type\RecaptchaType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Beelab\Recaptcha2Bundle\Validator\Constraints\Recaptcha2;
use Karser\Recaptcha3Bundle\Validator\Constraints\Recaptcha3;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $user = $builder->getData();
        $builder
            ->add('name',TextType::class,
                [
                    'label' => '*Prénom',
                ])
            ->add('lastName',TextType::class,[
                'label' => '*Nom de famille'
            ])
            ->add('pictureFile',FileType::class,[
                'label' => '*Avatar',
                'required' => $user?->getAvatar() ? false : true,
                'mapped' => false,
                'constraints' => [
                    new Image([
                        'mimeTypesMessage' => 'Veuillez soumettre une image',
                        'maxSize' => '1M',
                        'maxSizeMessage' => 'Votre image {{ name }} fait {{ size }} {{ suffix }} la limite est de {{ limit }} {{ suffix }}'
                    ])
                ]
            ])
            ->add('email',EmailType::class,[
                'label' => '*Email'
            ])
            ->add('password',RepeatedType::class,[
                'type' => PasswordType::class,
                'invalid_message' => 'Les mots de passe ne correspondent pas',
                'first_options' => [
                    'label' => '*Mot de passe',
                ],
                'second_options' => [
                    'label' => '*Confirmation du mot de passe',
                ]
                ])
            
            ->add('checkboxValidate',CheckboxType::class,[
                'label' => '*Valider les conditions',
                'required' => true
            ])
            ->add('checkbox', CheckboxType::class, [
                'label' => 'Cocher si vous voulez être santonnier',
                'required' => false,
                
            ]) 
            ->add('captcha', RecaptchaType::class, [
                'required' => true,
                // You can use RecaptchaSubmitType
                // "groups" option is not mandatory
                'constraints' => new Recaptcha2(['groups' => ['create']]),
            ])
            
            // ->add('captcha', Recaptcha3Type::class, [
            //     'constraints' => new Recaptcha3(),
            //     'action_name' => 'inscription',
            // ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
