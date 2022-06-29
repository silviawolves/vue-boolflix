<template>
    <div class="container">

        <div class="movie-list">
            <MovieCard v-for="(movie, i) in fetchMovie" :key="i" :titolo-film="movie.title" :titolo-originale="movie.original_title" :lingua-originale="movie.original_language" bandiera-nazione :voto-medio="movie.vote_average"></MovieCard>
        </div>

        <div class="series-list">
            <MovieCard v-for="(serie, i) in fetchSeries" :key="i" :titolo-film="serie.name" :titolo-originale="serie.original_name" :lingua-originale="serie.original_language" :voto-medio="serie.vote_average"></MovieCard>
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