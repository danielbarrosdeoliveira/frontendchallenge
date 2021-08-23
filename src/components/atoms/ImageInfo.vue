<template>
  <div class="image-info">
    <img :src="source" :alt="text" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageInfo',
  props: {
    source: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.image-info img {
  width: 100%;
  max-width: 400px;
  height: 100%;
  border-radius: 4px 0 0 4px;
}
</style>
