<template>
  <Container class="home-template">
    <SearchForm />
    <PokemonCard :pokemons="pokemons" v-if="!loading && pokemons.length" />
    <div class="no-results" v-else-if="!loading && pokemons.length == 0">
      <h3>:( Não conseguimos encontrar seu pokemon,
        <br />tente usar outras palavras ou termos...
      </h3>
    </div>
    <Loading v-else :loadingStyle="{ width: '60px', height: '60px' }" />
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
    const loading = computed(() => store.state.loading);
    const pokemons = computed(() => store.state.pokemons);

    return {
      loading,
      pokemons,
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

h3 {
  text-align: center;
}

@media screen and (max-width: 480px) {
  .home-template {
    max-width: 400px;
    width: 100%;
    position: relative;
  }
  .no-results {
    margin: 64px auto;
  }
}
</style>
