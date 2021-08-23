<template>
  <div class="pokemon-detail">
    <PokemonInfoTemplate />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import { PokemonInfoTemplate } from '@/components/templates';

export default defineComponent({
  components: { PokemonInfoTemplate },
  name: 'PokemonDetail',
  data() {
    return {
      id: this.$route.params,
    };
  },
  methods: {
    ...mapActions(['show']),
  },
  beforeMount() {
    this.show(this.id);
  },
});
</script>
