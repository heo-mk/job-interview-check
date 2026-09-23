<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { slugToCategoryMap } from '../lib/categorySlug'
import { useTrapQuestions } from '../composables/useTrapQuestions'
import CategoryNav from '../components/CategoryNav.vue'
import QuestionCard from '../components/QuestionCard.vue'
import Footer from '../components/Footer.vue'

const route = useRoute()
const categorySlug = computed(() => route.params.categorySlug as string)
const category = computed(() => slugToCategoryMap[categorySlug.value])
const { data: questions, loading } = useTrapQuestions(category)
</script>

<template>
  <div class="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
    <main class="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8">
      <!-- 상단 네비게이션 -->
      <div class="mb-6 flex items-center gap-2 text-xs text-zinc-400">
        <RouterLink to="/" class="hover:text-zinc-200 transition">
          홈
        </RouterLink>
        <span>/</span>
        <span class="text-zinc-200 font-medium">카테고리</span>
        <span>/</span>
        <span class="text-red-400 font-semibold">{{ category || '알 수 없음' }}</span>
      </div>

      <div class="border-b border-zinc-800 pb-4 mb-6">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-white">
          {{ category || '카테고리를 찾을 수 없습니다' }}
        </h1>
        <p class="mt-1 text-sm text-zinc-400">
          {{ category ? `${category} 유형의 면접 함정 질문과 분석입니다.` : '유효하지 않은 카테고리 경로입니다.' }}
        </p>
      </div>

      <CategoryNav :current-category="category" />

      <div v-if="loading" class="grid gap-4 sm:grid-cols-2 mt-6">
        <div
          v-for="i in 4"
          :key="i"
          class="h-36 rounded-2xl bg-zinc-900/60 animate-pulse border border-zinc-800/60"
        />
      </div>

      <div
        v-else-if="!questions || questions.length === 0"
        class="py-20 text-center space-y-3"
      >
        <p class="text-zinc-500">이 카테고리에는 아직 질문이 등록되지 않았습니다.</p>
        <RouterLink
          to="/"
          class="inline-block px-4 py-2 rounded-lg bg-zinc-800 text-xs font-semibold text-zinc-200 hover:bg-zinc-700 transition"
        >
          전체 질문 보러가기
        </RouterLink>
      </div>

      <div v-else class="grid gap-4 sm:grid-cols-2 mt-6">
        <QuestionCard
          v-for="q in questions"
          :key="q._id"
          :question="q"
        />
      </div>
    </main>

    <Footer />
  </div>
</template>
