
<script setup lang="ts">
import ceremonia from "../assets/image/ceremonia.svg"
import amorGlobos from "../assets/image/amor-globos.svg"
import fiesta from "../assets/image/fiesta.svg"
import dinner from "../assets/image/dinner.svg"
import recepcion from "../assets/image/recepcion.svg"
import pastel from "../assets/image/pastel.svg"
import despedida from "../assets/image/despedida.svg"
</script>
<template lang="pug">
#icon-grid.container.px-4.py-5
    h2.pb-2.border-bottom Como va estar la fiesta?
    .container 
        .row.text-center
            .col-12.col-sm-6.col-md-4.col-lg-3.d-flex.flex-column.flex-sm-row.justify-content-between.align-items-center
                img.feature-icon(:src="ceremonia")
                div
                    h3.fw-bold.mb-0.fs-4.text-secondary Ceremonia
                    p De 1:00 a 2:30pm
                v-icon.d-none.d-sm-block(name="bi-arrow-right-circle-fill" scale="1.5" fill="pink")
                v-icon.d-block.d-sm-none(name="bi-arrow-down-circle-fill" scale="1.5" fill="pink")
            .col-12.col-sm-6.col-md-4.col-lg-3.d-flex.flex-column.flex-sm-row.justify-content-between.align-items-center
                img.feature-icon(:src="amorGlobos")
                div
                    h3.fw-bold.mb-0.fs-4.text-secondary Recepcion
                    p Inicia a las 2:30pm
                v-icon.d-none.d-sm-block(name="bi-arrow-right-circle-fill" scale="1.5" fill="pink")
                v-icon.d-block.d-sm-none(name="bi-arrow-down-circle-fill" scale="1.5" fill="pink")
            .col-12.col-sm-6.col-md-4.col-lg-3.d-flex.flex-column.flex-sm-row.justify-content-between.align-items-center
                img.feature-icon(:src="recepcion")
                div
                    h3.fw-bold.mb-0.fs-4.text-secondary Bienvenida
                    p De 3:30 a 3:45pm
                v-icon.d-none.d-sm-block(name="bi-arrow-right-circle-fill" scale="1.5" fill="pink")
                v-icon.d-block.d-sm-none(name="bi-arrow-down-circle-fill" scale="1.5" fill="pink")

            .col-12.col-sm-6.col-md-4.col-lg-3.d-flex.flex-column.flex-sm-row.justify-content-between.align-items-center
                img.feature-icon(:src="dinner")
                div
                    h3.fw-bold.mb-0.fs-4.text-secondary Cena
                    p De 3:45 a 6:00pm
                v-icon.d-none.d-sm-block(name="bi-arrow-right-circle-fill" scale="1.5" fill="pink")
                v-icon.d-block.d-sm-none(name="bi-arrow-down-circle-fill" scale="1.5" fill="pink")

            .col-12.col-sm-6.col-md-4.col-lg-3.d-flex.flex-column.flex-sm-row.justify-content-between.align-items-center
                img.feature-icon(:src="pastel")
                div
                    h3.fw-bold.mb-0.fs-4.text-secondary Pastel
                    p De 6:00 a 6:30pm
                v-icon.d-none.d-sm-block(name="bi-arrow-right-circle-fill" scale="1.5" fill="pink")
                v-icon.d-block.d-sm-none(name="bi-arrow-down-circle-fill" scale="1.5" fill="pink")
            .col-12.col-sm-6.col-md-4.col-lg-3.d-flex.flex-column.flex-sm-row.justify-content-between.align-items-center
                img.feature-icon(:src="fiesta")
                div
                    h3.fw-bold.mb-0.fs-4.text-secondary Convivo
                    p 6:30pm a 8:00pm
                v-icon.d-none.d-sm-block(name="bi-arrow-right-circle-fill" scale="1.5" fill="pink")
                v-icon.d-block.d-sm-none(name="bi-arrow-down-circle-fill" scale="1.5" fill="pink")
            .col-12.col-sm-6.col-md-4.col-lg-3.d-flex.flex-column.flex-sm-row.justify-content-between.align-items-center
                img.feature-icon(:src="despedida")
                div
                    h3.fw-bold.mb-0.fs-4.text-secondary Despedida
                    p 8:00 a 8:15pm
                v-icon.d-none.d-sm-block(name="bi-arrow-right-circle-fill" scale="1.5" fill="pink")
                v-icon.d-block.d-sm-none(name="bi-arrow-down-circle-fill" scale="1.5" fill="pink")

</template>
<style scoped>
.feature-icon {
    width: 3em;
    padding: .5em;
}

.mr-0 {
    margin-right: 0;
}

pr-0 {
    padding-right: 0;
}

.feature-item {
    min-width: 300px;

}

.text-pink {
    color: #be394f;
}
</style>