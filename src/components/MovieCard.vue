<template>

    <div class="my-card">

        <div class="card-pic">
            <img :src="urlPoster" :alt="`Immagine di ${movieTitle}`">
        </div>

        <div class="card-body">
            <div class="card-title m-0 p-0">
                <div><strong>Titolo:</strong> {{ movieTitle }}</div>
                <div><strong>Titolo originale:</strong>  {{ movieOriginalTitle }}</div>
            </div>
            <div class="d-none">Lingua originale: {{ movie.original_language }}
                <span class="fi" :class="'fi-' + langMap"></span>
            </div>
            <div><strong>Voto: </strong>
                <span v-for="i in 5" :key="i">
                    <i v-if="i <= voteToStars" class="fa-solid fa-star text-warning"></i>
                    <i v-else class="fa-regular fa-star"></i>
                </span>
            </div>
            <div>
                <strong>Overview: </strong> {{ movie.overview }}
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
                return 'https://popcornusa.s3.amazonaws.com/placeholder-movieimage.png'
            }
            return "https://image.tmdb.org/t/p/" + "w342" + this.movie.poster_path
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
        border: 1px solid black;
        position: relative;
        overflow: hidden;

        .card-pic {
            overflow: hidden;
            width: 100%;
            height: 100%;

                img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }

        .card-body {
            background-color: rgba(0,0,0,.9);
            color: white;
            height: 100%;
            width: 100%;
            font-size: .8rem;
            padding: 1rem;
            opacity: 0;
            overflow: auto;
            position: absolute;
            top: 0;
            transition: .3s linear;
        }

        .card-body svg {
            width: 15px;
        }

        &:hover .card-body {
            opacity: 1;
        }
    }
</style>