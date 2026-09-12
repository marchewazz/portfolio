<script setup>
import LinkedIn from "../assets/images/icons/linkedin.svg?component"
import GitHub from "../assets/images/icons/github.svg?component"
import { useRoute } from "vue-router"

const route = useRoute()

const year = new Date().getFullYear()

const links = [
    { href: '#hero', key: 'nav.start' },
    { href: '#skills', key: 'nav.skills' },
    { href: '#experience', key: 'nav.experience' },
    { href: '#testimonials', key: 'nav.testimonials' },
    { href: '#events', key: 'nav.events' },
    { href: '#education', key: 'nav.education' },
    { href: '#collaboration', key: 'nav.collaboration' },
]

</script>

<template>
    <footer
        class="bg-primary-blue/90 dark:bg-primary-claret/50 dark:[body:has(#loader)_&]:bg-primary-claret border-t-2 border-t-primary-yellow dark:border-t-primary-blue py-8 text-neutral-100 font-mono max-w-screen w-full">

        <!-- Otwierający tag <footer> -->
        <div
            class="px-4 lg:px-10 pb-3 text-sm text-primary-claret dark:text-white border-b border-dashed border-primary-black dark:border-primary-blue">
            &lt;footer&gt;
        </div>

        <div class="flex flex-col lg:flex-row justify-between gap-6 px-8 lg:px-16 py-4">

            <!-- Otwierający tag <nav> -->
            <div>
                <div class="text-sm text-primary-claret dark:text-white  mb-1">&lt;nav&gt;</div>
                <nav class="flex flex-col gap-0.5 pl-1 sm:pl-6">
                    <a v-if="route.name && route.name == 'home'" v-for="link in links" :key="link.href" :href="link.href"
                        :aria-label="`${$t('footer.linksAria')}${$t(link.key)}`"
                        class="group flex flex-col sm:flex-row sm:items-center gap-1 py-1.5 px-2 text-sm hover:bg-primary-claret dark:hover:bg-primary-blue hover:pl-3 transition-[padding,background-color] duration-150">
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-yellow dark:group-hover:text-primary-claret">&lt;a href="{{ link.href }}"&gt;</span>
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-yellow dark:group-hover:text-primary-claret px-2 sm:px-0">{{$t(link.key) }}</span>
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-yellow dark:group-hover:text-primary-claret">&lt;/a&gt;</span>
                    </a>
                    <RouterLink v-if="route.name && route.name == 'home'" to="/privacy"
                        :aria-label="$t('footer.privacyAria')"
                        class="group flex flex-col sm:flex-row sm:items-center gap-1 py-1.5 px-2 text-sm hover:bg-primary-claret dark:hover:bg-primary-blue transition-[background-color] duration-150">
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-yellow dark:group-hover:text-primary-claret">&lt;a href="/privacy"&gt;</span>
                        <span class="font-ibm text-primary-black dark:text-white group-hover:text-primary-yellow dark:group-hover:text-primary-claret px-2 sm:px-0">{{$t("footer.privacy") }}</span>
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-yellow dark:group-hover:text-primary-claret">&lt;/a&gt;</span>
                    </RouterLink>
                    <RouterLink v-if="route.name && route.name != 'home'" to="/"
                        :aria-label="$t('footer.homeAria')"
                        class="group flex flex-col sm:flex-row sm:items-center gap-1 py-1.5 px-2 text-sm hover:bg-primary-claret dark:hover:bg-primary-blue transition-[background-color] duration-150">
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-yellow dark:group-hover:text-primary-claret">&lt;a href="/home"&gt;</span>
                        <span class="font-ibm text-primary-black dark:text-white group-hover:text-primary-yellow dark:group-hover:text-primary-claret px-2 sm:px-0">{{$t("footer.home") }}</span>
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-yellow dark:group-hover:text-primary-claret">&lt;/a&gt;</span>
                    </RouterLink>
                </nav>
                <div class="text-sm text-primary-claret dark:text-white  mt-1">&lt;/nav&gt;</div>
            </div>

            <div>
                <div class="text-sm text-primary-claret dark:text-white  mb-1">&lt;div class="important-links"&gt;</div>
                <div class="flex flex-col gap-0.5 pl-1 sm:pl-6">
                    <a href="https://github.com/marchewazz" target="_blank" :aria-label="$t('footer.githubAria')"
                        class="group flex items-center gap-1 py-1.5 px-2 text-sm hover:bg-primary-claret dark:hover:bg-primary-blue transition-[background-color] duration-150">
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-yellow dark:group-hover:text-primary-claret">&lt;a</span>
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-yellow dark:group-hover:text-primary-claret">href="github"&gt;</span>
                        <GitHub class="size-4 text-primary-black dark:text-primary-white group-hover:text-primary-yellow dark:group-hover:text-primary-claret" />
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-yellow dark:group-hover:text-primary-claret">&lt;/a&gt;</span>
                    </a>
                    <a href="https://www.linkedin.com/in/mateusz-marchewczyk-b2b7881ba/" target="_blank"
                        :aria-label="$t('footer.linkedinAria')"
                        class="group flex items-center gap-1 py-1.5 px-2 text-sm hover:bg-primary-claret dark:hover:bg-primary-blue transition-[background-color] duration-150">
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-yellow dark:group-hover:text-primary-claret">&lt;a</span>
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-yellow dark:group-hover:text-primary-claret">href="linkedin"&gt;</span>
                        <LinkedIn class="size-4 text-primary-black dark:text-primary-white group-hover:text-primary-yellow dark:group-hover:text-primary-claret" />
                        <span class="text-primary-claret dark:text-white text-sm group-hover:text-primary-yellow dark:group-hover:text-primary-claret">&lt;/a&gt;</span>
                    </a>
                </div>
                <div class="text-sm text-primary-claret dark:text-white  mt-1">&lt;/div&gt;</div>
            </div>
        </div>

        <!-- Status/copyright -->
        <div
            class="px-8 lg:px-16 py-4 flex flex-col  border-t border-dashed border-primary-black dark:border-primary-blue">
            <div class="text-sm text-primary-claret dark:text-white pr-1">&lt;div class="additional-informations"&gt;</div>
            <div class="flex flex-col text-primary-black dark:text-primary-white lg:flex-row justify-between gap-2 px-5 lg:px-10 py-3 text-sm">
                <p>{{ $t("footer.ideas") }}</p>
                <p>{{ $t("footer.coding") }}</p>
                <p>{{ $t("footer.builtWith") }}</p>
                <p>© {{ year }} Mateusz Marchewczyk</p>
            </div>
            <div class="text-sm text-primary-claret dark:text-white pr-1">&lt;/div&gt;</div>
        </div>

        <!-- Zamykający tag </footer> -->
        <div
            class="px-4 lg:px-10  pt-3 text-sm text-neutral-200 border-t border-dashed text-primary-claret dark:text-white border-primary-black dark:border-primary-blue">
            &lt;/footer&gt;
        </div>
    </footer>
</template>