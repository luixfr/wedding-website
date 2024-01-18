
<script setup lang="ts">
defineProps<{ title: string }>()
</script>
<template lang="pug">
.container.my-5
    h2.fw-bold.mt-5.text-center {{ title }}
    hr.mb-5
    .row.row-cols-1.row-cols-md-4.g-4
        .col
            .card.h-100.shadow
                .card-body.d-flex.flex-column.justify-content-between
                    h5.card-title Extended Stay America
                    p
                        span.fw-bold Price: 
                        | $86 per night
                        | <br> 
                        span.fw-bold Address: 
                        | 3600 Chester Ln, Bakersfield, CA 93309
                        | <br> 
                        span.fw-bold Tel: 
                        a(href="tel:661-328-8181") (661) 328-8181
                    p
                        a.btn.btn-outline-secondary(target="_blank" href="https://www.google.com/travel/search?q=extended%20stay%20america%20bakersfield&g2lb=2502548%2C2503771%2C2503781%2C2504374%2C4258168%2C4284970%2C4291517%2C4597339%2C4814050%2C4874190%2C4893075%2C4965990%2C10208620%2C72277293%2C72302247%2C72317059%2C72406588%2C72412680%2C72414906%2C72421566%2C72430562%2C72440516%2C72442338%2C72448541%2C72458707%2C72462234%2C72469155%2C72470440%2C72470899%2C72471395%2C72472051%2C72473738%2C72473841%2C72479991%2C72480007&hl=en-US&gl=us&ssta=1&ts=CAESCAoCCAMKAggDGiAKAhoAEhoSFAoHCOgPEAMYDhIHCOgPEAMYEhgEMgIIASoOCgo6A1VTREIDCJwBGgA&qs=CAEyJENoY0l3TENSNWNLMDZyWlhHZ3N2Wnk4eGRHZGtibmM0YmhBQjgLQgkJQFikLKSpbVdCCQk9pJ8uNdaPsQ&ap=aAG6AQhvdmVydmlldw&ictx=1&sa=X&sqi=2&ved=0CAAQ5JsGahcKEwjwrLjZ9uWDAxUAAAAAHQAAAAAQCg&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls") View details &raquo;           
        .col
            .card.h-100.shadow
                .card-body.d-flex.flex-column.justify-content-between
                    h5.card-title Best Western Plus Hill House
                    p
                        span.fw-bold Price: 
                        | $103 per night
                        | <br> 
                        span.fw-bold Address: 
                        | 700 Truxtun Ave, Bakersfield, CA 93301
                        | <br> 
                        span.fw-bold Tel: 
                        a(href="tel:661-327-4064") (661) 327-4064
                    p
                        a.btn.btn-outline-secondary(target="_blank" href="https://www.google.com/travel/search?q=best%20western%20plus%20hill%20house%20bakersfield%20hotel&g2lb=2502548%2C2503771%2C2503781%2C2504374%2C4258168%2C4284970%2C4291517%2C4597339%2C4814050%2C4874190%2C4893075%2C4965990%2C10208620%2C72277293%2C72302247%2C72317059%2C72406588%2C72412680%2C72414906%2C72421566%2C72430562%2C72440516%2C72442338%2C72448541%2C72458707%2C72462234%2C72469155%2C72470440%2C72470899%2C72471395%2C72472051%2C72473738%2C72473841%2C72479991%2C72480007&hl=en-US&gl=us&ssta=1&ts=CAEaRwopEicyJTB4ODBlYTZhMjgxZWU5ZGQwMToweGZiNTU3NWZjMjI0YmRhYmQSGhIUCgcI6A8QAxgOEgcI6A8QAxgSGAQyAggCKgcKBToDVVNE&qs=CAEyJkNoZ0l2Yld2a3NLXzNhcjdBUm9MTDJjdk1YUmtkbDgxZUhZUUFROAJCCQm92ksi_HVV-0IJCb3aSyL8dVX7&ap=KigKEglXNj0By65BQBGmu5C0ssBdwBISCdYZPCjUsEFAEaa7kLJ4wF3AugEIb3ZlcnZpZXc&ictx=1&sa=X&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls") View details &raquo;           
        .col
            .card.h-100.shadow
                .card-body.d-flex.flex-column.justify-content-between
                    h5.card-title Super 8 by Wyndham Bakersfield 
                    p
                        span.fw-bold Price: 
                        | $73 per night
                        | <br> 
                        span.fw-bold Address: 
                        | 1219 S Union Ave, Bakersfield, CA 93307
                        | <br> 
                        span.fw-bold Tel: 
                        a(href="tel:661-368-8131") (661) 368-8131
                    p
                        a.btn.btn-outline-secondary(target="_blank" href="https://www.google.com/travel/search?q=Super%208%20by%20Wyndham%20Bakersfield%20&g2lb=2502548%2C2503771%2C2503781%2C2504374%2C4258168%2C4284970%2C4291517%2C4597339%2C4814050%2C4874190%2C4893075%2C4965990%2C10208620%2C72277293%2C72302247%2C72317059%2C72406588%2C72412680%2C72414906%2C72421566%2C72430562%2C72440516%2C72442338%2C72448541%2C72458707%2C72462234%2C72469155%2C72470440%2C72470899%2C72471395%2C72472051%2C72473738%2C72473841%2C72479991%2C72480007&hl=en-US&gl=us&ssta=1&ts=CAEaNwoZEhcKCC9tLzBxXzB6OgtCYWtlcnNmaWVsZBIaEhQKBwjoDxADGA4SBwjoDxADGBIYBDICCAIqDAoKOgNVU0RCAxIBXQ&qs=CAAgACgAMihDaG9JNGNHVXJLTDF1OTdCQVJvTkwyY3ZNVEYwYUcxcmMyNTZaaEFCOA1IAA&ap=KigKEglUwlMJtJtBQBFajHBZVMNdwBISCd6_8YlJvEFAEVqMcDm0v13AMAA&ictx=1&sa=X&ved=0CAAQ5JsGahgKEwiQo9CY-OWDAxUAAAAAHQAAAAAQjAE&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls") View details &raquo;           

        .col
            .card.h-100.shadow
                .card-body.d-flex.flex-column.justify-content-between
                    h5.card-title WoodSpring Suites Bakersfield Airport 
                    p
                        span.fw-bold Price: 
                        | $100 per night
                        | <br> 
                        span.fw-bold Address: 
                        | 8740 Spectrum Park Way, Bakersfield, CA 93308
                        | <br> 
                        span.fw-bold Tel: 
                        a(href="tel:661-450-9100") (661) 450-9100
                    p
                        a.btn.btn-outline-secondary(target="_blank" href="https://www.google.com/travel/search?q=%20WoodSpring%20Suites%20Bakersfield&g2lb=2502548%2C2503771%2C2503781%2C2504374%2C4258168%2C4284970%2C4291517%2C4597339%2C4814050%2C4874190%2C4893075%2C4965990%2C10208620%2C72277293%2C72302247%2C72317059%2C72406588%2C72412680%2C72414906%2C72421566%2C72430562%2C72440516%2C72442338%2C72448541%2C72458707%2C72462234%2C72469155%2C72470440%2C72470899%2C72471395%2C72472051%2C72473738%2C72473841%2C72479991%2C72480007&hl=en-US&gl=us&ssta=1&ts=CAEaNwoZEhcKCC9tLzBxXzB6OgtCYWtlcnNmaWVsZBIaEhQKBwjoDxADGA4SBwjoDxADGBIYBDICCAIqDQoLOgNVU0RCBBICpQI&qs=CAAgACgAMidDaGtJdll2V3E0U3YtclpmR2cwdlp5OHhNWEZ3Wm0xeWNETXpFQUU4DUgA&ap=KigKEgnOPqMZaHFBQBHpo50k2cZdwBISCStyQS6o80FAEemjnaRYuF3AMAA&ictx=1&sa=X&ved=0CAAQ5JsGahgKEwiQo9CY-OWDAxUAAAAAHQAAAAAQ5QI&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls") View details &raquo;           

</template>