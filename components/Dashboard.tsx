'use client'
import React, { useState } from 'react';
import Header from './Header';
import { UserCircleIcon, EyeIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/solid';
import nftData from '../data/nfts.json';
import Image from "next/image";
import { Brand } from "@/brands";

type BrandNFT = {
  id: string;
  name: string;
  description: string;
  image: string;
  animation: string | null; 
  price: string;
  owner: string;
  brand: string;
};

function Dashboard() {
  // States
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState<BrandNFT | null>(null);

  // Handler
  const handleNFTClick = (nft: BrandNFT) => {
    setSelectedNFT(nft);
    setIsModalVisible(true);
  }

  return (
    <div>
      <Header />

      {/* Banner */}
      {nftData.map((brand, index) => (
        index === 0 && (
          <div className='relative'>
            <div className='relative flex flex-col justify-center items-center bg-gray-100 h-44 '>
                <Image
                  src={brand.image}
                  alt="banner"
                  layout='fill'
                  objectFit='cover'
                />
            </div>
            <div className="absolute h-32 w-32 text-purple-700 -mt-28 shadow-md rounded-xl ml-4 bg-white overflow-hidden">
              <Image
                src={brand.image}
                alt="banner"
                layout='fill'
                objectFit='cover'
                className='p-2 rounded-xl'
              />
            </div>
          </div>
        )
      ))}

        <h1 className="text-2xl font-bold mb-6 text-center">Your NFTs</h1>

      <div className="grid grid-cols-4 gap-6 px-4 md:px-20">
        {nftData.map(nft => (
          <div 
            key={nft.id} 
            className="flex flex-col justify-center items-center border p-4 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300"
            onClick={() => handleNFTClick(nft)}
          >
            <div className="relative mb-4">
                <Image 
                    src={nft.image} 
                    alt={nft.name} 
                    width={200} 
                    height={200}
                />
            </div>
            <h2 className="text-lg font-semibold mb-2">{nft.name}</h2>
            <p className="text-base font-medium">Price: {nft.price}</p>
          </div>
          
        ))}
      </div>

      {/* Modal */}
      {isModalVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">

        <div className='bg-white p-4 rounded shadow-lg relative'> 
    
            {/* Close button */}
            <button 
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded"
                onClick={() => setIsModalVisible(false)}
            >
                Close
            </button>
    
            <div className='flex flex-row'>
                <div className="flex-none w-1/3 h-1/2">
                    <Image 
                        src={selectedNFT!.image}
                        alt={selectedNFT!.name} 
                        className="rounded-lg"
                        width={500}
                        height={500}  
                    />
                </div>
    
                <div className='ml-4'>
                    <h1 className="text-3xl font-bold mb-2 border-2 text-purple-700 border-white">{selectedNFT!.name}</h1>
                    <div className="mb-4 text-black font-semibold text-xs">Owned by <span className="font-bold text-purple-700">{selectedNFT!.brand}</span></div>
    
                    {/* Views and PFPs */}
                    <div className="flex items-center text-sm text-gray-400 mb-6 bg-white">
                        <span className="mr-4"># 6,351</span>
                        <div className='flex flex-row items-center'>
                            <EyeIcon className="h-6 w-6 text-blue-500" />
                            <span className="mr-4">70 views</span>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className='flex flex-col mt-4 flex-1 '>
                {/* Description */}
                <div className='flex flex-col justify-center w-full border-2 border-gray-100 rounded-lg'>
                    <div className='flex items-center pl-2 w-full border-b-2 border-gray-100'>
                        <Bars3BottomLeftIcon className="h-6 w-6 text-gray-300"/>
                        <h1 className='text-gray-700 font-bold text-lg p-2'>Description</h1>
                    </div>
                    <p className='text-black p-2'>{selectedNFT!.description}</p>
                </div>
            </div>
    
            {/* Price */}
            <div className="mb-4 flex items-center">
                <span className="text-2xl font-bold text-black mr-2">0.014 ETH</span>
                <span className="text-gray-400">$21.75</span>
            </div>
    
            {/* Buy Button */}
            <button className="bg-purple-400 text-white py-2 px-4 rounded hover:bg-purple-500 active:bg-purple-600 focus:outline-none">
                Buy now
            </button>
        </div>
    
    </div>
    
      )}
    </div>

  )
}

export default Dashboard;
