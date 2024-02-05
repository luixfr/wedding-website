<script setup lang="ts">
import pareja from '../assets/image/dk.png'
import bgPattern from '../assets/image/bg-pattern.webp'

const bgImage = `url(${bgPattern})`
defineProps<{ texto: string, cita: string }>()
</script>
<template lang="pug">

header
    .box
        .container.px-4.py-5.pb-0
            .row.flex-lg-row.align-items-center.g-10.justify-content-center
                .col-lg-6
                    h1.title.lh-1.mb-3.text-white.text-center.fw-normal
                        | Daisy <br> 
                        | & <br>
                        | Kevin

                    p.lead.text-white.fw-semibold.text-center.fs-4.ff-poppins.mt-5
                        | {{ texto }} <br>
                        | {{ cita }}

                .col-10.col-sm-8.col-lg-6.align-self-end
                    img.d-block.mx-lg-auto.img-fluid(:src='pareja' alt='foto de los novios' loading='lazy')


                    
</template>
<style lang="scss" scoped>
@import "../scss/colors.scss";

header {
    background-image: v-bind("bgImage");
    background-size: 40%;

    .box {
        background: rgba(0, 0, 0, 0.4)
    }

    .title {
        font-family: 'Great Vibes', cursive;
        font-size: 8em;
        text-shadow: 0px 3px 15px black;
    }

    .ff-poppins {
        text-shadow: 0px 3px 15px black;
    }
}
</style>