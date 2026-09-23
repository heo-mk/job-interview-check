<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  quote?: string
}>()

const paragraphs = computed(() => {
  if (!props.quote) return []
  return props.quote.split('\n\n')
})
</script>

<template>
  <div
    v-if="quote"
    class="relative my-8 p-6 rounded-2xl bg-gradient-to-r from-red-950/20 via-zinc-900 to-zinc-900/60 border border-red-500/20 shadow-lg shadow-black/20"
  >
    <div class="flex items-start gap-4">
      <span class="text-3xl select-none text-red-400 font-serif leading-none">“</span>
      <div class="space-y-3">
        <p
          v-for="(para, i) in paragraphs"
          :key="i"
          :class="[
            'leading-relaxed',
            i === 0 ? 'text-lg font-semibold text-zinc-100' : 'text-sm text-zinc-400'
          ]"
        >
          {{ para }}
        </p>
      </div>
    </div>
  </div>
</template>
