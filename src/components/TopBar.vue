<template>
  <b-navbar variant="primary" class="bar">
    <b-navbar-brand class="title">
      <img src="../assets/ricks-head.png" width="30" height="30" class="ricksHead"/>
      Rick's Friends
    </b-navbar-brand>
    <router-link to="/characters" v-if="$route.params.id">
      <b-button>Return</b-button>
    </router-link>
    <div v-if="!$route.params.id" class="inputs">
      <b-button size="sm" variant="secondary" v-if="!filterIsEnabled" v-on:click="toggleFilters()" >Enable filters</b-button>
      <b-button size="sm" variant="secondary" v-if="filterIsEnabled" v-on:click="toggleFilters()" >Disable filters</b-button>
      <b-dropdown size="sm" text="filters" :disabled="!filterIsEnabled" >
        <b-dropdown-item-button v-on:click="switchFilter({filter:'Alive'})" :active="filter === 'Alive'" >
          Alive
        </b-dropdown-item-button >
        <b-dropdown-item-button  v-on:click="switchFilter({filter:'Dead'})" :active="filter === 'Dead'" >
          Dead
        </b-dropdown-item-button >
        <b-dropdown-item-button  v-on:click="switchFilter({filter:'unknown'})" :active="filter === 'unknown'" >
          Shrödinger
        </b-dropdown-item-button >
      </b-dropdown>
      <b-form-input placeholder="search" size="sm" v-on:change="setSearch($event)" />
    </div>
  </b-navbar>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'TopBar',
    computed: mapState({
      filter: 'filter',
      filterIsEnabled: 'filterIsEnabled'
    }),
    methods: {
      setSearch(event){
        this.$store.commit('setSearch',{search: event})
      },
      ...mapMutations([
        'toggleFilters',
        'switchFilter'
      ])
    },
    components: {}
  }
</script>

<style scoped>
  .title{
    display: inline-block;
    font-weight: bold;
    color: white;
  }

  .ricksHead{
    display: inline-block;
    vertical-align: top;
    margin-left: 1em;
    margin-right: 1em;
  }

  .inputs{
    color: blanchedalmond;
  }
</style>