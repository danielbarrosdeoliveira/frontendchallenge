<template>
  <div class="container">
    <div class="pokemon-info">
      <ImageDetail source="https://images.pokemontcg.io/basep/1_hires.png" text="Pikachu" />
      <PokemonDetails :detail="detail" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ImageDetail } from '../atoms';
import { PokemonDetails } from '../molecules';

export default defineComponent({
  name: 'PokemonInfo',
  components: { ImageDetail, PokemonDetails },
  setup() {
    const detail = ref({
      id: 'basep-1',
      name: 'Pikachu',
      supertype: 'Pokémon',
      subtypes: ['Basic'],
      level: '16',
      hp: '60',
      types: ['Lightning'],
      evolvesTo: ['Raichu'],
      attacks: [
        {
          name: 'Growl',
          cost: ['Colorless'],
          convertedEnergyCost: 1,
          damage: '',
          text:
            "If the Defending Pokémon attacks Pikachu during your opponent's next turn, any damage done by the attack is reduced by 10 (after applying Weakness and Resistance). (Benching either Pokémon ends this effect.)",
        },
        {
          name: 'Thundershock',
          cost: ['Lightning', 'Lightning'],
          convertedEnergyCost: 2,
          damage: '20',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        },
      ],
      weaknesses: [
        {
          type: 'Fighting',
          value: '×2',
        },
      ],
      retreatCost: ['Colorless'],
      convertedRetreatCost: 1,
      set: {
        id: 'basep',
        name: 'Wizards Black Star Promos',
        series: 'Base',
        printedTotal: 53,
        total: 53,
        legalities: {
          unlimited: 'Legal',
        },
        ptcgoCode: 'PR',
        releaseDate: '1999/07/01',
        updatedAt: '2020/08/14 09:35:00',
        images: {
          symbol: 'https://images.pokemontcg.io/basep/symbol.png',
          logo: 'https://images.pokemontcg.io/basep/logo.png',
        },
      },
      number: '1',
      artist: 'Keiji Kinebuchi',
      rarity: 'Promo',
      flavorText:
        'When several of these Pokémon gather, their electricity could build and cause lightning storms.',
      nationalPokedexNumbers: [25],
      legalities: {
        unlimited: 'Legal',
      },
      images: {
        small: 'https://images.pokemontcg.io/basep/1.png',
        large: 'https://images.pokemontcg.io/basep/1_hires.png',
      },
      tcgplayer: {
        url: 'https://prices.pokemontcg.io/tcgplayer/basep-1',
        updatedAt: '2021/08/22',
        prices: {
          normal: {
            low: 3.5,
            mid: 6.96,
            high: 360.74,
            market: 10.17,
            directLow: 3,
          },
        },
      },
      cardmarket: {
        url: 'https://prices.pokemontcg.io/cardmarket/basep-1',
        updatedAt: '2021/08/22',
        prices: {
          averageSellPrice: 6.78,
          lowPrice: 3.6,
          trendPrice: 8.79,
          germanProLow: null,
          suggestedPrice: null,
          reverseHoloSell: null,
          reverseHoloLow: null,
          reverseHoloTrend: 16.32,
          lowPriceExPlus: 5.99,
          avg1: 6.49,
          avg7: 9.18,
          avg30: 5.76,
          reverseHoloAvg1: 12,
          reverseHoloAvg7: 12.83,
          reverseHoloAvg30: 12.83,
        },
      },
    });

    return { detail };
  },
});
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.pokemon-info {
  max-width: 800px;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #3d5a80;
  color: #e0fbfc;
  border-radius: 4px;
  margin: 0 auto;
}
</style>
