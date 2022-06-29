<template>

    <div class="my-card">
        <div class="card-pic">
            <img :src="urlPoster" :alt="`Immagine di ${movieTitle}`">
        </div>

        <div class="card-body pb-3 pt-0 ps-0 flex-shrink-0">
            <div class="card-title m-0 p-0">
                <h6 class="text-uppercase mb-0 mt-1">{{ movieTitle }}</h6>
                <small>{{ movieOriginalTitle }}</small>
            </div>
            <div class="text-muted">Lingua originale: {{ movie.original_language }}
                <span class="fi" :class="'fi-' + langMap"></span>
            </div>
            <div class="text-muted">Voto: 
                <template v-for="i in voteToStars">
                    <svg :key="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>
                    </template>
                </div>
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
        },
        movieTitle() {
            if (this.movie.name) {
                return this.movie.name
            }
            return this.movie.title
        },
        movieOriginalTitle() {
            if (this.movie.original_name) {
                return this.movie.original_name
            }
            return this.movie.original_title
        },
        voteToStars() {
            return Math.ceil(this.movie.vote_average / 2)
        }
    }
}
</script>

<style lang="scss" scoped>
    .my-card {
        width: 100%;
        height: 100%;

        .card-pic {
            overflow: hidden;
            width: 100%;

                img {
                display: block;
                width: 100%;
            }
        }

        .card-body svg {
            width: 10px;
        }
    }
</style>