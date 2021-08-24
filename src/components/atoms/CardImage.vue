<template>
  <div class="card-image">
    <img :src="source" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardImage',
  props: {
    source: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.card-image {
  width: 100%;
}
.card-image img {
  width: 100%;
  display: block;
  height: 100%;
  max-height: 280px;
}

@media screen and (max-width: 480px) {
  .card-image {
    width: 100%;
    max-width: 400px;
    max-height: 160px;
    height: 100%;
  }
  .card-image img {
    width: 100%;
    display: block;
  }
}
</style>
