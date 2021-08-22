<template>
  <SearchForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchForm from '@/components/molecules/SearchForm.vue';

export default defineComponent({
  name: 'Component',
  components: { SearchForm },
});
</script>

<style scoped></style>
