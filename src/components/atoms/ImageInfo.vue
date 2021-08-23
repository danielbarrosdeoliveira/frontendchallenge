<template>
  <div class="image-detail">
    <img :src="source" :alt="text" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageDetail',
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
.image-detail img {
  width: 100%;
  max-width: 400px;
  height: 100%;
  border-radius: 4px 0 0 4px;
}
</style>
