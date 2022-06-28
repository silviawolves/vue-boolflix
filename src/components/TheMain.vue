<template>
    <div class="container">

        <div class="movie-list">
            <ul v-for="(film, i) in fetchMovie" :key="i">
                <li><strong>Titolo</strong>: {{ film.title }}</li>
                <li><strong>Titolo originale</strong>: {{ film.original_title }}</li>
                <li><strong>Lingua originale</strong>: {{ film.original_language }}</li>
                <li><strong>Voto medio</strong>: {{ film.vote_average }}</li>
            </ul>
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

export default {
    name: 'TheMain',
    computed: {
        fetchMovie() {
            return state.movieList
        }
    }
}
</script>

<style lang="scss" scoped>

</style>