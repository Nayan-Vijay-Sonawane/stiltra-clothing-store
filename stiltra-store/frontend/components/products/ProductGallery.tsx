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
                </div>

                {/* Thumbnail Images */}
                {images.length > 1 && (
                    <div className='grid grid-cols-4 gap-3'>
                        {images.map((image, index) => (
                            <button
                                key={`${image}-{index}`}
                                onClick={() => setActiveImage(index)}
                                className={`relative aspect-[4/5] overflow-hidden border ${
                                    activeimage === index
                                    ? "border-black"
                                    : "border-transparent"
                                }`}
                                aria-label={`View product image ${index+1}`}
                                aria-pressed={activeimage === index}
                            >

                                <Image 
                                    src={image}
                                    alt={`${name} view ${index+1}`}
                                    fill
                                    sizes='120px'
                                    className='object-cover'
                                />
                            </button>
                        ))}
                    </div>
                )}
            
            </div>

    );

}