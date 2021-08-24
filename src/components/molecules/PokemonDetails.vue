<template>
  <div class="pokemon-details">
    <div class="detail-header">
      <div class="detail-name">
        <h3>
          Nome:
          <span class="name">{{ detail.name }}</span>
        </h3>
      </div>
      <div class="detail-id">
        <h3>
          ID:
          <span class="id">{{ detail.id }}</span>
        </h3>
      </div>
    </div>
    <div class="detail-body">
      <div class="detail">
        <ul class="types">
          <h3>Tipo(s):</h3>
          <li class="type" v-for="type in detail.types" :key="type">
            {{ type }}
          </li>
        </ul>
      </div>
      <div class="detail">
        <ul v-if="detail.resistances" class="resistences">
          <h3>Resistências:</h3>
          <li class="resistence" v-for="resistance in detail.resistances" :key="resistance">
            {{ resistance.type }}
          </li>
        </ul>
        <ul v-else>
          <h3>Resistências:</h3>
          <li class="resistence">
            don't list
          </li>
        </ul>
      </div>
      <div class="detail">
        <ul class="weaknesses">
          <h3>Fraquezas:</h3>
          <li class="weakness" v-for="weakness in detail.weaknesses" :key="weakness">
            {{ weakness.type }}
          </li>
        </ul>
      </div>
      <div class="detail">
        <ul class="attacks">
          <h3>Ataques:</h3>
          <li class="attack" v-for="attack in detail.attacks" :key="attack">
            <p @click="modalAttack(attack)">
              {{ attack.name }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <Button to="/" text="Voltar" />
  </div>
  <ModalAttack v-if="modal" :attack="attack" @closeModal="handleModal" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Button } from '../atoms';
import { ModalAttack } from '@/components/molecules';

export default defineComponent({
  name: 'PokemonDetails',
  components: {
    Button,
    ModalAttack,
  },
  props: {
    detail: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      modal: false,
      attack: [],
    };
  },
  methods: {
    handleModal() {
      this.modal = !this.modal;
    },
    modalAttack(attack: []) {
      this.handleModal();
      this.attack = attack;
    },
  },
});
</script>

<style scoped>
.pokemon-details {
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  gap: 32px;
  width: 100%;
  max-width: 400px;
  padding: 1rem;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.detail {
  margin-top: 1rem;
}

.name,
.id {
  font-weight: normal;
}

.resistence,
.attack,
.type,
.weakness {
  margin: 1rem 0 0 2rem;
  list-style: circle;
}

.attack p {
  transition: color 0.3s;
  cursor: pointer;
}
.attack p:hover {
  color: #ee6c4d;
}
</style>
