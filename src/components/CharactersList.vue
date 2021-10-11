<template>
  <div>
    <div v-if="!$apollo.loading">
      <character-card :id=parseInt(result.id) v-for="result in characters.results" :key=parseInt(result.id) />
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-tag'
import CharacterCard from './CharacterCard.vue'

export default {
  name: 'CharactersList',
  props:{
      page: Number
  },
  data(){
    return{}
  },
  apollo:{
    characters: {
      query: gql`
        query CharacterIds($page: Int, $search: String, $status: String){
          characters(page: $page, filter:{name: $search, status: $status}) {
            results{
              id
            }
          }
        }`,
      variables() { 
        let _state = this.$store.state

        return{
          page: this.page,
          search: _state.search,
          status: _state.filterIsEnabled ? _state.filter : undefined
        }
      }
    }
  },
  components: {CharacterCard}
}
</script>

<style scoped>

</style>
