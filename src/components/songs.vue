<template>
  <div class="songs">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>{{ song }}</h2>
    <button id="press-me" @click=" " v-if=" "></button>
    <button id="press-me" @click=" " v-else=" "></button>
    <button></button>
    <button></button>
  </div> 
</template>

<script>
export default {
  name: "song-data"
  data: function() {
    return {
      song: this.$store.state.songList,
      author: this.$store.state.songAuthor
    }
  }
};
</script>

<style scoped>
.songs {
  display: grid;
  grid-template-columns: 2fr 2fr;
  align-items: center;
  justify-items: center;
  text-align: center;
  height: 50vh;
}
</style>