<template>
  <b-navbar variant="primary">
    <b-navbar-brand class="title">
      <img src="../assets/ricks-head.png" width="30" height="30" class="ricksHead"/>
      Rick's Friends
    </b-navbar-brand>
  </b-navbar>
</template>

<script>
  export default {
    name: 'TopBar',
    components: {}
  }
</script>

<style scoped>
  .title{
    display: inline-block;
    font-weight: bold;
    color: white;
  }

  .ricksHead{
    display: inline-block;
    vertical-align: top;
    margin-left: 1em;
    margin-right: 1em;
}
</style>