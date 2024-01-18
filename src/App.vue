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
import { esContent, enContent } from "./content"
import { IoLanguage, BiCheck } from "oh-vue-icons/icons"
import { OhVueIcon } from "oh-vue-icons"
import { Dropdown } from "bootstrap"

const weddingDate = new Date('March 16, 2024 13:00:00 GMT-08:00')

//const content = esContent

const lang = ref<"es" | "en">("es")
const content = ref(esContent)

const changeLanguage = (lan: "en" | "es") => {
    lang.value = lan
    content.value = lang.value == 'es' ? esContent : enContent
}
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

.dropdown.position-fixed.bottom-0.end-0.mb-3.me-3.bd-mode-toggle
    button#bd-theme.btn.btn-secondary.py-2.dropdown-toggle.d-flex.align-items-center.border-white(type='button' aria-expanded='false' data-bs-toggle='dropdown' aria-label='Toggle theme (light)')
        v-icon(:name="IoLanguage.name" fill="white" scale="1.5")
        span#bd-theme-text.visually-hidden Toggle theme
    ul.dropdown-menu.dropdown-menu-end.shadow(aria-labelledby='bd-theme-text')
        li
            button.dropdown-item.d-flex.align-items-center(type='button' @click="changeLanguage('es')"  :class="{'active':lang == 'es'}")
                v-icon(:name="BiCheck.name" v-if="lang == 'es'")
                | Espanol

        li
            button.dropdown-item.d-flex.align-items-center(type='button' @click="changeLanguage('en')"  :class="{'active':lang == 'en'}")
                v-icon(:name="BiCheck.name" v-if="lang == 'en'")
                | English



Footer(:links="content.footer.links")
</template>

