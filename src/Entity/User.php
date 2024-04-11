<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[UniqueEntity('email','l\'email est déja utilisé')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    #[Assert\NotBlank(message: 'le champ ne peut être vide')]
    #[Assert\Email(message:'l\'email doit être valide')]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    #[Assert\NotBlank(message: 'le champ ne peut être vide')]
    #[Assert\Length(min:6,minMessage: 'le mot de passe doit faire au moins 6 caractères ')]
    private ?string $password = null;

    #[Assert\Length(min:6,minMessage: 'le mot de passe doit faire au moins 6 caractères ')]
    private ?string $newpassword = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: 'le champ ne peut être vide')]
    #[Groups(['produit'])]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: 'le champ ne peut être vide')]
    #[Groups(['produit'])]
    private ?string $lastName = null;

    private ?bool $checkbox = false;

    private ?bool $checkboxValidate = false;

    #[ORM\Column(length: 255)]
    // #[Assert\Url(message: 'l\'url n\'est pas valide')]
    private ?string $avatar = null;

    #[ORM\OneToMany(targetEntity: Produit::class, mappedBy: 'santonnier',cascade: ['persist', 'remove'])]
    private Collection $produits;

    #[ORM\OneToMany(targetEntity: Whislist::class, mappedBy: 'user', orphanRemoval: true,cascade: ['persist', 'remove'])]
    private Collection $whislists;

    #[ORM\OneToMany(targetEntity: Atelier::class, mappedBy: 'user', orphanRemoval: true,cascade: ['persist', 'remove'])]
    private Collection $ateliers;


    #[ORM\OneToOne(targetEntity: ResetPassword::class, mappedBy: 'user', cascade: ['remove'])]
    private ?ResetPassword $resetPassword = null;


    #[ORM\Column]
    private ?bool $active = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $token = null;


    public function __construct()
    {
        $this->produits = new ArrayCollection();
        $this->whislists = new ArrayCollection();
        $this->ateliers = new ArrayCollection();
        $this->token = '';
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    public function addRole(string $role): void
    {
    $this->roles[] = $role;
    }


    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): static
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * Get the value of newpassword
     */ 
    public function getNewpassword()
    {
        return $this->newpassword;
    }

    /**
     * Set the value of newpassword
     *
     * @return  self
     */ 
    public function setNewpassword($newpassword)
    {
        $this->newpassword = $newpassword;

        return $this;
    }

    /**
     * Get the value of checkbox
     */ 
    public function getCheckbox()
    {
        return $this->checkbox;
    }

    /**
     * Set the value of checkbox
     *
     * @return  self
     */ 
    public function setCheckbox($checkbox)
    {
        $this->checkbox = $checkbox;

        return $this;
    }

    /**
     * Get the value of checkboxValidate
     */ 
    public function getCheckboxValidate()
    {
        return $this->checkboxValidate;
    }

    /**
     * Set the value of checkboxValidate
     *
     * @return  self
     */ 
    public function setCheckboxValidate($checkboxValidate)
    {
        $this->checkboxValidate = $checkboxValidate;

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(string $avatar): static
    {
        $this->avatar = $avatar;

        return $this;
    }

    /**
     * @return Collection<int, Produit>
     */
    public function getProduits(): Collection
    {
        return $this->produits;
    }

    public function addProduit(Produit $produit): static
    {
        if (!$this->produits->contains($produit)) {
            $this->produits->add($produit);
            $produit->setSantonnier($this);
        }

        return $this;
    }

    public function removeProduit(Produit $produit): static
    {
        if ($this->produits->removeElement($produit)) {
            // set the owning side to null (unless already changed)
            if ($produit->getSantonnier() === $this) {
                $produit->setSantonnier(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Whislist>
     */
    public function getWhislists(): Collection
    {
        return $this->whislists;
    }

    public function addWhislist(Whislist $whislist): static
    {
        if (!$this->whislists->contains($whislist)) {
            $this->whislists->add($whislist);
            $whislist->setUser($this);
        }

        return $this;
    }

    public function removeWhislist(Whislist $whislist): static
    {
        if ($this->whislists->removeElement($whislist)) {
            // set the owning side to null (unless already changed)
            if ($whislist->getUser() === $this) {
                $whislist->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Atelier>
     */
    public function getAteliers(): Collection
    {
        return $this->ateliers;
    }

    public function addAtelier(Atelier $atelier): static
    {
        if (!$this->ateliers->contains($atelier)) {
            $this->ateliers->add($atelier);
            $atelier->setUser($this);
        }

        return $this;
    }

    public function removeAtelier(Atelier $atelier): static
    {
        if ($this->ateliers->removeElement($atelier)) {
            // set the owning side to null (unless already changed)
            if ($atelier->getUser() === $this) {
                $atelier->setUser(null);
            }
        }

        return $this;
    }


    /**
     * Get the value of resetPassword
     */ 
    public function getResetPassword()
    {
        return $this->resetPassword;
    }

    /**
     * Set the value of resetPassword
     *
     * @return  self
     */ 
    public function setResetPassword($resetPassword)
    {
        $this->resetPassword = $resetPassword;

        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): static
    {
        $this->active = $active;

        return $this;
    }

    public function getToken(): ?string
    {
        return $this->token;
    }

    public function setToken(?string $token): static
    {
        $this->token = $token;

        return $this;
    }



}
