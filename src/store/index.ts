import { createStore } from 'vuex';
import { api } from '@/services';
import { Pokemon } from '@/types';

interface Show {
  id: Pokemon['id'];
}

export type State = { loading: boolean; pokemons: Pokemon; pokemon: Pokemon };

const state: State = {
  pokemons: {
    id: '',
    attacks: [],
    images: { small: '', large: '' },
    name: '',
    resistances: [],
    types: [],
    weaknesses: [],
  },
  pokemon: {} as Pokemon,
  loading: false,
};

export const store = createStore({
  state,
  mutations: {
    SET_ALL(state, payload) {
      state.pokemons = payload;
    },
    SET_SINGLE(state, payload) {
      state.pokemon = payload;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async index(context, query = '') {
      context.commit('SET_LOADING', true);
      const pokemons = await api.get(`/cards${query}`).then((response) => {
        context.commit('SET_ALL', response.data.data);
      });
      context.commit('SET_LOADING', false);
      return pokemons;
    },
    async show(context, { id }: Show) {
      context.commit('SET_LOADING', true);
      const pokemon = await api.get(`/cards/${id}`).then((response) => {
        context.commit('SET_SINGLE', response.data.data);
      });
      context.commit('SET_LOADING', false);
      return pokemon;
    },
  },
});
