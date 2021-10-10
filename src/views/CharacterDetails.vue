<template>
  <div class="characterDetails">
    <top-bar/>
    <b-container>
      <b-spinner v-if="$apollo.loading"/>
      <div v-if="!$apollo.loading">
        <b-img center :src=character.image />
        <h1>{{character.name}}</h1>
        <p>{{character.species}} {{character.gender !== "unknown" ? character.gender : "of unknown gender"}}</p>
        <p>Life Status : {{character.status}}</p>
        <p>From {{character.origin.name}}</p>
        <p v-if="character.location.name">
          Last seen in {{character.location.name}}</p>
        <p>Featured in :</p>
        <ul>
          <li v-for="episode in character.episode" :key=episode.name >
            {{episode.name}}
          </li>
        </ul>
      </div>
    </b-container>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import { gql } from 'graphql-tag'

export default {
  name: 'CharacterDetails',
  apollo: {
    character: {
      query : gql`
        query Character($id : ID!){
          character(id: $id){
            name,
            species,
            gender,
            image,
            status,
            origin {
              name
            },
            location {
              name 
            },
            created,
            episode {
              name
            }
          }
        }`,
      variables() {
        return {
          id: this.$route.params.id
        }
      }
    }
  },
  components: { TopBar }
}
</script>

<style scoped>
  img{
    margin: 1em;
  }
</style>