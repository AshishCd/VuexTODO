import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "My Custom Title",
    links: [
      "htts://www.google.com",
      "htts://www.youtube.com",
      'htts://www.ashish.com'
    ]
  },

  getters: {
    countLinks: state => {
      return state.links.length;
    }
  },

  mutations: {
    ADD_LINKS: (state, link) => {
      state.links.push(link);
    },
    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1);
    },
    REMOVE_ALL:(state)=>{
      state.links=[];
    }
  },
  actions: {
    removeLink : (contex, link) => {
      contex.commit('REMOVE_LINK', link)
    },
    removeAll_Links:(contex) => {
      contex.commit('REMOVE_ALL')
    }
  }
});
