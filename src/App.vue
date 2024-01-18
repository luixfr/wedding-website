<script setup lang="ts">
import "./scss/styles.scss"
import Schedule from "./components/Schedule.vue"
import WideText from "./components/WideText.vue"
import Cards from "./components/Cards.vue"
import Footer from "./components/Footer.vue"
import Header from "./components/Header.vue"
import Rsvp from "./components/Rsvp.vue"
import Regalos from "./components/Regalos.vue"
import Hospedaje from "./components/Hospedaje.vue"
import Recomendaciones from "./components/Recomendaciones.vue"
import { Countdown } from 'vue3-flip-countdown'

const weddingDate = new Date('March 16, 2024 13:00:00 GMT-08:00')

</script>

<template lang="pug">

Header

WideText
Cards
.box.bg-secondary.my-5
    .container.py-5
        h1.text-center.display-3.ff-vibes.text-white Faltan 
        Countdown(labelColor="white" :deadlineDate="weddingDate" mainColor="#e63946" secondFlipColor="#e63946" mainFlipBackgroundColor="white" secondFlipBackgroundColor="white")

Rsvp
Schedule
Regalos 
Hospedaje
Recomendaciones

Footer
</template>

