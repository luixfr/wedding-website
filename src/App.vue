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

const weddingDate = new Date(2024, 3, 16, 12)
</script>

<template lang="pug">

Header

WideText
Cards
Rsvp
Schedule
Regalos 
Hospedaje
Recomendaciones

Footer
</template>

