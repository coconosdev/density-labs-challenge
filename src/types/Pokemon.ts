export interface Pokemon {
  name: string;
  types: { type: { name: string } }[];
  base_experience: number;
  height: number;
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  sprites: { front_default: string };
  url: string;
}
