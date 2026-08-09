<script setup>
import { ref } from 'vue'
import Face from "../../assets/images/face.jpg"

const email = 'mateuszmarchewczyk24@gmail.com'
const copied = ref(false)

function copyEmail() {
    navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
}

// --- Terminal flip logic ---
const terminalLines = ref([])
const typing = ref(false)
const flipped = ref(false)

const devInfo = {
    firstName: "Mateusz",
    lastName: "Marchewczyk",
    role: "Full-stack developer",
    yearsOfExperience: "over_3",
    mainTechnologies: "[\"vue\", \"php\", \"wordpress\", \"tailwind\"]",
    status: "employed_open_to_contact",
}

// indent is now a level (0 or 1), not literal spaces in the string
const scriptLines = [
    { text: '> console.log(tl_dr)', delay: 30, indent: 0 },
    { text: '{', delay: 20, indent: 0 },
    { text: `"firstName": "${devInfo.firstName}",`, delay: 16, indent: 1 },
    { text: `"lastName": "${devInfo.lastName}",`, delay: 16, indent: 1 },
    { text: `"role": "${devInfo.role}",`, delay: 16, indent: 1 },
    { text: `"yearsOfExperience": "${devInfo.yearsOfExperience}",`, delay: 16, indent: 1 },
    { text: `"mainTechnologies": ${devInfo.mainTechnologies},`, delay: 16, indent: 1 },
    { text: `"status": "${devInfo.status}",`, delay: 16, indent: 1 },
    { text: '}', delay: 20, indent: 0 },
]

let typingTimeout = null

function startTyping() {
    if (typing.value) return
    typing.value = true
    terminalLines.value = []

    let lineIndex = 0

    const typeNextLine = () => {
        if (lineIndex >= scriptLines.length) {
            typing.value = false
            return
        }
        terminalLines.value.push('')
        const fullText = scriptLines[lineIndex].text
        let charIndex = 0

        const typeChar = () => {
            if (charIndex <= fullText.length) {
                terminalLines.value[lineIndex] = fullText.slice(0, charIndex)
                charIndex++
                typingTimeout = setTimeout(typeChar, scriptLines[lineIndex].delay)
            } else {
                lineIndex++
                typingTimeout = setTimeout(typeNextLine, 120)
            }
        }
        typeChar()
    }

    typeNextLine()
}

function resetTyping() {
    clearTimeout(typingTimeout)
    typing.value = false
    terminalLines.value = []
}

// --- Click handling (mainly for touch devices without hover) ---
function toggleFlip() {
    flipped.value = !flipped.value
    if (flipped.value) {
        startTyping()
    } else {
        resetTyping()
    }
}

function handleMouseEnter() {
    flipped.value = true
    startTyping()
}

function handleMouseLeave() {
    flipped.value = false
    resetTyping()
}
</script>

<template>
    <div
        class="w-full h-80 sm:w-1/2 sm:h-auto lg:w-100 shrink-0 sm:aspect-square perspective-distant group cursor-pointer"
        tabindex="0"
        @focusin="handleMouseEnter"
        @focusout="handleMouseLeave"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @click="toggleFlip"
    >
        <div
            class="relative w-full h-full transition-transform duration-700 ease-in-out transform-3d"
            :class="flipped ? 'transform-[rotateY(180deg)]' : ''"
        >
            <div class="absolute inset-0 backface-hidden">
                <img
                    class="w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-gray-100 rotate-1"
                    :src="Face"
                    :alt="$t('home.hero.alt')"
                />
            </div>
            <div
                class="absolute inset-0 backface-hidden transform-[rotateY(180deg)] rounded-2xl shadow-2xl border-2 border-primary-yellow bg-[#1e1e2e] overflow-hidden flex flex-col"
            >
                <div class="flex items-center gap-2 px-4 py-2.5 bg-[#151521] border-b border-white/10 shrink-0">
                    <span class="w-3 h-3 rounded-full bg-red-500"></span>
                    <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span class="w-3 h-3 rounded-full bg-green-500"></span>
                    <span class="ml-2 text-xs text-gray-400 font-mono">devInfo.js</span>
                </div>

                <div class="p-2 lg:p-4 font-mono text-xs sm:text-sm text-primary-yellow overflow-hidden flex-1">
                    <p
                        v-for="(line, i) in terminalLines"
                        :key="i"
                        class="leading-relaxed wrap-break-word"
                        style="text-wrap: auto;"
                        :style="{ paddingLeft: scriptLines[i]?.indent ? '1rem' : '0' }"
                        :class="line.trim().startsWith('>') ? 'text-green-400' : 'text-gray-200'"
                    >
                        {{ line }}<span v-if="i === terminalLines.length - 1 && typing" class="animate-pulse">▍</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>