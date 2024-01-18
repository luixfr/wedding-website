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
import { onMounted, ref } from "vue"
import { esContent as content } from "./content"

const weddingDate = new Date('March 16, 2024 13:00:00 GMT-08:00')

//const content = esContent

const lang = ref<"es" | "en">("es")

</script>

<template lang="pug">

Header(:texto="content.header.texto" :cita="content.header.cita")

WideText(:title="content.invitation.title" :invitation="content.invitation.invitation")
Cards#detalles(:time="content.cards.time" :place="content.cards.place")
.box.bg-secondary.my-5
    .container.py-5
        h1.text-center.display-3.ff-vibes.text-white {{ content.countDown.title }} 
        Countdown(labelColor="white" :deadlineDate="weddingDate" mainColor="#e63946" secondFlipColor="#e63946" mainFlipBackgroundColor="white" secondFlipBackgroundColor="white")

Rsvp#rsvp(:title="content.rsvp.title" :card="content.rsvp.card")
Schedule#schedule(:schedule="content.schedule.schedule" :title="content.schedule.title")
Regalos#registry(:title="content.registry.title" :text="content.registry.text")
Hospedaje#hospedaje(:title="content.hotels.title")
Recomendaciones#recomendaciones(:title="content.recommendations.title" :subtitle="content.recommendations.subtitle", :recommendations="content.recommendations.recommendations")

Footer(:links="content.footer.links")
</template>

