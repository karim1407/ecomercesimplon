<?php

namespace App\Repository;

use App\Entity\Category;
use App\Entity\Produit;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Produit>
 *
 * @method Produit|null find($id, $lockMode = null, $lockVersion = null)
 * @method Produit|null findOneBy(array $criteria, array $orderBy = null)
 * @method Produit[]    findAll()
 * @method Produit[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProduitRepository extends ServiceEntityRepository
{
    private $entityManager;

    public function __construct(ManagerRegistry $registry, EntityManagerInterface $entityManager)
    {
        parent::__construct($registry, Produit::class);
        $this->entityManager = $entityManager;
    }

    public function findBySearch(string $query)
    {
        return $this->createQueryBuilder('p')
            ->select('p.nom,p.id')
            ->where('p.nom LIKE :search')
            ->setParameter('search', "%{$query}%")
            ->getQuery()
            ->getResult();
    }

    public function findByCategory(string $search)
    {
        return $this->createQueryBuilder('p')
            ->join('p.category', 'c')
            ->where('c.title = :category')
            ->setParameter('category', "{$search}")
            ->getQuery()
            // ->getResult()
        ;
    }


    public function findByRange($min, $max, $search)
    {
        $conn = $this->getEntityManager()->getConnection();

        $sql = '
        SELECT p.*, u.name AS user_name, u.last_name AS user_lastname
        FROM produit p 
        JOIN user u ON p.santonnier_id = u.id
        WHERE p.prix BETWEEN :min AND :max AND p.category_id = :search   
        ORDER BY p.prix ASC
    ';

        $resultSet = $conn->executeQuery($sql, ['min' => $min, 'max' => $max, 'search' => $search]);

        // returns an array of arrays (i.e. a raw data set)
        return $resultSet->fetchAllAssociative();
    }

    public function paginationQuery()
    {
        return $this->createQueryBuilder('p')
            ->getQuery();
    }
}
