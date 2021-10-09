<template>
  <div class="characters">
    <top-bar/>
    <character-card/>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import CharacterCard from '@/components/CharacterCard.vue'
import { gql } from 'graphql-tag'

export default {
  name: 'Characters',
  data (){
    return{
      characters: "yo"
    }
  },
  apollo:{
    character: gql`query {
        character(id: 1){
            name,
            species,
            gender,
            image
        }
    }`
  },
  components: {
    TopBar,
    CharacterCard
  }
}
</script>