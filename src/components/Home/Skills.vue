<script setup>
import { useI18n } from 'vue-i18n'
import Frontend from "../../assets/images/icons/frontend.svg"
import Backend from "../../assets/images/icons/backend.svg"
import Db from "../../assets/images/icons/db.svg"
import CMS from "../../assets/images/icons/cms.svg"
import Tools from "../../assets/images/icons/tools.svg"
import Cpu from "../../assets/images/icons/cpu.svg"

const { tm } = useI18n()

const skillKeys = [
    { key: 'frontend', icon: Frontend },
    { key: 'backend', icon: Backend },
    { key: 'database', icon: Db },
    { key: 'ai', icon: Cpu },
    { key: 'tools', icon: Tools },
    { key: 'cms', icon: CMS },
]

const techColors = {
    // Frontend
    'Vue': { bg: '#4FC08D', text: '#35495E' },
    'React': { bg: '#20232A', text: '#61DAFB' },
    'TypeScript': { bg: '#3178C6', text: '#FFFFFF' },
    'Tailwind': { bg: '#0F172A', text: '#38BDF8' },
    'Bootstrap': { bg: '#7952B3', text: '#FFFFFF' },
    'SCSS': { bg: '#CC6699', text: '#FFFFFF' },
    // Backend
    'Node.js': { bg: '#333333', text: '#8CC84B' },
    'Express': { bg: '#000000', text: '#FFFFFF' },
    'PHP': { bg: '#777BB4', text: '#FFFFFF' },
    'Laravel': { bg: '#FF2D20', text: '#FFFFFF' },
    'Python': { bg: '#3776AB', text: '#FFD43B' },
    // Databases
    'MySQL': { bg: '#00758F', text: '#FFFFFF', border: '#F29111' },
    'PostgreSQL': { bg: '#336791', text: '#FFFFFF' },
    'MongoDB': { bg: '#001E2B', text: '#00ED64' },
    'SQLite': { bg: '#003B57', text: '#97D9F6' },
    // AI
    'Codex': { bg: '#000000', text: '#FFFFFF' },
    'Claude': { bg: '#D97757', text: '#141413' },
    'Claude Code': { bg: '#141413', text: '#D97757' },
    'ChatGPT': { bg: '#10A37F', text: '#FFFFFF' },
    'ChatLab': { bg: '#000000', text: '#FFFFFF' },
    // Tools
    'Git': { bg: '#F05032', text: '#FFFFFF' },
    'Docker': { bg: '#1D63ED', text: '#FFFFFF' },
    'Vite': { bg: 'linear-gradient(135deg, #646CFF, #BD34FE)', text: '#FFFFFF', border: '#FFBD4F' },
    'Jira': { bg: '#0052CC', text: '#FFFFFF' },
    'DBeaver': { bg: '#382923', text: '#F5E6D3' },
    'Vitest': { bg: '#1E1E20', text: '#FCC72B', border: '#729B1B' },
    'Playwright': { bg: '#2D4552', text: '#45BA4B', border: '#D65348' },
    'PHPUnit': { bg: '#4F5B93', text: '#FFFFFF' },
    // CMS (matched by first word, e.g. "WordPress z motywami Roots/Sage")
    'WordPress': { bg: '#21759B', text: '#FFFFFF' },
}

// Case-insensitive lookup, so "Wordpress" and "WordPress" both match
const techColorsLower = Object.fromEntries(
    Object.entries(techColors).map(([name, colors]) => [name.toLowerCase(), colors])
)

// Returns inline styles for a known technology, or null → falls back to site colors
function pillStyle(tech) {
    const name = tech.toLowerCase()
    const c = techColorsLower[name] ?? techColorsLower[name.split(' ')[0]]
    if (!c) return null
    return { background: c.bg, color: c.text, borderColor: c.border ?? 'transparent' }
}
</script>

<template>
    <section class="flex flex-col bg-primary-claret dark:bg-primary-yellow transition-colors duration-500" id="skills">
        <div class="bg-primary-yellow dark:bg-primary-blue py-8 transition-colors duration-500 ease-out">
            <div class="container mx-auto justify-center">
                <h2 class="text-primary-claret text-3xl text-center">
                    {{ $t("home.skills.header") }}
                </h2>
            </div>
        </div>

        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 px-4 py-8 lg:py-12">
            <article
                v-for="skill in skillKeys"
                :key="skill.key"
                tabindex="0"
                class="relative flex flex-col items-center gap-4 p-6 rounded-2xl shadow-md
                    transition-[color,background-color,scale,box-shadow] duration-300 ease-out
                    hover:scale-105 lg:hover:scale-110 hover:z-1 hover:shadow-2xl
                    focus-visible:scale-105 lg:focus-visible:scale-110 focus-visible:z-1 focus-visible:shadow-2xl
                    bg-primary-yellow dark:bg-primary-blue text-primary-black dark:text-primary-white">
                <component :is="skill.icon" class="size-12 shrink-0" aria-hidden="true" />
                <h3 class="font-heading text-xl font-bold">
                    {{ $t(`home.skills.items.${skill.key}.title`) }}
                </h3>
                <ul class="flex flex-wrap justify-center gap-2 font-imb text-base lg:text-lg text-center">
                    <li v-for="tech in tm(`home.skills.items.${skill.key}.technologies`)" :key="tech"
                        class="rounded-full px-3 py-1 font-semibold border-2 shadow-sm"
                        :class="pillStyle(tech) ? '' : 'bg-primary-claret text-primary-yellow dark:bg-primary-yellow dark:text-primary-claret border-transparent'"
                        :style="pillStyle(tech)">
                        {{ tech }}
                    </li>
                </ul>
            </article>
        </div>
    </section>
</template>
