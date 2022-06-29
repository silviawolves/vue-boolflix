<template>
    <div class="container">

        <div class="my-card">
            <div class="card-pic">
                <img :src="urlImg" :alt="`Immagine di {{ titoloFilm }}`">
            </div>

            <div class="card-title m-0 p-0">
                <h4 class="m-0">{{ titoloFilm }}</h4>
                <small>{{ titoloOriginale }}</small>
            </div>

            <div class="card-body pb-3 pt-0 ps-0">
                <div class="text-uppercase">Lingua originale: {{ linguaOriginale }}
                    <span class="fi" :class="'fi-' + langMap"></span>
                </div>
                <div class="text-uppercase">Voto medio: {{ votoMedio }}</div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'MovieCard',
    props: {
        urlImg: String,
        titoloFilm: String,
        titoloOriginale: String,
        linguaOriginale: String,
        bandieraNazione: String,
        votoMedio: Number,
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
            if(map[this.linguaOriginale]) {
                return map[this.linguaOriginale]
            }

            return this.linguaOriginale
        },
    }
}
</script>

<style lang="scss" scoped>


</style>