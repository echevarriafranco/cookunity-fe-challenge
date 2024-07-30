import React from 'react';
import { getAllPokemons } from '@/app/helpers/api';
import RivalSelectionSelector from '../RivalSelectionSelector/RivalSelectionSelector';
import { IPokemon } from '@/app/types/IPokemon';

export default async function BattleWithRival() {

    let allPokemons: IPokemon[]
    try {
        allPokemons = await getAllPokemons()
    } catch (error) {
        throw new Error()
    }

    return (
        <div className='flex flex-col mt-4 gap-4 '>
            <RivalSelectionSelector rivals={allPokemons} />
        </div>
    );
}
