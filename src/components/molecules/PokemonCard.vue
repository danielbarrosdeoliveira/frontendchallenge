<template>
  <div class="card" v-for="pokemon in pokemons" :key="pokemon.id">
    <router-link :to="{ name: 'pokemon', params: { id: pokemon.id } }">
      <CardImage :source="pokemon.images.small" />
      <CardInfo :name="pokemon.name" :pokeid="pokemon.id" :poketype="pokemon.type" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CardImage, CardInfo } from '@/components/atoms';
import { Pokemon } from '@/types';

export default defineComponent({
  name: 'Card',
  components: {
    CardImage,
    CardInfo,
  },
  props: {
    pokemons: {
      type: Array as PropType<Pokemon[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
.card {
  background-color: #3d5a80;
  width: 100%;
  max-width: 240px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 4px;
  color: #e0fbfc;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>
