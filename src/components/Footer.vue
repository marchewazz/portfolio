<script setup>
import LinkedIn from "../assets/images/icons/linkedin.svg?component"
import GitHub from "../assets/images/icons/github.svg?component"

const year = new Date().getFullYear()

const links = [
    { href: '#hero', key: 'nav.start' },
    { href: '#skills', key: 'nav.skills' },
    { href: '#experience', key: 'nav.experience' },
    { href: '#testimonials', key: 'nav.testimonials' },
    { href: '#events', key: 'nav.events' },
    { href: '#collaboration', key: 'nav.collaboration' },
]
</script>

<template>
    <footer
        class="bg-primary-blue/90 dark:bg-primary-claret/70 border-t-2 border-t-primary-yellow dark:border-t-primary-blue py-8 text-neutral-100 font-mono max-w-screen w-full">

        <!-- Otwierający tag <footer> -->
        <div
            class="px-6 sm:px-8 pb-3 text-sm text-primary-claret dark:text-primary-claret dark:text-white border-b border-dashed border-primary-black dark:border-primary-blue">
            &lt;footer&gt;
        </div>

        <div class="flex flex-col sm:flex-row justify-between gap-6 px-4 sm:px-8 py-4">

            <!-- Otwierający tag <nav> -->
            <div>
                <div class="text-sm text-primary-claret dark:text-white pl-2 mb-1">&lt;nav&gt;</div>
                <nav class="flex flex-col gap-0.5 pl-4 sm:pl-6">
                    <a v-for="link in links" :key="link.href" :href="link.href"
                        class="group flex items-baseline gap-1 py-1.5 px-2 text-sm hover:bg-primary-blue hover:pl-3 transition-[padding,background-color] duration-150">
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-claret">&lt;a</span>
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-claret">href="{{ link.href
                            }}"&gt;</span>
                        <span class="font-ibm font-semibold text-primary-white group-hover:text-primary-claret">{{
                            $t(link.key) }}</span>
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-claret">&lt;/a&gt;</span>
                    </a>
                </nav>
                <div class="text-sm text-primary-claret dark:text-white pl-2 mt-1">&lt;/nav&gt;</div>
            </div>

            <div>
                <div class="text-sm text-primary-claret dark:text-white pl-2 mb-1">&lt;div class="important-links"&gt;</div>
                <div class="flex flex-col gap-0.5 pl-4 sm:pl-6">
                    <a href="https://github.com/marchewazz" target="_blank" aria-label="GitHub"
                        class="group flex items-center gap-1 py-1.5 px-2 text-sm hover:bg-primary-blue transition-[background-color] duration-150">
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-claret">&lt;a</span>
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-claret">href="github"&gt;</span>
                        <GitHub class="size-4 text-primary-white group-hover:text-primary-claret transition-colors" />
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-claret">&lt;/a&gt;</span>
                    </a>
                    <a href="https://www.linkedin.com/in/mateusz-marchewczyk-b2b7881ba/" target="_blank"
                        aria-label="LinkedIn"
                        class="group flex items-center gap-1 py-1.5 px-2 text-sm hover:bg-primary-blue transition-[background-color] duration-150">
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-claret">&lt;a</span>
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-claret">href="linkedin"&gt;</span>
                        <LinkedIn class="size-4 text-primary-white group-hover:text-primary-claret transition-colors" />
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-claret">&lt;/a&gt;</span>
                    </a>
                </div>
                <div class="text-sm text-primary-claret dark:text-white pl-2 mt-1">&lt;/div&gt;</div>
            </div>
        </div>

        <!-- Status/copyright -->
        <div
            class="px-6 lg:px-8 py-4 flex flex-col  border-t border-dashed border-primary-black dark:border-primary-blue">
            <div class="text-sm text-primary-claret dark:text-white pr-1">&lt;div class="additional-informations"&gt;</div>
            <div class="flex flex-col text-primary-white lg:flex-row justify-between gap-2 px-6 sm:px-8 py-3 text-sm">
                <span>pomysły: ja</span>
                <span>wykonanie: ja i Claude</span>
                <span>// built with Vue 3, Tailwind 4, swiper.js &amp; gsap</span>
                <span>© {{ year }} Mateusz Marchewczyk</span>
            </div>
            <div class="text-sm text-primary-claret dark:text-white pr-1">&lt;/div&gt;</div>
        </div>

        <!-- Zamykający tag </footer> -->
        <div
            class="px-6 sm:px-8 pt-3 text-sm text-neutral-200 border-t border-dashed border-primary-black dark:border-primary-blue">
            &lt;/footer&gt;
        </div>
    </footer>
</template>