<script setup>

import Face from "../../assets/images/face.jpg"

</script>

<template>
    <div class="bg-primary-blue dark:bg-primary-claret hero pt-20" id="hero">
        <div class="container mx-auto flex flex-col lg:flex-row items-center lg:justify-evenly gap-16 py-16">
            <img class="w-1/2 lg:w-100 rounded-2xl shadow-2xl border-2 border-gray-100 rotate-1" :src="Face" alt="">
            <div class="flex flex-col justify-start gap-4">
                <h1 class="text-2xl bg-primary-yellow text-primary-claret py-2 w-fit px-6 font-bold rounded-full">
                    Full-stack developer
                </h1>
                <h2 class="text-3xl font-bold text-primary-blue mt-4">
                    {{ $t("home.hero.header") }}
                    <span class="text-primary-yellow">
                        Mateusz!
                    </span>
                </h2>
                <p class="font-imb text-white text-xl">
                    {{ $t("home.hero.firstParagraph") }}
                </p>
            </div>
        </div>
    </div>
</template>