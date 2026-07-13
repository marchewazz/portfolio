<script setup>
import LinkedIn from "../assets/images/icons/linkedin.svg"
import GitHub from "../assets/images/icons/github.svg"

</script>

<template>
    <footer class="dark:bg-primary-claret text-primary-blue flex justify-between max-w-screen border-t-2 border-primary-yellow container">
        <nav class="flex flex-col items-center relative z-0 w-1/4">
            <a class="font-bold bg-primary-yellow w-full h-full py-4 px-2 hover:translate-x-4 transition-transform duration-200" href="#hero">{{ $t('nav.start') }}</a>
            <a class="font-bold bg-primary-yellow w-full h-full py-4 px-2 hover:translate-x-4 transition-transform duration-200" href="#skills">{{ $t('nav.skills') }}</a>
            <a class="font-bold bg-primary-yellow w-full h-full py-4 px-2 hover:translate-x-4 transition-transform duration-200" href="#experience">{{ $t('nav.experience') }}</a>
            <a class="font-bold bg-primary-yellow w-full h-full py-4 px-2 hover:translate-x-4 transition-transform duration-200" href="#testimonials">{{ $t('nav.testimonials') }}</a>
            <a class="font-bold bg-primary-yellow w-full h-full py-4 px-2 hover:translate-x-4 transition-transform duration-200" href="#testimonials">{{ $t('nav.testimonials') }}</a>
            <a class="font-bold bg-primary-yellow w-full h-full py-4 px-2 hover:translate-x-4 transition-transform duration-200" href="#testimonials">{{ $t('nav.testimonials') }}</a>
            <div class="h-full bg-primary-yellow absolute w-[30vw] -z-1 right-0"></div>
        </nav>
        <div class="bg-primary-yellow flex h-fit gap-4 relative z-0">
            <a class="p-8 hover:scale-125" href="https://github.com/marchewazz" target="_blank"><component :is="GitHub" /></a>
            <a class="p-8 hover:scale-125" href="https://www.linkedin.com/in/mateusz-marchewczyk-b2b7881ba/" target="_blank"><component :is="LinkedIn" /></a>
            <div class="h-full bg-primary-yellow absolute w-[30vw] -z-1 left-0"></div>
        </div>
    </footer>
</template>