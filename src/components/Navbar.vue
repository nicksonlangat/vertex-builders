<template>
<nav class="flex text-white justify-between">
    <div>
        <a href="/" class="font-extrabold text-3xl font-base">Vertex Builders</a>
    </div>
    <div class="flex mt-2 text-stone-400 gap-6">
        <a class="hover:text-white transition-all duration-300" href="/">Home</a>
        <a class="hover:text-white transition-all duration-300" href="/">House Plans</a>
        <a class="hover:text-white transition-all duration-300" href="/">Contact</a>

    </div>
    <div>

        <button class="border border-[#ededed] flex justify-center items-center rounded-full px-6 py-1 hover:bg-[#ededed] hover:text-[#101014] transition-colors duration-300">
            Log in</button>

    </div>
</nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    mounted() {
        
    }
}
</script>

<style>
html {
    background-color: #101014;
}
</style>
