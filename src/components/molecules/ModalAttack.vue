<template>
  <div class="modal-attack">
    <div class="modal-header">
      <button @click="$emit('closeModal')">
        <img src="@/assets/icons/close.svg" alt="voltar" />
      </button>
    </div>
    <div class="modal-body">
      <div class="attack-name">
        <h3>Nome:</h3>
        <span>{{ attack.name }}</span>
      </div>
      <div class="attack-cost">
        <h3>Custo de Mana:</h3>
        <span>{{ attack.convertedEnergyCost }}</span>
      </div>
      <div class="attack-damage">
        <h3>Dano:</h3>
        <span v-if="attack.damage">{{ attack.damage }}</span>
        <span v-else>No damage</span>
      </div>
      <div class="attack-description">
        <h3>Descrição:</h3>
        <span v-if="attack.text">{{ attack.text }}</span>
        <span v-else>No description</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalAttack',
  emits: ['closeModal'],
  props: {
    attack: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
.modal-attack {
  display: grid;
  grid-template-rows: 100px, 1fr, 1fr, 5fr;
  position: fixed;
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
  display: grid;
  grid-template-rows: 120px, 120px, 200px, 1fr;
}

h3 {
  text-align: center;
  margin-bottom: 8px;
  color: #ee6c4d;
}

.attack-name {
  margin-top: 2rem;
  text-align: center;
}

.attack-cost,
.attack-damage,
.attack-description {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 1rem;
  text-align: center;
}

button {
  width: 100%;
  background-color: transparent;
  border: none;
  transition: opacity 0.3s;
}

button:hover {
  cursor: pointer;
  opacity: 0.7;
}

button img {
  width: 100%;
  max-width: 32px;
  display: block;
}

@media screen and (max-width: 480px) {
  .modal-attack {
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: 320px;
    width: 100%;
  }
}
</style>
