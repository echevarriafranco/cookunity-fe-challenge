// handlers.js

import { Expansion, PokemonType, Rarity } from "../types/enums";

 
export function getPokemonTypeText(type: string) {
  switch (type) {
    case PokemonType.FIRE:
      return 'Fire';
    case PokemonType.WATER:
      return 'Water';
    case PokemonType.ELECTRIC:
      return 'Electric';
    case PokemonType.GRASS:
      return 'Grass';
    case PokemonType.ICE:
      return 'Ice';
    case PokemonType.FIGHTING:
      return 'Fighting';
    case PokemonType.POISON:
      return 'Poison';
    case PokemonType.GROUND:
      return 'Ground';
    case PokemonType.FLYING:
      return 'Flying';
    case PokemonType.PSYCHIC:
      return 'Psychic';
    case PokemonType.BUG:
      return 'Bug';
    case PokemonType.ROCK:
      return 'Rock';
    case PokemonType.GHOST:
      return 'Ghost';
    case PokemonType.DRAGON:
      return 'Dragon';
    case PokemonType.DARK:
      return 'Dark';
    case PokemonType.STEEL:
      return 'Steel';
    case PokemonType.FAIRY:
      return 'Fairy';
    default:
      return type;
  }
}

export function getRarityText(rarity: string) {
  switch (rarity) {
    case Rarity.COMMON:
      return 'Common';
    case Rarity.UNCOMMON:
      return 'Uncommon';
    case Rarity.RARE:
      return 'Rare';
    case Rarity.ULTRA_RARE:
      return 'Ultra Rare';
    case Rarity.LEGENDARY:
      return 'Legendary';
    default:
      return rarity;
  }
}

export function getExpansionText(expansion: string) {
  switch (expansion) {
    case Expansion.SWORD_AND_SHIELD:
      return 'Sword and Shield';
    case Expansion.BRILLIANT_STARS:
      return 'Brilliant Stars';
    case Expansion.ASTRAL_RADIANCE:
      return 'Astral Radiance';
    case Expansion.SILVER_TEMPEST:
      return 'Silver Tempest';
    case Expansion.LOST_ORIGIN:
      return 'Lost Origin';
    case Expansion.POKEMON_GO:
      return 'Pokémon GO';
    default:
      return expansion;
  }
}