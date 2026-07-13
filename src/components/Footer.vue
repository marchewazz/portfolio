<script setup>
import LinkedIn from "../assets/images/icons/linkedin.svg"
import GitHub from "../assets/images/icons/github.svg"

</script>

<template>
    <footer class="dark:bg-primary-claret bg-[#e6cc00] text-primary-blue flex justify-between max-w-screen border-t-2 border-primary-yellow container">
        <nav class="flex flex-col items-center relative z-0 w-1/4">
            <a class="font-bold bg-primary-yellow/90 w-full h-full py-4 px-2 hover:pl-4 hover:translate-x-4 transition-[padding,transform] duration-200" href="#hero">{{ $t('nav.start') }}</a>
            <a class="font-bold bg-primary-yellow/90 w-full h-full py-4 px-2 hover:pl-4 hover:translate-x-4 transition-[padding,transform] duration-200" href="#skills">{{ $t('nav.skills') }}</a>
            <a class="font-bold bg-primary-yellow/90 w-full h-full py-4 px-2 hover:pl-4 hover:translate-x-4 transition-[padding,transform] duration-200" href="#experience">{{ $t('nav.experience') }}</a>
            <a class="font-bold bg-primary-yellow/90 w-full h-full py-4 px-2 hover:pl-4 hover:translate-x-4 transition-[padding,transform] duration-200" href="#testimonials">{{ $t('nav.testimonials') }}</a>
            <a class="font-bold bg-primary-yellow/90 w-full h-full py-4 px-2 hover:pl-4 hover:translate-x-4 transition-[padding,transform] duration-200" href="#testimonials">{{ $t('nav.testimonials') }}</a>
            <a class="font-bold bg-primary-yellow/90 w-full h-full py-4 px-2 hover:pl-4 hover:translate-x-4 transition-[padding,transform] duration-200" href="#testimonials">{{ $t('nav.testimonials') }}</a>
            <div class="h-full bg-primary-yellow/90 absolute w-[30vw] -z-1 right-full"></div>
        </nav>
        <div class="bg-primary-yellow/90 flex h-fit gap-4 relative z-0">
            <a class="p-8 hover:scale-125" href="https://github.com/marchewazz" target="_blank"><component :is="GitHub" /></a>
            <a class="p-8 hover:scale-125" href="https://www.linkedin.com/in/mateusz-marchewczyk-b2b7881ba/" target="_blank"><component :is="LinkedIn" /></a>
            <div class="h-full bg-primary-yellow/90 absolute w-[30vw] -z-1 left-full"></div>
        </div>
    </footer>
</template>