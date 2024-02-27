<template>
<div class="container font-base mx-auto">
    <nav class="flex text-white justify-between">
        <div>
            <a href="/" class="font-extrabold text-3xl font-base">Thebuild</a>
        </div>

    </nav>
    <div class="flex items-center justify-center text-[#ededed] w-full font-base gap-12 ml-5 mr-5 mt-16">

        <div class="w-1/2">
            <h3 class="text-2xl text-center font-bold">Welcome back:</h3>
            <p class="text-center">Login to continue.</p>
            <form class="flex flex-col space-y-8 text-md mt-8">

                <div class="flex flex-col gap-3">
                    <label for="email">Email</label>
                    <input v-model="email" type="email" class="border border-stone-400 bg-inherit pl-6 w-full rounded-lg py-2.5 focus:outline-none focus:ring-0 placeholder:text-stone-400" placeholder="Your email address">
                </div>
                <div class="flex flex-col gap-3">
                    <label for="password">Password</label>
                    <input v-model="password" type="password" class="border border-stone-400 bg-inherit pl-6 w-full rounded-lg py-2.5 focus:outline-none focus:ring-0 placeholder:text-stone-400" placeholder="Your password">
                </div>

                <button @click.prevent="login" class="bg-[#ededed] py-2 px-6 inline-flex items-center justify-center gap-2 hover:gap-4 transition-all duration-500 text-lg rounded-md text-[#101014]">
                    Login <svg xmlns="http://www.w3.org/2000/svg" class="icon mt-1 icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l14 0"></path>
                        <path d="M15 16l4 -4"></path>
                        <path d="M15 8l4 4"></path>
                    </svg></button>
                <p class="text-stone-500">Don't have an account? <a class="text-orange-500" href="/register">Register here</a></p>

            </form>
        </div>

    </div>

</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    
    data() {
        return {
            email: "",
            password: "",
            baseURL: process.env.VUE_APP_BASE,
        }
    },
    methods: {
        async login() {
            return await axios.post(
                `${this.baseURL}login/`, {
                    email: this.email,
                    password: this.password,
                }
            ).then(res => {
                localStorage.setItem("the_build", JSON.stringify(res.data))
                this.$router.push({
                    name: 'plans'
                })
            }).catch(error => {
                console.log(error)
            })
        },
    },
}
</script>

<style>
html {
    background-color: #101014;
}
</style>
