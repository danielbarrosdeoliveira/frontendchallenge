interface Image {
  small: string;
  large: string;
}

interface Attack {
  name: string;
  cost: Array<string>;
  convertedEnergyCost: number;
  damage?: string;
  text: string;
}

interface Weakness {
  type: string;
  value: string;
}

interface Resistence {
  type: string;
  value: string;
}
export interface Pokemon {
  id: string;
  name: string;
  images: Image;
  types: Array<string>;
  attacks: Array<Attack>;
  weaknesses: Array<Weakness>;
  resistances?: Array<Resistence>;
}
