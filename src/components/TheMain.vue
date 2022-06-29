<template>
    <div class="container">

        <div class="movie-list">
            <MovieCard v-for="(movie, i) in fetchMovie" :key="i" :titolo-film="movie.title" :titolo-originale="movie.original_title" :lingua-originale="movie.original_language" :voto-medio="movie.vote_average"></MovieCard>
        </div>

        <div class="series-list">
            <ul class="list-unstyled">
                <li></li>
            </ul>
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
        }
    }
}
</script>

<style lang="scss" scoped>

</style>