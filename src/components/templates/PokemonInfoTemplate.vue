<template>
  <Loading v-if="loading && !detail" />
  <Container class="pokemon-info-template" v-else-if="!loading && detail">
    <ImageInfo :source="detail && detail.images.large" :text="detail.name" />
    <PokemonDetails :detail="detail" />
  </Container>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { Container, Loading } from '@/components/bosons';
import { ImageInfo } from '@/components/atoms';
import { PokemonDetails } from '@/components/molecules';

export default defineComponent({
  name: 'Component',
  components: {
    ImageInfo,
    Container,
    Loading,
    PokemonDetails,
  },
  setup() {
    const store = useStore();

    return {
      loading: computed(() => store.state.loading),
      detail: computed(() => store.state.pokemon),
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
