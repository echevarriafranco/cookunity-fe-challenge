
import { Card } from 'antd';
import Image from 'next/image';
import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import { getExpansionText, getPokemonTypeText, getRarityText } from '@/app/helpers/commonHelper';
import { getPokemonDetailsById } from '@/app/helpers/api';
import { IPokemon, IPokemonExtendedModel } from '@/app/types/IPokemon';

interface IProps {
    pokemon?: IPokemon,
    id?: string
    disableLink?: boolean
}
export default async function PokemonCard({ pokemon, id, disableLink }: IProps) {
    let pokemonData: IPokemon | undefined = pokemon
    try {
        if (!pokemon && id) {
            const data: IPokemonExtendedModel = await getPokemonDetailsById(id)
            pokemonData = data.pokemon
        }
    } catch (error) {
        throw new Error()
    }


    return (
        <Link className='h-auto w-[250px] m-auto' href={!disableLink ? '' : `pokemons/${pokemonData!.id}`} >
            <Card
                className={styles.cardBackground}
                hoverable
                title={<span className='font-bold'>{pokemonData!.name}</span>}
                extra={<span>HP({pokemonData?.health})</span>}
                cover={
                    <Image alt={pokemonData!.name} width={100} height={100}
                        src={pokemonData!.img}
                        className='h-[100px] w-full'
                        style={{ objectFit: 'contain' }} />
                }
            >
                <div className='flex flex-col justify-between gap-1 '>
                    <span className='flex flex-col'><span className='font-bold'>Type:</span><span className={styles.title}>{getPokemonTypeText(pokemonData!.type?.name)}</span></span>
                    <span className='flex flex-col'><span className='font-bold'>Rarity:</span><span className={styles.title}>{getRarityText(pokemonData!.rarity)}</span></span>
                    <span className='flex flex-col'><span className='font-bold'>Expansion:</span><span className={styles.title}>{getExpansionText(pokemonData!.expansion)}</span></span>
                </div>
            </Card>
        </Link>
    );
}
