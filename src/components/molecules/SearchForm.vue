<template>
  <form class="search-form">
    <input
      v-model="search"
      class="search"
      type="text"
      placeholder="Pesquise pelo nome do pokemon..."
      :disabled="loading"
    />
    <button type="submit" @click.prevent="searchPokemon" @keypress.enter="searchPokemon">
      <img src="@/assets/icons/search.svg" alt="Buscar" />
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'SearchForm',
  data() {
    return {
      search: '',
    };
  },
  methods: {
    ...mapActions(['index']),
    searchPokemon() {
      const query = `?q=name:*${this.search}*`;
      this.index(query);
    },
  },
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

@media screen and (max-width: 480px) {
  .search-form {
    max-width: 400px;
    width: 100%;
    margin: 32px auto;
    position: fixed;
    top: 20px;
  }
}
</style>
