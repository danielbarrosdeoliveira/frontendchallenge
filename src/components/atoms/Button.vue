<template>
  <router-link to="/" class="button">
    voltar
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
});
</script>

<style scoped>
.button {
  color: var(--color-white);
}
</style>
