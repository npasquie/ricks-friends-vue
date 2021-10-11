<template>
  <div class="characters">
    <top-bar/>
    <b-container>
      <div v-if="error" class="pagination">
        <b-col>
        <p>No Result.</p>
        <b-button v-on:click="clearSearch()">
          Clear my search
        </b-button>
        </b-col>
      </div>
      <div v-if="!error">
        <b-spinner v-if="$apollo.loading"/>
        <div v-if="!$apollo.loading" >
          <b-pagination v-model="page" :total-rows="characters.info.pages" :per-page="1" class="pagination" />
          <characters-list :page="Math.min(page,characters.info.pages)" />
          <b-pagination v-model="page" :total-rows="characters.info.pages" :per-page="1" class="pagination" />
        </div>
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
      page: 1,
      error: undefined
    }
  },
  methods:{
    clearSearch(){
        this.$store.commit('setSearch',{search: ''}),
        this.error = undefined
    }
  },
  apollo:{
    characters: {
      query: gql`query Characters($search: String!, $status: String!){
        characters(filter:{name: $search, status: $status}){
          info {
            pages
          }
        }
      }`,
      variables(){    
        return {
          search: this.$store.state.search,
          status: this.$store.state.filterIsEnabled ? this.$store.state.filter : ''
        }
      },
      error(err){
        this.error = err
      }
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