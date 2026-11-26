import Image from 'next/image';
import { useState } from 'react';

interface ProductGalleryProps {
    images:string[];
    name: string;
}

export default function ProductGallery ({
    images,
    name,
}: ProductGalleryProps) {
    
    const [ activeimage, setActiveImage ] = useState(0);

    const selectedImage = images[activeimage];

    return (

        <div className='flex flex-col gap-4'>

            {/* Main Image */}

            <div className='relative aspect-[4/5] overflow-hidden bg-[#eeece7]'>
            
                <Image
                    src={selectedImage}
                    alt={name}
                    fill
                    priority
                    sizes='{max-width:768px} 100vw, 50vw'
                    className='object-cover'
                />

                {/* Thumbnail Images */}
            
            </div>

        </div>

    )

}