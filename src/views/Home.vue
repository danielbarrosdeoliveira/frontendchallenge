<template>
  <HomeTemplate />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import { HomeTemplate } from '@/components/templates';

export default defineComponent({
  name: 'Component',
  components: { HomeTemplate },
  methods: {
    ...mapActions(['index']),
  },
  beforeMount() {
    this.index();
  },
});
</script>

<style scoped>
.home {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
}
</style>
