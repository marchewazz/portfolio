<script setup>
import Collaboration from '../components/Home/Collaboration.vue';
import Education from '../components/Home/Education.vue';
import Events from '../components/Home/Events.vue';
import Experience from '../components/Home/Experience.vue';
import Hero from '../components/Home/Hero.vue';
import Skills from '../components/Home/Skills.vue';
import TestimonialsNotes from '../components/Home/TestimonialsNotes.vue';
import TestimonialsSwiper from '../components/Home/TestimonialsSwiper.vue';

</script>

<template>
    <main>
        <Hero />
        <Skills />
        <div>
            <div class="bg-main transition-[background-image] duration-300"></div>
            <Experience />
            <div id="testimonials">
                <TestimonialsSwiper />
                <TestimonialsNotes />
            </div>
            <Events />
            <Education />
            <Collaboration />
        </div>
    </main>
</template>