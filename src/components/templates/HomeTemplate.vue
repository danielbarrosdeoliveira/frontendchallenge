<template>
  <Container class="home-template">
    <SearchForm />
    <Loading v-if="loading" :loadingStyle="{ width: '60px', height: '60px' }" />
    <PokemonCard :pokemons="pokemons" v-else-if="!loading && pokemons.length" />
  </Container>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { Container, Loading } from '@/components/bosons';
import { SearchForm, PokemonCard } from '@/components/molecules';

export default defineComponent({
  name: 'Component',
  components: {
    Container,
    SearchForm,
    PokemonCard,
    Loading,
  },
  setup() {
    const store = useStore();

    return {
      loading: computed(() => store.state.loading),
      pokemons: computed(() => store.state.pokemons),
    };
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
