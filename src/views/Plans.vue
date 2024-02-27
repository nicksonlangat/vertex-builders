<template>
<div class="container pb-10 font-base mx-auto">
    <Navbar/>

    <div class="grid grid-cols-3 text-[#ededed] font-base gap-x-8 gap-y-4 ml-5 mr-5 mt-12">
        <div @click="goToPlan(plan.id)" class="cursor-pointer" v-for="plan in plans">
            <img class="rounded-2xl" :src="plan.main_image" alt="">
            
                <div class="flex flex-col gap-y-3">
                    <h3 class="text-xl text-center font-bold mt-2">{{ plan.name }}</h3>
                    <div class="flex justify-between">
                       
                        <ul class="flex flex-col gap-3 mt-3">
                            <li class="inline-flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bath-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M11 2a1 1 0 0 1 .993 .883l.007 .117v2.25a1 1 0 0 1 -1.993 .117l-.007 -.117v-1.25h-2a1 1 0 0 0 -.993 .883l-.007 .117v6h13a2 2 0 0 1 1.995 1.85l.005 .15v3c0 1.475 -.638 2.8 -1.654 3.715l.486 .73a1 1 0 0 1 -1.594 1.203l-.07 -.093l-.55 -.823a4.98 4.98 0 0 1 -1.337 .26l-.281 .008h-10a4.994 4.994 0 0 1 -1.619 -.268l-.549 .823a1 1 0 0 1 -1.723 -1.009l.059 -.1l.486 -.73a4.987 4.987 0 0 1 -1.647 -3.457l-.007 -.259v-3a2 2 0 0 1 1.85 -1.995l.15 -.005h1v-6a3 3 0 0 1 2.824 -2.995l.176 -.005h3z" stroke-width="0" fill="currentColor"></path>
                                </svg>
                                {{ plan.bathrooms }} bathrooms</li>
                            <li class="inline-flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bed-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M3 6a1 1 0 0 1 .993 .883l.007 .117v6h6v-5a1 1 0 0 1 .883 -.993l.117 -.007h8a3 3 0 0 1 2.995 2.824l.005 .176v8a1 1 0 0 1 -1.993 .117l-.007 -.117v-3h-16v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-11a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor"></path>
                                    <path d="M7 8a2 2 0 1 1 -1.995 2.15l-.005 -.15l.005 -.15a2 2 0 0 1 1.995 -1.85z" stroke-width="0" fill="currentColor"></path>
                                </svg>
                                {{ plan.bedrooms }} bedrooms</li>
                        </ul>
                        <div class="flex flex-col">
                        <h3 class="text-md mt-2">Plan cost KES {{ plan.plan_cost }}</h3>
                        <h3 class="text-md mt-3">Build cost KES {{ plan.build_cost }}</h3>
                        <!-- <h3 class=" inline-flex gap-1 font-bold mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon text-yellow-500 mt-0.5 icon-tabler icon-tabler-jewish-star-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M8.433 6h-5.433l-.114 .006a1 1 0 0 0 -.743 1.508l2.69 4.486l-2.69 4.486l-.054 .1a1 1 0 0 0 .911 1.414h5.434l2.709 4.514l.074 .108a1 1 0 0 0 1.64 -.108l2.708 -4.514h5.435l.114 -.006a1 1 0 0 0 .743 -1.508l-2.691 -4.486l2.691 -4.486l.054 -.1a1 1 0 0 0 -.911 -1.414h-5.434l-2.709 -4.514a1 1 0 0 0 -1.714 0l-2.71 4.514z" stroke-width="0" fill="currentColor"></path>
                            </svg>4.85(145)
                        </h3> -->
                    </div>
                    </div>
                    
                    
                </div>
            
        </div>
    </div>

    <hr class="mt-32">
    <footer class="flex mt-5 justify-between">
        <ul class="text-[#ededed]">
            <li class="text-3xl font-extrabold">Thebuild</li>
            <li class="text-lg mt-5">
                An international real estate company <br> that provides your property solutions <br> with the best quality and affordable prices.
            </li>
        </ul>
        <div class="w-1/2 grid text-[#ededed] grid-cols-4">
            <ul class="flex flex-col text-stone-400 gap-4">
                <li class="text-xl text-[#ededed] font-extrabold">About Us</li>
                <li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Company</li>
                <li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Leadership</li>
                <li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Careers</li>
            </ul>
            <ul class="flex flex-col text-stone-400 gap-4">
                <li class="text-xl text-[#ededed] font-extrabold">Support</li>
                <li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Help Center</li>
                <li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Support team</li>
                <li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Community</li>
            </ul>
            <ul class="flex flex-col text-stone-400 gap-4">
                <li class="text-xl text-[#ededed] font-extrabold">Legal</li>
                <li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Security FAQ</li>
                <li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Terms of Use</li>
                <li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Privacy Policy</li>
            </ul>
            <ul class="flex flex-col text-stone-400 gap-4">
                <li class="text-xl text-[#ededed] font-extrabold">Social</li>
                <li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Instagram</li>
                <li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Facebook</li>
                <li class="hover:text-[#ededed] cursor-pointer transition-colors duration-300">Twitter</li>
            </ul>
        </div>
    </footer>

</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'
export default {
    name: 'Plans',
    components: {
        Navbar
    },
    data() {
        return {
            plans: [],
            baseURL: process.env.VUE_APP_BASE,
        }
    },
    methods: {
        async getPlans() {
            return await axios.get(
                `${this.baseURL}plans/`
            ).then(res => {
               this.plans = res.data
            }).catch(error=>{
                console.log(error)
            })
        },
        goToPlan(id) {
            this.$router.push({ name: 'plan', params: { id: id } })
        }
    },
    mounted() {
        this.getPlans()
    }
}
</script>

<style>
html {
    background-color: #101014;
}
</style>

