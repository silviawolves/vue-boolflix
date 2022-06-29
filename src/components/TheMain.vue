<template>
    <div class="container">

        <div class="movie-list">
            <MovieCard v-for="(movie, i) in fetchMovie" :key="i" 
            :url-img="urlPoster + movie.poster_path"
            :titolo-film="movie.title" 
            :titolo-originale="movie.original_title" 
            :lingua-originale="movie.original_language" 
            bandiera-nazione 
            :voto-medio="movie.vote_average"></MovieCard>
        </div>

        <div class="series-list">
            <MovieCard v-for="(serie, i) in fetchSeries" :key="i" 
            :url-img="urlPoster + serie.poster_path"
            :titolo-film="serie.name" 
            :titolo-originale="serie.original_name" 
            :lingua-originale="serie.original_language" 
            bandiera-nazione 
            :voto-medio="serie.vote_average"></MovieCard>
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
        urlPoster() {
            return "https://image.tmdb.org/t/p/" + "w185"
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

</style>