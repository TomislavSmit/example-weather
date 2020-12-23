import weatherApi from "../../api/weather-api";

const state = {
  city: {}
};

const getters = {};

const mutations = {
  SET_CITY: (state, payload) => {
    state.city = payload;
  }
};

const actions = {
  async fetchCity({ commit }, term) {
    try {
      const res = await weatherApi.get("weather", {
        params: {
          q: term
        }
      });

      commit("SET_CITY", res.data);
    } catch (err) {
      return err;
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
