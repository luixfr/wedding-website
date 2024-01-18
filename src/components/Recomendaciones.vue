<template lang="pug">
.box.bg-light.py-5
    .container
        .px-4 
            h3.fw-bold Recomendaciones
            p Gracias por visitar nuestra página de boda. Antes de despedirnos quisiéramos darles algunas últimas recomendaciones.
        .d-flex.flex-column.flex-md-row.gap-4.align-items-center.justify-content-center
            .list-group
                a.list-group-item.list-group-item-action.d-flex.gap-3.py-3(href='#' aria-current='true')
                    v-icon(scale="1.7" :name="HiSun.name")
                    .d-flex.gap-2.w-100.justify-content-between
                        div
                            p.mb-0.opacity-75 
                                | Nuestra boda será al aire libre, por lo cual están invitados a traer lo necesario para que puedan tener una experiencia cómoda y bonita. 

                a.list-group-item.list-group-item-action.d-flex.gap-3.py-3(href='#' aria-current='true')
                    v-icon(scale="1.7" :name="GiBowTie.name")
                    .d-flex.gap-2.w-100.justify-content-between
                        div
                            p.mb-0.opacity-75
                                | El vestimento será elegante pero está invitado a venir como guste lo más importante para nosotros es su asistencia.
                a.list-group-item.list-group-item-action.d-flex.gap-3.py-3(href='#' aria-current='true')
                    v-icon(scale="1.7" :name="FaShoePrints.name")
                    .d-flex.gap-2.w-100.justify-content-between
                        div
                            p.mb-0.opacity-75 
                                | Se les anuncia que la ceremonia se llevará a cabo en el pasto para pensar en la opción de zapatos. 
                a.list-group-item.list-group-item-action.d-flex.gap-3.py-3(href='#' aria-current='true')
                    v-icon(scale="1.7" :name="CoChild.name")
                    .d-flex.gap-2.w-100.justify-content-between
                        div
                            p.mb-0.opacity-75 
                                | Finalmente, se les pide a los padres de familia que cuiden de sus niños durante su tiempo en nuestra boda para evitar peligros y accidentes. Nuestro deseo es compartir nuestro día especial con ustedes y que ambos tengamos una experiencia linda y sobre todo con la bendición de Dios. Dios los bendiga y los esperamos pronto!
</template>
<script setup lang="ts">
import {
    HiSun,
    GiBowTie,
    FaShoePrints,
    CoChild,
} from "oh-vue-icons/icons";
import { OhVueIcon } from "oh-vue-icons";

</script>