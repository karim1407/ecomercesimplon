<?php

namespace App\Entity;

use App\Repository\ProduitRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ProduitRepository::class)]
class Produit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['produit'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['produit'])]
    private ?string $nom = null;

    #[ORM\Column(type: 'text', length: 65535)]
    #[Groups(['produit'])]
    private ?string $description = null;

    #[ORM\Column(type: 'decimal', precision: 5, scale: 2)]
    #[Groups(['produit'])]
    private ?string $prix = null;

    #[ORM\Column]
    #[Groups(['produit'])]
    private ?bool $typologie = null;

    #[ORM\Column]
    #[Groups(['produit'])]
    private ?int $taille = null;

    #[ORM\ManyToOne(inversedBy: 'produits')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['produit'])]
    private ?User $santonnier = null;

    #[ORM\Column(length: 255)]
    #[Groups(['produit'])]
    private ?string $image = null;

    #[ORM\ManyToOne(inversedBy: 'produit')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['produit'])]
    private ?Category $category = null;

    #[ORM\OneToMany(targetEntity: Whislist::class, mappedBy: 'produit',cascade: ['persist','remove'])]
    private Collection $whislists;


    public function __construct()
    {
        $this->whislists = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }


    public function isTypologie(): ?bool
    {
        return $this->typologie;
    }

    public function setTypologie(bool $typologie): static
    {
        $this->typologie = $typologie;

        return $this;
    }

    public function getTaille(): ?int
    {
        return $this->taille;
    }

    public function setTaille(int $taille): static
    {
        $this->taille = $taille;

        return $this;
    }

    public function getSantonnier(): ?User
    {
        return $this->santonnier;
    }

    public function setSantonnier(?User $santonnier): static
    {
        $this->santonnier = $santonnier;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): static
    {
        $this->category = $category;

        return $this;
    }

    /**
     * Get the value of prix
     */ 
    public function getPrix(): ?string
    {
        return $this->prix;
    }

    /**
     * Set the value of prix
     *
     * @return  self
     */ 
    public function setPrix(?string $prix)
    {
        $this->prix = $prix;

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
            $whislist->setProduit($this);
        }

        return $this;
    }

    public function removeWhislist(Whislist $whislist): static
    {
        if ($this->whislists->removeElement($whislist)) {
            // set the owning side to null (unless already changed)
            if ($whislist->getProduit() === $this) {
                $whislist->setProduit(null);
            }
        }

        return $this;
    }

  

   

}
