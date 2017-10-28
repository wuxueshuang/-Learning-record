import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import {getDushu,getDianying} from './api/api'
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    searchResultDushu: [],
    searchResultMOview: []
  },
  mutations: {
    changeSearchResultdushu (state,payload) {
      state.searchResultDushu = payload.data
    },
    changesearchResultMOview (state,payload) {
      state.searchResultMOview = payload.data
    }
  },
  actions: {
    getDushu(){
      getDushu().then((data)=>{
        console.log(a);
      })
    },
    getDianying(){
      ajax('/b')
    },
    yibyue(){
      ajax('/c')
    }
  }
})

export default store
