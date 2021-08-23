<template>
  <div class="home">
    <Card :pokemons="pokemons" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Card from '@/components/molecules/Card.vue';
import Pokemon from '@/types/Pokemon';

export default defineComponent({
  name: 'Component',
  components: { Card },
  setup() {
    const pokemons = ref<Pokemon[]>([
      {
        id: '1',
        name: 'Pikachu',
        type: ['teste', 'teste 2'],
        images: {
          small: 'https://images.pokemontcg.io/sm12/241.png',
        },
      },
      {
        id: '1',
        name: 'Pikachu',
        type: ['teste', 'teste 2'],
        images: {
          small: 'https://images.pokemontcg.io/sm12/241.png',
        },
      },
      {
        id: '1',
        name: 'Pikachu',
        type: ['teste', 'teste 2'],
        images: {
          small: 'https://images.pokemontcg.io/sm12/241.png',
        },
      },
      {
        id: '1',
        name: 'Pikachu',
        type: ['teste', 'teste 2'],
        images: {
          small: 'https://images.pokemontcg.io/sm12/241.png',
        },
      },
      {
        id: '1',
        name: 'Pikachu',
        type: ['teste', 'teste 2'],
        images: {
          small: 'https://images.pokemontcg.io/sm12/241.png',
        },
      },
      {
        id: '1',
        name: 'Pikachu',
        type: ['teste', 'teste 2'],
        images: {
          small: 'https://images.pokemontcg.io/sm12/241.png',
        },
      },
      {
        id: '1',
        name: 'Pikachu',
        type: ['teste', 'teste 2'],
        images: {
          small: 'https://images.pokemontcg.io/sm12/241.png',
        },
      },
      {
        id: '1',
        name: 'Pikachu',
        type: ['teste', 'teste 2'],
        images: {
          small: 'https://images.pokemontcg.io/sm12/241.png',
        },
      },
      {
        id: '1',
        name: 'Pikachu',
        type: ['teste', 'teste 2'],
        images: {
          small: 'https://images.pokemontcg.io/sm12/241.png',
        },
      },
      {
        id: '1',
        name: 'Pikachu',
        type: ['teste', 'teste 2'],
        images: {
          small: 'https://images.pokemontcg.io/sm12/241.png',
        },
      },
      {
        id: '1',
        name: 'Pikachu',
        type: ['teste', 'teste 2'],
        images: {
          small: 'https://images.pokemontcg.io/sm12/241.png',
        },
      },
      {
        id: '1',
        name: 'Pikachu',
        type: ['teste', 'teste 2'],
        images: {
          small: 'https://images.pokemontcg.io/sm12/241.png',
        },
      },
      {
        id: '1',
        name: 'Pikachu',
        type: ['teste', 'teste 2'],
        images: {
          small: 'https://images.pokemontcg.io/sm12/241.png',
        },
      },
      {
        id: '1',
        name: 'Pikachu',
        type: ['teste', 'teste 2'],
        images: {
          small: 'https://images.pokemontcg.io/sm12/241.png',
        },
      },
    ]);

    return { pokemons };
  },
});
</script>

<style scoped>
.home {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
}
</style>
