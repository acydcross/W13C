import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songAuthor: ["Author1", "Author2", "Author3"],
    userSong: "Song1",
    songList: ["Song1", "Song2", "Song3"]
  },
  mutations: {
    changeSong(state, data) {
      state.userSong = data;
    }
  },
  actions: {},
  modules: {}
});
