<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Container',
});
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
}

@media screen and (max-width: 480px) {
  .contaniner {
    width: 100%;
    max-width: 400px;
  }
}
</style>
