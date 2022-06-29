<template>
    <div class="container">

        <div class="row">
            <div class="col-2" v-for="(movie, i) in fetchMovie" :key="i">
                <MovieCard :movie="movie"></MovieCard>
            </div>

            <!-- <MovieCard v-for="serie in fetchSeries" :key="serie.id" 
            :url-img="urlPoster + serie.poster_path"
            :titolo-film="serie.name" 
            :titolo-originale="serie.original_name" 
            :lingua-originale="serie.original_language" 
            bandiera-nazione 
            :voto-medio="serie.vote_average"></MovieCard> -->
        </div>

    </div>
</template>

<script>
import { state } from '../store.js'
import MovieCard from './MovieCard.vue'

export default {
    name: "TheMain",
    components: { MovieCard },
    computed: {
        fetchMovie() {
            return state.movieList;
        },
        fetchSeries(){
            return state.seriesList
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

</style>