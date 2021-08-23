<template>
  <div class="detail-info">
    <h3>
      {{ title }}: <span class="text">{{ text }}</span>
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DetailInfo',
  props: {
    title: {
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
.detail-info {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.detail-info .text {
  font-weight: normal;
}
</style>
