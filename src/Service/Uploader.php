<?php
namespace App\Service;

use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Filesystem\Filesystem;

class Uploader
{
    public function __construct(protected Filesystem $fs,protected $profileFolder,protected $profileFolderPublic, protected $productsFolder,protected $productFolderPublic )
    {
        
    }
    public function UploadedFileImage(UploadedFile $picture, string $oldPicturePath = null): string
    {
        $folder = $this->profileFolder;
        $ext = $picture->guessExtension();
        $filename = bin2hex(random_bytes(10)) . '.' . $ext;
        $picture->move($folder, $filename);
        if($oldPicturePath)
        {
           $this->fs->remove($folder . '/' . pathinfo($oldPicturePath,PATHINFO_BASENAME));
        }
        return $this->profileFolderPublic . '/' . $filename;
    }

    public function UploadedFileImageProducts(UploadedFile $picture,string $oldPicturePath = null): string
    {
        $folder = $this->productsFolder;
        $ext = $picture->guessExtension();
        $filename =  bin2hex(random_bytes(10)) . '.' . $ext;
        $picture->move($folder,$filename);
        if ($oldPicturePath) {
            $this->fs->remove($folder . '/'. pathinfo($oldPicturePath,PATHINFO_BASENAME));
        }
        return $this->productFolderPublic .'/'. $filename ;
    }
}