<template>
  <div class="container">
    <div class="pokemon-info">
      <ImageDetail source="https://images.pokemontcg.io/basep/1_hires.png" text="Pikachu" />
      <PokemonDetails />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ImageDetail } from '../atoms';
import { PokemonDetails } from '../molecules';

export default defineComponent({
  name: 'PokemonInfo',
  components: { ImageDetail, PokemonDetails },
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
