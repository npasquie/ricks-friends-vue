<template>
  <router-link :to=link >
    <div v-if="$apollo.loading">
      <b-card class="characterCard" >
        <b-spinner/>
      </b-card>
    </div>
    <div v-else>
      <b-card class="characterCard"
        :title=character.name
        :img-src=character.image
        img-top>
        <b-card-text>
          {{character.species}} {{character.gender === "unknown" ? "-unknown gender-" : character.gender}}
        </b-card-text>
      </b-card>
    </div>
  </router-link>
</template>

<script>
import { gql } from 'graphql-tag'

export default {
  name: 'CharacterCard',
  props: {
    id: Number
  },
  data(){
    return{
      link: `/characters/${this.id}`
    }
  },
  apollo:{
    character: {
      query: gql`
        query Character($id: ID!) {
          character(id: $id){
            name,
            species,
            gender,
            image
          }
        }`,
      variables() { 
        return {
          id: this.id
        }
      }
    }
  },
  components: {}
}
</script>

<style scoped>
  .characterCard{
    width: 15rem;
    margin-top: 0.4rem;
    margin-right: 0.4rem;
  }

  div{
    display: inline-block;
  }

  a{
    color: black;
  }
</style>
