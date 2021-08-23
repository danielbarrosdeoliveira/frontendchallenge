<template>
  <div class="card-info">
    <div class="name">
      <p>Nome: {{ name }}</p>
      <p>ID: {{ pokeid }}</p>
    </div>
    <ul class="id">
      <p>Tipo(s):</p>
      <li class="type-item" v-for="(type, index) in poketype" :key="type[index]">{{ type }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardInfo',
  props: {
    name: {
      type: String,
      required: true,
    },
    pokeid: {
      type: String,
      required: true,
    },
    poketype: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped>
.card-info {
  display: flex;
  flex-direction: column;
  padding: 8px;
}
.card-info p {
  line-height: 24px;
}
.card-info ul {
  display: flex;
  margin-top: 0.5rem;
}
.card-info .type-item {
  display: grid;
  line-height: 24px;
  padding: 0 8px;
}
</style>
