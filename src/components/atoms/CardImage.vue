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
</style>
