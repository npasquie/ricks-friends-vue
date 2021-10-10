<template>
  <div class="characters">
    <top-bar/>
    <b-container>
      <b-row>
        <b-spinner v-if="$apollo.loading"/>
        <characters-list v-if="!$apollo.loading"
          :page=characters.info.pages 
          :numberOfPages=numberOfPages />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import CharactersList from '@/components/CharactersList.vue'
import { gql } from 'graphql-tag'

export default {
  name: 'Characters',
  data (){
    return{
      page: 1,
      numberOfPages: 1
    }
  },
  apollo:{
    characters: {
      query: gql`query {
        characters{
          info {
            pages
          }
        }
      }`
    }
  },
  components: {
    TopBar,
    CharactersList
  }
}
</script>