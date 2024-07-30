import { Expansion, Rarity } from "./enums";


export interface IPokemon {
    id: string;
    name: string;
    img: string;
    health: number;
    attack: number;
    type: Type;
    rarity: typeof Rarity[keyof typeof Rarity];
    expansion: typeof Expansion[keyof typeof Expansion];
}
export interface IPokemonExtendedModel {
    pokemon: IPokemon
    resistanceTo: IPokemon[];
    weaknessTo: IPokemon[];
}

export interface Type {
    id: string;
    name: string;
} 