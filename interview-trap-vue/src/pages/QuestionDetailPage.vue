<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { slugToCategoryMap } from '../lib/categorySlug'
import { useTrapQuestionBySlug } from '../composables/useTrapQuestionBySlug'
import QuestionDetail from '../components/QuestionDetail.vue'
import Footer from '../components/Footer.vue'

const route = useRoute()
const categorySlug = computed(() => route.params.categorySlug as string)
const slug = computed(() => route.params.slug as string)
const category = computed(() => categorySlug.value ? slugToCategoryMap[categorySlug.value] : undefined)

const { data: question, loading } = useTrapQuestionBySlug(slug)
</script>

<template>
  <div class="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
    <main class="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 py-8">
      <!-- 상단 빵부스러기(Breadcrumb) 네비게이션 -->
      <div class="mb-8 flex items-center gap-2 text-xs text-zinc-400">
        <RouterLink to="/" class="hover:text-zinc-200 transition">
          홈
        </RouterLink>
        <span>/</span>
        <template v-if="categorySlug">
          <RouterLink :to="`/questions/${categorySlug}`" class="hover:text-zinc-200 transition">
            {{ category || categorySlug }}
          </RouterLink>
          <span>/</span>
        </template>
        <span class="text-zinc-500 truncate max-w-[200px]">
          {{ question ? question.title : '상세' }}
        </span>
      </div>

      <div v-if="loading" class="space-y-6 animate-pulse">
        <div class="h-8 bg-zinc-900 rounded-lg w-3/4"></div>
        <div class="h-32 bg-zinc-900/60 rounded-2xl"></div>
        <div class="h-28 bg-zinc-900/60 rounded-2xl"></div>
      </div>

      <div v-else-if="!question" class="py-20 text-center space-y-4">
        <h2 class="text-xl font-bold text-zinc-300">질문을 찾을 수 없습니다.</h2>
        <p class="text-sm text-zinc-500">삭제되었거나 잘못된 접근입니다.</p>
        <RouterLink
          :to="categorySlug ? `/questions/${categorySlug}` : '/'"
          class="inline-block px-5 py-2.5 rounded-xl bg-zinc-800 text-sm font-semibold text-white hover:bg-zinc-700 transition"
        >
          목록으로 돌아가기
        </RouterLink>
      </div>

      <div v-else class="space-y-10">
        <QuestionDetail :question="question" />

        <!-- 하단 네비게이션 액션 -->
        <div class="pt-6 border-t border-zinc-800/80 flex items-center justify-between">
          <RouterLink
            :to="categorySlug ? `/questions/${categorySlug}` : '/'"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-semibold text-zinc-300 border border-zinc-800 transition"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {{ category ? `${category} 목록으로` : '전체 목록으로' }}
          </RouterLink>
          <RouterLink
            to="/"
            class="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition"
          >
            홈으로 이동
          </RouterLink>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>
