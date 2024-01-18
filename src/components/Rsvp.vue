<script setup lang="ts">
import weddingCake from "../assets/image/wedding-cake.jpg"
</script>
<template lang="pug">
.box.bg-primary.p-5.bg-gradient
    .container
        h2.text-center.ff-vibes.color-white.text-white Nos acompanas?
        .container.d-flex.flex-column.flex-lg-row.justify-content-center
            .rsvp-content.rounded-4.shadow.bg-white
                .rsvp-body.p-5
                    h2.fw-semibold.mb-0.ff-poppins Confirma tu asistencia
                    ul.d-grid.gap-4.my-5.list-unstyled.small
                        li.d-flex.gap-4
                            v-icon(name="gi-cake-slice" fill="#ff006e" scale="2")
                            div
                                h5.mb-0 Ayudanos a calcular el pastel
                                | Puedes hacer lo siguiente
                        li.d-flex.gap-4
                            v-icon(name="md-textsms-round" fill="blue" scale="2")
                            div
                                h5.mb-0 Mandanos un mensaje
                                | al numero 
                                span.fw-semibold (847) 305 6236 
                        li.d-flex.gap-4
                            v-icon(name="io-document-text" fill="#fca311" scale="2")
                            div
                                h5.mb-0 Llena el formulario
                                | Haz click en el boton para confimar tu asistencia
                    button.btn.btn-lg.btn-secondary.mt-2.w-100.text-white Confima aqui!

</template>