<template>
  <form class="search-form">
    <input class="search" type="text" placeholder="Pesquise pelo nome do pokemon..." />
    <button type="submit">
      <img src="@/assets/icons/search.svg" alt="Buscar" />
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchForm',
});
</script>

<style scoped>
.search-form {
  width: 100%;
  max-width: 400px;
  position: relative;
  display: block;
  margin: 0 auto;
}

input {
  width: 100%;
  max-width: 800px;
  border: 1px solid #a9b0be;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  box-shadow: 0px 5px 5px rgba(#000000, 0.08);
  outline: none;
  margin: 0 auto;
  position: relative;
}

input::placeholder {
  color: #a9b0be;
}

button {
  position: absolute;
  right: 3px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
}

button img {
  width: 100%;
  display: block;
  max-width: 16px;
}
</style>
