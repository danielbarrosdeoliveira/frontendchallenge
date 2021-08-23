<template>
  <router-link :to="to" class="button">
    {{ text }}
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.button {
  color: #e0fbfc;
  background-color: #293241;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  text-align: center;
  padding: 0.5rem;
  transition: all 300ms;
}

.button:hover {
  background-color: #e0fbfc;
  color: #293241;
}
</style>
