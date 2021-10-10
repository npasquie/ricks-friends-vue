<template>
  <div class="characters">
    <top-bar/>
    <b-container>
      <b-spinner v-if="$apollo.loading"/>
      <characters-list v-if="!$apollo.loading"
        :numberOfPages=characters.info.pages />
    </b-container>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import CharactersList from '@/components/CharactersList.vue'
import { gql } from 'graphql-tag'

export default {
  name: 'Characters',
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