<template>
  <div class="modal-attack">
    <div class="modal-header">
      <button @click.prevent="this.$router.go(0)">
        <img src="@/assets/icons/close.svg" alt="voltar" />
      </button>
    </div>
    <div class="modal-body">
      <div class="attack-name">
        <h3>Nome:</h3>
        <span>Energy Absorption</span>
      </div>
      <div class="attack-cost">
        <h3>Custo de Mana:</h3>
        <span>1</span>
      </div>
      <div class="attack-damage">
        <h3>Dano:</h3>
        <span>no information</span>
      </div>
      <div class="attack-description">
        <h3>Descrição:</h3>
        <span>Choose up to 2 Energy cards from your discard pile and attach them to Mewtwo.</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalAttack',
});
</script>

<style scoped>
.modal-attack {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 500px;
  background-color: #293241fa;
  border-radius: 4px;
}

.modal-header {
  position: absolute;
  right: 10px;
  top: 10px;
}

.modal-body {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
}

h3 {
  text-align: center;
  margin-bottom: 8px;
  color: #ee6c4d;
}

.attack-name,
.attack-cost,
.attack-damage,
.attack-description {
  margin: 2rem;
}

button {
  width: 100%;
  background-color: transparent;
  border: none;
}

button img {
  width: 100%;
  max-width: 32px;
  display: block;
}
</style>
