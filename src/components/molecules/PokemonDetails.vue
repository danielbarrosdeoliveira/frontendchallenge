<template>
  <div class="pokemon-details">
    <DetailInfo title="Nome" text="teste" />
    <DetailInfo title="ID" text="teste1232132" />
    <DetailInfo title="Tipo" text="teste" />
    <DetailInfo title="Fraqueza" text="teste" />
    <DetailInfo title="Resistência" text="teste" />
    <DetailInfo title="Ataques" text="teste" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DetailInfo } from '../atoms';

export default defineComponent({
  name: 'PokemonDetails',
  components: {
    DetailInfo,
  },
});
</script>

<style scoped>
.pokemon-details {
  width: 100%;
  max-width: 400px;
  padding: 1rem;
}
</style>
