<template>
<div class="container pb-5 font-base mx-auto">
    <Navbar />

    <div class="flex items-center justify-center text-[#ededed] font-base gap-12 ml-5 mr-5 mt-12">

        <div v-if="!showSuccess" class="w-1/2">
            <h3 class="text-2xl font-bold">Contact Us:</h3>
            <p>Send us a message and we'll respond to you in no time.</p>
            <form class="flex flex-col space-y-8 text-md mt-5">

                <div class="grid grid-cols-2 gap-4">
                    <div class="flex flex-col gap-3">
                        <label for="">Email</label>
                        <input v-model="customer_email" type="email" class="border border-stone-400 bg-inherit pl-6 w-full rounded-lg py-2.5 focus:outline-none focus:ring-0 placeholder:text-stone-400" placeholder="Your email address">
                    </div>
                    <div class="flex flex-col gap-3">
                        <label for="">Name</label>
                        <input v-model="customer_name" type="text" class="border border-stone-400 bg-inherit pl-6 w-full rounded-lg py-2.5 focus:outline-none focus:ring-0 placeholder:text-stone-400" placeholder="Your full name">
                    </div>
                </div>
                <div class="flex flex-col gap-3">
                    <label for="">Message</label>
                    <textarea v-model="message" class="border border-stone-400 bg-inherit pl-6 w-full rounded-lg py-2.5 focus:outline-none focus:ring-0 placeholder:text-stone-400" placeholder="Your message"></textarea>
                </div>

                <button @click.prevent="sendMessage" class="bg-[#ededed] py-2 px-6 inline-flex hover:gap-4 transition-all duration-500 items-center justify-center gap-2 text-lg rounded-md text-[#101014]">
                    Send <svg xmlns="http://www.w3.org/2000/svg" class="icon mt-1 icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l14 0"></path>
                        <path d="M15 16l4 -4"></path>
                        <path d="M15 8l4 4"></path>
                    </svg></button>

            </form>
        </div>
        <div v-else class="w-1/2 flex justify-center flex-col items-center">
            <h2 class="text-2xl font-extrabold">
                    Thank you for your message.
                </h2>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler mt-2 icon-tabler-circle-check-filled" width="100" height="100" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor"></path>
                    </svg>
                </span>
            </div>

    </div>

   <Footer/>

</div>
</template>
<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'
export default {
    name: 'Contact',
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            customer_name: "",
            customer_email: "",
            message: "",
            baseURL: process.env.VUE_APP_BASE,
            showSuccess: false,
        }
    },
    methods: {
        async sendMessage() {
            return await axios.post(
                `${this.baseURL}contact/`, {
                    customer_name: this.customer_name,
                    customer_email: this.customer_email,
                    message: this.message
                }
            ).then(res => {
                this.showSuccess = true
                setTimeout(() => this.showSuccess = false, 3000)
                this.customer_name = ""
                this.customer_email = ""
                this.message = ""
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>

<style>
html {
    background-color: #101014;
}
</style>

