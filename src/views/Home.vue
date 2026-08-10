<script setup>
import Collaboration from '../components/Home/Collaboration.vue';
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
            <div class="bg-main"></div>
            <Experience />
            <div id="testimonials">
                <TestimonialsSwiper />
                <TestimonialsNotes />
            </div>
            <Events />
            <Collaboration />
        </div>
    </main>
</template>