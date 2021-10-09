<template>
  <div class="characterCard">
    <p>felicitations bg {{character.name}}</p>
  </div>
</template>

<script>
import { gql } from 'graphql-tag'

export default {
  name: 'CharacterCard',
  data(){
    return{
      character: {
        loading: true // default value, before api returns data
      }
    }
  },
  apollo:{
    character: {
      query: gql`query {
        character(id: 1){
          name,
          species,
          gender,
          image
        }
      }`,
      variables: {
        id: 1
      }
    }
  },
  components: {}
}
</script>
