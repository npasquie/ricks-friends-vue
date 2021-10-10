<template>
  <div class="characterDetails">
    <top-bar/>
    hello
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
//import { gql } from 'graphql-tag'

export default {
  name: 'CharacterDetails',
  apollo:{},
  components: { TopBar }
}
</script>