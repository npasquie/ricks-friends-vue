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
    switchFilter(filter){
      state.filter = filter
    },
    setSearch(search){
      state.search = search
    },
    toggleFilters(){
      state.filterIsEnabled = !state.filterIsEnabled
    }
  },
  actions: {
    switchFilter(filter){
      if (filter === "Alive" || filter === "Dead" || filter === "unknown")
        context.commit('switchFilter',filter)
    },
    setSearch(search){
      context.commit('setSearch',search)
    },
    toggleFilters(){
      context.commit('toggleFilters')
    }
  } // modules not needed for this project
})
