<template>
  <Container class="pokemon-info-template" v-if="!loading">
    <ImageInfo :source="detail.images.large" :text="detail.name" />
    <PokemonDetails :detail="detail" />
  </Container>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { Container } from '@/components/bosons';
import { ImageInfo } from '@/components/atoms';
import { PokemonDetails } from '@/components/molecules';

export default defineComponent({
  name: 'Component',
  components: {
    ImageInfo,
    Container,
    PokemonDetails,
  },
  setup() {
    const store = useStore();

    return {
      detail: computed(() => store.state.pokemon),
      loading: computed(() => store.state.loading),
    };
  },
});
</script>

<style scoped>
.pokemon-info-template {
  display: flex;
  margin: 3rem auto;
  width: 100%;
  max-width: 800px;
  background-color: #3d5a80;
  color: #e0fbfc;
  border-radius: 4px;
}

@media screen and (max-width: 480px) {
  .pokemon-info-template {
    flex-direction: column;
    max-width: 480px;
    width: 100%;
  }
}
</style>
