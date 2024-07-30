import CardsListing from '@/app/components/CardsListing/CardsListing';
import CardsFilterByType from '@/app/components/CardsFilterByType/CardsFilterByType';
import { Skeleton } from 'antd';
import React, { Suspense } from 'react';
import CardSearchByExpansion from '@/app/components/CardSearchByExpansion/CardSearchByExpansion';
import CardSearchByName from '@/app/components/CardSearchByName/CardSearchByName';
import { UrlParamsEnum } from '@/app/types/UrlParams';

export default function PokemonsPage({ searchParams }: { searchParams?: { queryByName?: string, queryByExpansion?: string, type?: string, page?: string } }) {
  const queryByName = searchParams?.queryByName || ''
  const queryByExpansion = searchParams?.queryByExpansion || ''
  const type = searchParams?.type || ''
  const page = searchParams?.page || ''

  return (
    <div className='w-full h-auto'>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  grid justify-center w-full gap-2'>
        <span className='font-bold text-lg'>Pokemon App</span>
        <CardSearchByName />
        <CardSearchByExpansion />
        <CardsFilterByType />
      </div>

      <Suspense
        key={queryByName + queryByExpansion + type + page}
        fallback={<Skeleton active className='mt-4'></Skeleton>}
      >
        <CardsListing
          queryByName={queryByName}
          queryByExpansion={queryByExpansion}
          page={page}
          type={type}>
        </CardsListing>
      </Suspense>
    </div>
  );
}
