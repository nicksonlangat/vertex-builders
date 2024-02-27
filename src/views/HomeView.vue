<template>
<div class="container pb-10  font-geist font-extralight mx-auto">
    <Navbar />
    <div class="flex mt-32 ml-4 font-geist mr-2 text-[#ededed]">
        <div class="w-2/3">
            <h3 class="text-7xl">Find and explore your dream property at affordabe prices</h3>
        </div>
        <div class="w-1/3 mt-4 flex flex-col gap-y-6">
            <p class="text-xl">
                Our simple system offers modern house plans - each with realistic cost projection, access to suppliers near you and tools to manage your project every step of the way.

            </p>
            <a href="/" class="bg-orange-600 px-6 w-36 rounded-full py-2 hover:bg-orange-700 transition-colors duration-300">
                Get started
            </a>
        </div>
    </div>
    <div class="mt-36 mr-5 ml-5">
        <div class="h-[484px] bg-cover rounded-2xl flex justify-end items-center" :style="{'background-image': 'url(' + require('../assets/1.jpeg') + ')'}">
            <div class="bg-stone-900/50 text-[#ededed] h-36 w-1/2 mr-5 rounded-3xl grid grid-cols-3
    place-items-center
    ">
                <h3 class="text-5xl font-semibold">480 +</h3>
                <h3 class="text-5xl font-semibold">120K +</h3>
                <h3 class="text-5xl font-semibold">360 +</h3>
                <h3 class="text-2xl font-semibold">Property options</h3>
                <h3 class="text-2xl font-semibold">Capital raised</h3>
                <h3 class="text-2xl font-semibold">Happy customers</h3>
            </div>
        </div>
    </div>
    <div class="mt-10 grid grid-cols-2 ml-5 mr-5 gap-6">
        <div class="bg-[#ededed] rounded-2xl h-56">
            <h3 class="text-4xl ml-5 mt-3 font-semibold text-[#101014]">The secret behind our successes Vertex</h3>
            <div class="flex justify-between mr-5 mt-10 ml-5">

                <div class="mt-3 flex -space-x-4">
                    <img class="w-16 h-16 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
                    <img class="w-16 h-16 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="">
                    <img class="w-16 h-16 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="">
                    <a class="flex items-center justify-center w-16 h-16 text-xs font-medium text-white bg-orange-600 border-2 border-white rounded-full hover:bg-orange-700 transition-colors duration-300" href="">+99</a>
                </div>
                <h3 class="font-extrabold mt-3 text-2xl">65 <br>
                    <span class="text-sm font-normal">Team members</span></h3>
                <h3 class="font-extrabold mt-4 text-2xl">100<br>
                    <span class="text-sm font-normal">Daily visits</span></h3>

                <a href="" class="cursor-pointer w-20 h-20 flex items-center justify-center rounded-full bg-orange-600 hover:bg-orange-700 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 text-[#ededed] h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>

                </a>
            </div>
        </div>
        <div class="bg-[#ededed] rounded-2xl h-56">
            <h3 class="text-4xl ml-5 mt-3 font-semibold text-[#101014]">Popular and luxury listsings on Vertex</h3>
            <div class="flex justify-between mr-5 mt-10 ml-5">

                <div class="mt-3 flex -space-x-4">
                    <img class="w-16 h-16 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
                    <img class="w-16 h-16 border-2 border-white rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="">
                    <img class="w-16 h-16 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="">
                    <a class="flex items-center justify-center w-16 h-16 text-xs font-medium text-white bg-orange-600 border-2 border-white rounded-full hover:bg-orange-700 transition-colors duration-300" href="">+99</a>
                </div>
                <h3 class="font-extrabold mt-3 text-2xl">65 <br>
                    <span class="text-sm font-normal">Team members</span></h3>
                <h3 class="font-extrabold mt-4 text-2xl">100<br>
                    <span class="text-sm font-normal">Daily visits</span></h3>

                <a href="" class="cursor-pointer w-20 h-20 flex items-center justify-center rounded-full bg-orange-600 hover:bg-orange-700 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 text-[#ededed] h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>

                </a>
            </div>
        </div>

    </div>
    <div class="mt-20 grid grid-cols-2 text-2xl text-[#ededed] ml-5 mr-5 gap-6">

        <h3 class="text-5xl">We are your patner in building your dream home</h3>

        <p>
            We will help make your vision a reality and overcome any technical challenges with full protection of your property insurance.
        </p>

    </div>
    <div class="mt-20 grid grid-cols-3 ml-5 mr-5 gap-6">
        <div class="flex flex-col gap-4">
            <div class=" h-56 bg-cover rounded-2xl text-[#ededed] flex justify-center items-center relative transition-all group duration-500 cursor-pointer " :style="{'background-image': 'url(' + require('../assets/3.jpeg') + ')'}">
                <h3 class="ml-5 text-start font-extrabold text-2xl left-4 bottom-4 absolute">3 Bedroom House Plan</h3>
                <a href="" class="w-16 h-16 flex items-center justify-center rounded-full bg-orange-700 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 text-[#ededed] h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>

                </a>
            </div>
            <div class="h-96 bg-cover rounded-2xl text-[#ededed] flex justify-center items-center relative transition-all group duration-500 cursor-pointer" :style="{'background-image': 'url(' + require('../assets/4.jpeg') + ')'}">
                <h3 class="ml-5 text-start font-extrabold text-2xl left-4 bottom-4 absolute">3 Bedroom House Plan</h3>
                <a href="" class="w-16 h-16 flex items-center justify-center rounded-full bg-orange-700 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 text-[#ededed] h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>

                </a>
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <div class="h-96 bg-cover rounded-2xl text-[#ededed] flex justify-center items-center relative transition-all group duration-500 cursor-pointer" :style="{'background-image': 'url(' + require('../assets/8.jpeg') + ')'}">
                <h3 class="ml-5 text-start font-extrabold text-2xl left-4 bottom-4 absolute">3 Bedroom House Plan</h3>
                <a href="" class="w-16 h-16 flex items-center justify-center rounded-full bg-orange-700 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 text-[#ededed] h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>

                </a>
            </div>
            <div class="h-56 bg-cover rounded-2xl  text-[#ededed] flex justify-center items-center relative transition-all group duration-500 cursor-pointer" :style="{'background-image': 'url(' + require('../assets/9.jpeg') + ')'}">
                <h3 class="ml-5 text-start font-extrabold text-2xl left-4 bottom-4 absolute">3 Bedroom House Plan</h3>
                <a href="" class="w-16 h-16 flex items-center justify-center rounded-full bg-orange-700 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 text-[#ededed] h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>

                </a>
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <div class="h-56 bg-cover rounded-2xl  text-[#ededed] flex justify-center items-center relative transition-all group duration-500 cursor-pointer" :style="{'background-image': 'url(' + require('../assets/7.jpeg') + ')'}">
                <h3 class="ml-5 text-start font-extrabold text-2xl left-4 bottom-4 absolute">3 Bedroom House Plan</h3>
                <a href="" class="w-16 h-16 flex items-center justify-center rounded-full bg-orange-700 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 text-[#ededed] h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>

                </a>
            </div>
            <div class="h-96 bg-cover rounded-2xl  text-[#ededed] flex justify-center items-center relative transition-all group duration-500 cursor-pointer" :style="{'background-image': 'url(' + require('../assets/10.jpeg') + ')'}">
                <h3 class="ml-5 text-start font-extrabold text-2xl left-4 bottom-4 absolute">3 Bedroom House Plan</h3>
                <a href="" class="w-16 h-16 flex items-center justify-center rounded-full bg-orange-700 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 text-[#ededed] h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>

                </a>
            </div>
        </div>
    </div>

    <div class="mt-36 grid grid-cols-2 ml-5 mr-5 gap-10">
        <div class="h-[500px] w-5/6 bg-cover rounded-2xl flex justify-start items-center" :style="{'background-image': 'url(' + require('../assets/6.jpeg') + ')'}">
            <div class="bg-stone-900/50 text-[#ededed] h-64 w-56 ml-5 rounded-xl ">
                <h3 class="ml-5 mt-5 font-extrabold text-2xl">See Projects</h3>
                <p class="ml-5 mt-5">Browse through a wide range of plans and let's build you a comfy home.</p>
                <a href="" class="w-16 mt-5 h-16 ml-5 flex items-center justify-center rounded-full bg-orange-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 text-[#ededed] h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>

                </a>

            </div>
        </div>
        <div class="text-[#ededed]" >
            <h3 class="text-6xl font-bold">Comfort is our top <br>
                priority just for you</h3>

            <p class="mt-12 text-stone-400 text-xl">
                We are commited to providing the best comfort for you.
                Get a comfortable experience with us because we put your
                comfort above all to maintain the quality of our service.
            </p>
            <ul class="grid mt-12 text-[#ededed] text-xl font-geist font-semibold grid-cols-2 gap-x-4 gap-y-4">
                <li>Premium national marketing</li>
                <li>Managed viewings</li>
                <li>Free, no obligation valuations</li>
                <li>Local area knowledge</li>
            </ul>
            <a href="" class="bg-orange-700 inline-flex gap-2 hover:gap-4 transition-all duration-500 mt-12 px-8 rounded-full py-2">
                See more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

            </a>
        </div>
    </div>

    <div class="mt-32 relative bg-orange-700 text-[#ededed] h-96 w-5/6 rounded-2xl">
        <h2 class="text-6xl font-semibold text-start ml-10 p-5">
            Contact our partners <br> to discuss further about <br> consulting or development
        </h2>

        <p class="mt-5 text-start text-xl ml-16">
            With unrelenting passion, we help bring your vision to life <br>
            and overcome any engineering and technical challenges <br>
            no matter the scale, complexity or location of the project.
        </p>

        <div class="w-96 top-20 -right-52 pb-10 bg-[#ededed] text-[#101014] font-geist h-96 rounded-2xl absolute">
            <div v-if="!showSuccess" class="flex flex-col gap-5">
                <div class="flex flex-col gap-2 ml-5 mt-5">
                    <label class="text-2xl" for="name">Name</label>
                    <input v-model="customer_name" type="text" class="py-2 focus:outline-none pl-4 rounded-xl mr-5" placeholder="Your name">
                </div>
                <div class="flex flex-col gap-2 ml-5 mt-2">
                    <label class="text-2xl" for="email">Email</label>
                    <input v-model="customer_email" type="email" class="py-2 focus:outline-none pl-4 rounded-xl mr-5" placeholder="Your email">
                </div>
                <div class="flex flex-col gap-2 ml-5 mt-2">
                    <label class="text-2xl" for="messsage">Message</label>
                    <textarea v-model="message" class="py-2 resize-none focus:outline-none pl-4 rounded-xl mr-5" placeholder="How can we be of service?"></textarea>
                </div>
                <button @click="sendMessage" class="bg-orange-500 mt-10 hover:gap-4 transition-all duration-500 inline-flex gap-2 ml-3 justify-center items-center px-6 text-[#ededed] rounded-full py-2">
                    Submit
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mt-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>

                </button>
            </div>
            <div v-else class="flex justify-center mt-28 flex-col items-center">
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

    </div>

    <hr class="mt-56 border-stone-700">
    <footer class="flex mt-20 justify-between">
        <ul class="text-[#ededed]">
            <li class="text-3xl font-extrabold">Vertex Builders</li>
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
export default {
    components: {
        Navbar
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
            this.showSuccess = true
                setTimeout(() => this.showSuccess = false, 3000)
        }
    }
}
</script>

<style>
html {
    background-color: #101014;
}
</style>
