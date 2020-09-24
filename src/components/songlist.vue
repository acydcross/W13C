<template>
  <div class="song-list">
    <song-item />
  </div>
    
</template>

<script>
import SongData from "./songs.vue";
export default {
  name: "song-list",
  components: {
    SongData
  }
};
</script>

<style scoped>
.song-list {
  display: grid;
  grid-template-columns: 2fr 2fr;
  align-items: center;
  justify-items: center;
  text-align: center;
  height: 50vh;
}
</style>