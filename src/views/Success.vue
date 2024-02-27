<template>
<div class="container pb-10 font-base mx-auto">
    <Navbar />
    <div v-if="purchase != null" class="flex flex-col items-center justify-center mt-20 ml-4 font-base mr-2 text-[#ededed]">

        <h3 class="text-7xl">Thank you for your purchase</h3>
        <h3 class="text-3xl mt-8 text-center ml-5 font-extrabold text-stone-400">
            <span class="text-white">
                Purchase code: {{ purchase?.purchase_code }}
            </span>
            <br>
            We have received your payment and we have sent you a link to <br> download your purchase via your email. Please check your inbox now.
        </h3>
        <div class="flex mt-10 gap-10">
            <a href="/plans" class="bg-[#ededed] px-6 py-2 text-[#101014] rounded-lg">Browse more plans</a>
            <a href="/contact" class="bg-[#ededed] px-6 py-2 text-[#101014] rounded-lg">Contact Us</a>
        </div>
    </div>
<Footer v-if="purchase != null"/>
</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'

export default {
    name: 'Payment',
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            purchase: null,
            baseURL: process.env.VUE_APP_BASE,
        }
    },
    methods: {
        async getPurchase(id) {
            return await axios.get(
                `${this.baseURL}purchases/${id}`
            ).then(res => {
                this.purchase = res.data
            }).catch(error => {
                console.log(error)
            })
        },
    },
    mounted() {
        this.getPurchase(this.$route.params['id'])
    }
}
</script>

<style>
html {
    background-color: #101014;
}
</style>
