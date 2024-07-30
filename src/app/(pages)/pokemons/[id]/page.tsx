import PokemonCard from '@/app/components/PokemonCard/PokemonCard';
import { Skeleton } from 'antd';
import React, { Suspense } from 'react';
import BattleWithRival from '@/app/components/BattleWithRival/BattleWithRival';

export default function BattlePage({ params, searchParams }: {
  params: { id: string; defender?: string },
  searchParams?: { defender?: string }
}) {
  return (
    <>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 flex gap-4 items-center min-h-[450px]'>

        <div className='flex flex-col items-center h-full'>
          <div className='flex items-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-medium'>
            <span className=' w-full text-center  uppercase text-[24px]'>Attacker</span>
          </div>
          <Suspense
            key={params.id}
            fallback={<Skeleton active className='mt-4'></Skeleton>}
          >
            <PokemonCard id={params.id} />
          </Suspense>
        </div>

        <div className='flex flex-col mt-4 gap-4 '>
          <div className='flex items-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold'>
            <span className=' w-full text-center  uppercase text-[24px]'>Battle with:</span>
          </div>
          <Suspense fallback={<Skeleton active className='mt-4'></Skeleton>} >
            <BattleWithRival />
          </Suspense>

        </div>

        <div className='flex flex-col  h-full'>
          {searchParams?.defender && <Suspense
            key={params.id + searchParams?.toString()}
            fallback={<Skeleton active className='mt-4'></Skeleton>}
          >
            <div className='flex items-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-medium'>
              <span className=' w-full text-center  uppercase text-[24px]'>Defender</span>
            </div>
            <PokemonCard id={searchParams?.defender} />
          </Suspense>
          }
        </div>

      </div>
    </>
  );
} 