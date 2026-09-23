<script setup lang="ts">
import { ref } from 'vue'
import { useSiteSettings } from '../composables/useSiteSettings'
import { useTrapQuestions } from '../composables/useTrapQuestions'
import Hero from '../components/Hero.vue'
import TaglineQuote from '../components/TaglineQuote.vue'
import CategoryNav from '../components/CategoryNav.vue'
import QuestionCard from '../components/QuestionCard.vue'
import Footer from '../components/Footer.vue'

const { data: settings } = useSiteSettings()
const { data: questions, loading: questionsLoading } = useTrapQuestions()

const questionsSectionRef = ref<HTMLElement | null>(null)

const handleCtaClick = () => {
  questionsSectionRef.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
    <main class="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8">
      <Hero :settings="settings ?? null" @cta-click="handleCtaClick" />

      <TaglineQuote v-if="settings?.taglineQuote" :quote="settings.taglineQuote" />

      <div ref="questionsSectionRef" class="pt-8">
        <div class="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
          <h2 class="text-xl font-bold text-white">함정 질문 목록</h2>
          <span class="text-xs text-zinc-400">
            총 {{ questions?.length ?? 0 }}개의 질문
          </span>
        </div>

        <CategoryNav />

        <div v-if="questionsLoading" class="grid gap-4 sm:grid-cols-2 mt-6">
          <div
            v-for="i in 6"
            :key="i"
            class="h-36 rounded-2xl bg-zinc-900/60 animate-pulse border border-zinc-800/60"
          />
        </div>

        <div
          v-else-if="!questions || questions.length === 0"
          class="py-16 text-center text-zinc-500"
        >
          등록된 함정 질문이 없습니다.
        </div>

        <div v-else class="grid gap-4 sm:grid-cols-2 mt-6">
          <QuestionCard
            v-for="q in questions"
            :key="q._id"
            :question="q"
          />
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>
