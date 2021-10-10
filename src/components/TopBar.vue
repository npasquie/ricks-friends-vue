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
      <b-form-checkbox switch>&nbsp;Enable filters</b-form-checkbox>
      <b-dropdown text="filters">
        <b-dropdown-item v-on:click="switchFilter('Alive')" >
          <div :class="filter === 'Alive' ? 'selected' : 'notSelected'" > Alive </div>
        </b-dropdown-item>
        <b-dropdown-item v-on:click="switchFilter('Dead')" >
          <div :class="filter === 'Dead' ? 'selected' : 'notSelected'" > Dead </div>
        </b-dropdown-item>
        <b-dropdown-item v-on:click="switchFilter('unknown')" >
          <div :class="filter === 'unknown' ? 'selected' : 'notSelected'" > Shrödinger </div>
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </b-navbar>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'TopBar',
    computed:{
      filter(){return this.$store.state.filter},
      filterIsEnabled(){return this.$store.state.filterIsEnabled}
    },
    methods: {
      ...mapActions([
        'toggleFilters',
        'setSearch',
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

  .selected{
    font-weight: bolder;
  }

  .notSelected{
    text-decoration: line-through;
    font-weight: lighter;
  }
</style>