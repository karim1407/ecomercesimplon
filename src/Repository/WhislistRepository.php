<?php

namespace App\Repository;

use App\Entity\Whislist;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Whislist>
 *
 * @method Whislist|null find($id, $lockMode = null, $lockVersion = null)
 * @method Whislist|null findOneBy(array $criteria, array $orderBy = null)
 * @method Whislist[]    findAll()
 * @method Whislist[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class WhislistRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Whislist::class);
    }

//    /**
//     * @return Whislist[] Returns an array of Whislist objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('w')
//            ->andWhere('w.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('w.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Whislist
//    {
//        return $this->createQueryBuilder('w')
//            ->andWhere('w.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
