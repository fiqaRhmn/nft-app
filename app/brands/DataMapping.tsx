'use client'
import React, { useState } from 'react'
import { Brand } from "@/brands";
import Image from 'next/image';
import Detail from '@/components/Detail';
import { EyeIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'

type Props = {
    brandData: Brand[];
    data: Brand[];
  };

  type BrandNFT = {
    id: string;
    name: string;
    image: string;
    description: string;
    price: string;
};

function DataMapping({brandData}: Props) {
  console.log(brandData.length);
  {brandData.map((brand) => (
    
    console.log(brand.brand)
  ))}
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState<BrandNFT | null>(null);

  function openModal(nft: BrandNFT) {
      setSelectedNFT(nft);
      setIsModalVisible(true);
  }

  function closeModal() {
      setSelectedNFT(null);
      setIsModalVisible(false);
  }

  return (
    <div>
      
        {/* Banner */}
        {brandData.map((brand) => (
          <div className='relative'>
            <div className='relative flex flex-col justify-center items-center bg-gray-100 h-44 '>
                <Image
                  src={brand.nfts[0].image}
                  alt="banner"
                  layout='fill'
                  objectFit='cover'
                />

              
            </div>
            <div className="absolute h-32 w-32 text-purple-700 -mt-28 shadow-md rounded-xl ml-4 bg-white overflow-hidden">
              <Image
                src={brand.nfts[0].image}
                alt="banner"
                layout='fill'
                objectFit='cover'
                className='p-2 rounded-xl'
              />
            </div>
          </div>
        ))}
          
      

      <div className='m-4'>
        {brandData.map((brand) =>(
          <div key={brand.brand}>
            <h1 className="text-4xl font-bold mb-4">{brand.brand}'s NFTs</h1>
            <p className="text-xl font-semibold text-black mb-4">
              Special Offer: {brand.offers}
            </p>
            <div className="grid grid-cols-4 gap-4 mb-6">
            {brand.nfts.map((nft) => (
              <div key={nft.id} className='border-2 flex flex-col items-center p-2 hover:shadow-lg'>

                  <Image
                      src={nft.image}
                      alt={nft.name}
                      width={200}  // You can adjust this accordingly
                      height={200} // You can adjust this accordingly
                      className="mb-2 rounded-md shadow-md"
                      onClick={() => openModal(nft)}
                    />
                    <h2 className='font-semibold'>{nft.name}</h2>
              </div>
            ))}
            </div>

            
          </div>
        ))}

        <Detail 
                  isVisible={isModalVisible} 
                  onClose={closeModal}
                  content={
                      selectedNFT && (
                        <div className="flex flex-col bg-white p-4 rounded-lg ">
                          
                          <div className='flex flex-row justify-between'>
                              <div className="flex-none w-1/3 h-1/2">
                                <Image 
                                  src={selectedNFT.image}
                                  alt={selectedNFT.name} 
                                  className="rounded-lg"
                                  width={500}
                                  height={500}  
                                />
                              </div>

                              <div className='flex flex-col border-2 border-gray-100 rounded-lg ml-2 flex-1 p-2'>
                                {/* <!-- Details --> */}
                              <div>
                                <h1 className="text-3xl font-bold mb-2 border-2 text-purple-700 border-white">{selectedNFT.name}</h1>
                                {brandData.map((brand) => (
                                  <div className="mb-4 text-black font-semibold text-xs">Owned by <span className="font-bold text-purple-700">{brand.brand}</span></div>
                                ))}
                              </div>
                            

                              {/* <!-- Views and PFPs --> */}
                              <div className="flex items-center text-sm text-gray-400 mb-6 bg-white">
                                <span className="mr-4"># 6,351</span>
                                <div className='flex flex-row items-center'>
                                  <EyeIcon className="h-6 w-6 text-blue-500" />
                                  <span className="mr-4">70 views</span>
                                </div>

                              </div>
                              </div>
                              
                          </div>
                          
                          <div className='flex flex-col justify-center w-full border-2 border-gray-100 mt-2 rounded-lg'>
                              <div className='flex items-center pl-2 w-full border-b-2 border-gray-100'>
                                <Bars3BottomLeftIcon className="h-6 w-6 text-gray-300"/>
                                <h1 className='text-gray-700 font-bold text-lg p-2'>Description</h1>
                              </div>
                              
                              <p className='text-black p-2'>{selectedNFT.description}</p>
                          </div>

                          {/* <!-- Price --> */}
                          <div className="mb-4 flex items-center">
                            <span className="text-2xl font-bold text-black mr-2">0.014 ETH</span>
                            <span className="text-gray-400">$21.75</span>
                          </div>

                          {/* <!-- Buy Button --> */}
                          <button className="bg-purple-400 text-white py-2 px-4 rounded hover:bg-purple-500 active:bg-purple-600 focus:outline-none">
                            Buy now
                          </button>
                        
                      </div>
                      )
                  }
        />
      </div>

    </div>
  )
}

export default DataMapping
