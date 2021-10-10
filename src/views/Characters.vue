<template>
  <div class="characters">
    <top-bar/>
    <b-container>
      <b-spinner v-if="$apollo.loading"/>
      <div v-if="!$apollo.loading" >
        <b-pagination v-model="page" :total-rows="characters.info.pages * 20" :per-page="20" class="pagination" />
        <characters-list :page="Math.min(page,characters.info.pages)" />
        <b-pagination v-model="page" :total-rows="characters.info.pages * 20" :per-page="20" class="pagination" />
      </div>
    </b-container>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import CharactersList from '@/components/CharactersList.vue'
import { gql } from 'graphql-tag'

export default {
  name: 'Characters',
  data(){
    return {
      page: 1
    }
  },
  apollo:{
    characters: {
      query: gql`query Characters($search: String, $status: String){
        characters(filter:{name: $search, status: $status}){
          info {
            pages
          }
        }
      }`
    }
  },
  variables(){
    let _state = this.$store.state
    console.log(_state);
    
    return {
      search: _state.search,
      status: _state.filterIsEnabled ? _state.filter : undefined
    }
  },
  components: {
    TopBar,
    CharactersList
  }
}
</script>

<style scoped>
  .pagination{
    margin-top: 1em;
  }
</style>