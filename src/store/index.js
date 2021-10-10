import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filter:"Alive",
    search:'',
    filterIsEnabled: false
  },
  mutations: {
    switchFilter(state,payload){
      let filter = payload.filter

      if (filter === "Alive" || filter === "Dead" || filter === "unknown")
        state.filter = filter
    },
    setSearch(state,payload){
      state.search = payload.search
    },
    toggleFilters(state){
      state.filterIsEnabled = !state.filterIsEnabled
    }
  } // no action or module are needed for this project
})
