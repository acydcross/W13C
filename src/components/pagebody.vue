<template>
    <div>
        <h1>VUE PLAYLIST</h1>
        <div class="page-body">
            <song-list />
            <play-list />
        </div>
    </div>
    
</template>

<script>
export default {
    name: "page-body",
    components: {
        PlayList,
        SongList
    }
};
</script>

<style scoped>
.page-body {
  display: grid;
  grid-template-columns: 2fr 2fr;
  align-items: center;
  justify-items: center;
  text-align: center;
  height: 50vh;
}
</style>