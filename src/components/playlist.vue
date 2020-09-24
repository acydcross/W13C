<template>
  <div class="play-list">
    <song-data />
  </div>
    
</template>

<script>
import SongData from "./songs.vue";
export default {
  name: "play-list",
  components: {
    SongData
  }
};
</script>

<style scoped>
.play-list {
  display: grid;
  grid-template-columns: 2fr 2fr;
  align-items: center;
  justify-items: center;
  text-align: center;
  height: 50vh;
}
</style>