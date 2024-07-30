import React from 'react';
import { getAllPokemons } from '@/app/helpers/api';
import Image from 'next/image';
import searchIcon from '/public/searchIconBig.png'
import PokemonCard from '../PokemonCard/PokemonCard';
import { IPokemon } from '@/app/types/IPokemon';

interface IProps {
    queryByName: string
    queryByExpansion: string
    type: string
    page: string,
}

export default async function CardsListing({ queryByName, queryByExpansion, type }: IProps) {
    let data
    try {
        data = await getAllPokemons(queryByName, queryByExpansion, type)
    } catch (error) {
        throw new Error()
    }

    return (
        <>
            {data?.length ? (
                <div className='my-8 gap-4 flex flex-col justify-center w-full items-center'>
                    <div className='my-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  grid justify-center w-full'>
                        {data?.map((pokemon: IPokemon, index: number) => {
                            return <PokemonCard pokemon={pokemon} key={index} disableLink></PokemonCard>
                        })}
                    </div>
                </div>
            ) : null}

            {!data?.length ? (
                <div className='my-8 gap-4 flex justify-center w-full items-center'>
                    <Image src={searchIcon} width={50} height={50} alt='No results' />
                    <span>No records found for your search</span>
                </div>
            ) : null}
        </>

    );
}
