<template>

    <div class="my-card">
        <div class="card-pic">
            <img :src="urlPoster" :alt="`Immagine di ${movie.title}`">
        </div>

        <div class="card-body pb-3 pt-0 ps-0">
            <div class="card-title m-0 p-0">
                <h4 class="m-0">{{ movie.title }}</h4>
                <small>{{ movie.original_title}}</small>
            </div>
            <div class="text-muted">Lingua originale: {{ movie.original_language }}
                <span class="fi" :class="'fi-' + langMap"></span>
            </div>
            <div class="text-muted">Voto: {{ movie.vote_average }}</div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'MovieCard',
    props: {
        movie: Object,
    },
    computed: {
        langMap() {
            const map = {
                'en': 'us',
                'el': 'gr',
                'da': 'gl',
                'ko': 'kp',
                'uk': 'ua',
                'cs': 'cz',
                'ja': 'jp',
                'hi': 'in',
                'ur': 'in',
                'te': 'in',
                'zh': 'mo',
                'he': 'il',
                'sq': 'xk',
                'kk': 'kz',
            }
            if(map[this.movie.original_language]) {
                return map[this.movie.original_language]
            }

            return this.movie.original_language
        },
        urlPoster() {
            if (this.movie.poster_path === null) {
                return 'http://lexingtonvenue.com/media/poster-placeholder.jpg'
            }
            return "https://image.tmdb.org/t/p/" + "w185" + this.movie.poster_path
        }
    }
}
</script>

<style lang="scss" scoped>
    .my-card {
        width: 100%;
        height: 100%;

        .card-pic img {
            width: 100%;
            height: 100%;
            display: block
        }
    }
</style>