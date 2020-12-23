import weatherApi from "../../api/weather-api";

const state = {
  city: {},
  cities: {}
};

const getters = {
  city(state) {
    return state.city;
  },
  cities(state) {
    return state.cities;
  }
};

const mutations = {
  SET_CITY: (state, payload) => {
    state.city = payload;
  },
  ADD_CITY_TO_LIST: (state, payload) => {
    state.cities = { ...state.cities, [payload.id]: payload };
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
  },
  addCityToList({ commit }, city) {
    commit("ADD_CITY_TO_LIST", city);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
