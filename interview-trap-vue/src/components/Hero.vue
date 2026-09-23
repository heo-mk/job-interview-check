<script setup lang="ts">
import { computed } from 'vue'
import type { SiteSettings } from '../types/content'

const props = defineProps<{
  settings: SiteSettings | null
}>()

const emit = defineEmits<{
  (e: 'ctaClick'): void
}>()

const introParagraphs = computed(() => {
  return props.settings?.heroIntro ? props.settings.heroIntro.split('\n\n') : []
})
</script>

<template>
  <header v-if="!settings" class="py-12 animate-pulse space-y-4">
    <div class="h-10 bg-zinc-800 rounded-lg w-3/4"></div>
    <div class="h-6 bg-zinc-800 rounded-md w-1/2"></div>
    <div class="h-24 bg-zinc-800/60 rounded-xl w-full"></div>
  </header>

  <header v-else class="pt-10 pb-6 space-y-8">
    <!-- 뱃지 -->
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
      <span class="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping"></span>
      개발자 취업 면접 함정 질문 분석
    </div>

    <!-- 헤드라인 & 서브헤드라인 -->
    <div class="space-y-4">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {{ settings.heroHeadline }}
      </h1>
      <p class="text-lg sm:text-xl text-zinc-400 font-medium leading-relaxed">
        {{ settings.heroSubheadline }}
      </p>
    </div>

    <!-- 도입 문단 (heroIntro) -->
    <div
      v-if="introParagraphs.length > 0"
      class="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed"
    >
      <p v-for="(para, index) in introParagraphs" :key="index">
        {{ para }}
      </p>
    </div>

    <!-- CTA 버튼 -->
    <div v-if="settings.ctaButtonText" class="pt-2">
      <button
        type="button"
        @click="emit('ctaClick')"
        class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 active:scale-98 transition shadow-lg shadow-red-900/30 cursor-pointer"
      >
        <span>{{ settings.ctaButtonText }}</span>
        <svg
          class="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  </header>
</template>
