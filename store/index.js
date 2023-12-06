export const state = () => ({
  selected: null
});

export const mutations = {
  setSelected(state, value) {
    state.selected = value;
  }
};

export const getters = {
  getSelected: (state) => state.selected
};

export const actions = {
  changeSelected({ commit }, value) {
    commit('setSelected', value);
  }
};
