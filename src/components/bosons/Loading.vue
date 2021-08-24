<template>
  <div
    class="loading"
    :style="
      `
      width: ${loadingStyle.width};
      height: ${loadingStyle.height};
      position: ${loadingStyle.position};
      top: ${loadingStyle.top};
      right: ${loadingStyle.right};
      padding: ${loadingStyle.padding};
      margin: ${loadingStyle.margin};
      `
    "
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Loading',
  props: {
    loadingStyle: {
      type: Object,
      default: () => ({
        width: '50px',
        height: '50px',
      }),
    },
  },
});
</script>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 3px solid rgba(113, 236, 156, 0.1);
  border-radius: 50%;
  border-top-color: #1fb052;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  margin: 0 auto;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@media screen and (max-width: 480px) {
  .loading {
    margin: 64px auto;
  }
}
</style>
