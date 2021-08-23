<template>
  <Container class="home-template">
    <SearchForm />
    <PokemonCard :pokemons="pokemons" />
  </Container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Container } from '@/components/bosons';
import { SearchForm, PokemonCard } from '@/components/molecules';
import { Pokemon } from '@/types';

export default defineComponent({
  name: 'Component',
  components: {
    Container,
    SearchForm,
    PokemonCard,
  },
  setup() {
    const pokemons = ref<Pokemon[]>([
      {
        id: 'basep-1',
        name: 'Pikachu',
        types: ['Lightning'],
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
        images: {
          small: 'https://images.pokemontcg.io/basep/1.png',
          large: 'https://images.pokemontcg.io/basep/1_hires.png',
        },
      },
    ]);

    return { pokemons };
  },
});
</script>

<style scoped>
.home-template {
  display: grid;
  margin: 5rem auto;
  grid-gap: 5rem;
}
</style>
