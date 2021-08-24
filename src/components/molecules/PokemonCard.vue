<template>
  <div class="pokemon-card" v-if="pokemons && pokemons.length">
    <div class="card" v-for="pokemon in orderedJobs" :key="pokemon.id">
      <router-link :to="{ name: 'pokemon', params: { id: pokemon.id } }">
        <CardImage :source="pokemon.images.small" />
        <CardInfo :name="pokemon.name" :pokeid="pokemon.id" :poketype="pokemon.types" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
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
      type: Object as PropType<Pokemon[]>,
      required: true,
    },
  },
  setup(props) {
    // eslint-disable-next-line arrow-body-style
    const orderedJobs = computed(() => {
      // eslint-disable-next-line vue/no-mutating-props
      return props.pokemons.sort((a:Pokemon, b:Pokemon) => (a.name > b.name ? 1 : -1));
    });

    return { orderedJobs };
  },
});
</script>

<style scoped>
.pokemon-card {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  margin: 0 auto;
}

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

@media screen and (max-width: 480px) {
  .pokemon-card {
    max-width: 400px;
    margin: 64px auto;
    width: 100%;
    height: 300px;
    display: flex;
    flex-wrap: nowrap;
    overflow-y: auto;
    flex-direction: row;
    justify-content: space-between;
    font-size: .8rem;
  }

  .card {
    max-width: 300px;
    height: 100%;
    max-height: 270px;
    margin: 0;
  }
}
</style>
