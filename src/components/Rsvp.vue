<script setup lang="ts">
import weddingCake from "../assets/image/wedding-cake.jpg"

defineProps<{
    title: string,
    card: {
        title: string,
        pastel: { title: string, subtitle: string },
        msg: { title: string, subtitle: string },
        form: { title: string, subtitle: string },
        button: string
    }
}>()
</script>
<template lang="pug">
.box.bg-primary.p-5.bg-gradient
    .container
        h2.text-center.ff-vibes.color-white.text-white {{title}}
        .container.d-flex.flex-column.flex-lg-row.justify-content-center
            .rsvp-content.rounded-4.shadow.bg-white
                .rsvp-body.p-5
                    h2.fw-semibold.mb-0.ff-poppins {{ card.title }}
                    ul.d-grid.gap-4.my-5.list-unstyled.small
                        li.d-flex.gap-4
                            v-icon(name="gi-cake-slice" fill="#ff006e" scale="2")
                            div
                                h5.mb-0 {{card.pastel.title}}
                                | {{card.pastel.subtitle}}
                        li.d-flex.gap-4
                            v-icon(name="md-textsms-round" fill="blue" scale="2")
                            div
                                h5.mb-0 {{card.msg.title}}
                                | {{ card.msg.subtitle }} 
                        li.d-flex.gap-4
                            v-icon(name="io-document-text" fill="#fca311" scale="2")
                            div
                                h5.mb-0 {{ card.form.title }}
                                | {{ card.form.subtitle }}
                    button.btn.btn-lg.btn-secondary.mt-2.w-100.text-white {{ card.button }}

</template>