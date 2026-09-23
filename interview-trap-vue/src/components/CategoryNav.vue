<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { categorySlugMap } from '../lib/categorySlug'
import type { Category } from '../types/content'

const categories: Category[] = [
  '자기소개/도입형',
  '인성/태도',
  '경험/역량',
  '조직적합성/지원동기',
  '압박형',
  '추정형/브레인티저',
  '직무 방법론',
  '역질문',
  '기타',
]

defineProps<{
  currentCategory?: Category | null
}>()
</script>

<template>
  <nav class="my-6">
    <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      <RouterLink
        to="/"
        :class="[
          'px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition',
          !currentCategory
            ? 'bg-white text-zinc-950 shadow'
            : 'bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700/80'
        ]"
      >
        전체 보기
      </RouterLink>
      <RouterLink
        v-for="cat in categories"
        :key="cat"
        :to="`/questions/${categorySlugMap[cat]}`"
        :class="[
          'px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition',
          currentCategory === cat
            ? 'bg-red-500 text-white shadow shadow-red-500/20'
            : 'bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700/80'
        ]"
      >
        {{ cat }}
      </RouterLink>
    </div>
  </nav>
</template>
