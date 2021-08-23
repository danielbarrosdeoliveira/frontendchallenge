<template>
  <div class="pokemon-detail">
    <PokemonInfo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PokemonInfo } from '@/components/organisms';

export default defineComponent({
  components: { PokemonInfo },
  name: 'PokemonDetail',
});
</script>

<style scoped>
.pokemon-detail {
  display: flex;
}
</style>
