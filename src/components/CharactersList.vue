<template>
  <div>
   {{page}}
    <character-card :id=1 />
  </div>
</template>

<script>
import { gql } from 'graphql-tag'
import CharacterCard from './CharacterCard.vue'

export default {
  name: 'CharactersList',
  props:{
      page: Number,
      numberOfPages: Number
  },
  data(){
    return{
    }
  },
  apollo:{
      
  },
  components: {CharacterCard}
}
</script>

<style scoped>
</style>
