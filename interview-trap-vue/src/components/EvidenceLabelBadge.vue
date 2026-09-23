<script setup lang="ts">
import { computed } from 'vue'
import type { EvidenceLabel } from '../types/content'

const props = withDefaults(
  defineProps<{
    label: EvidenceLabel | string
    className?: string
  }>(),
  {
    className: '',
  }
)

const badgeColor = computed(() => {
  if (props.label === '원칙 기반') {
    return 'bg-indigo-950/70 text-indigo-300 border-indigo-700/50'
  } else if (props.label === '경험 기반') {
    return 'bg-amber-950/70 text-amber-300 border-amber-700/50'
  } else if (props.label === '제보 기반') {
    return 'bg-emerald-950/70 text-emerald-300 border-emerald-700/50'
  }
  return 'bg-slate-800/80 text-slate-300 border-slate-700'
})
</script>

<template>
  <span
    :class="[
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
      badgeColor,
      className,
    ]"
  >
    [{{ label }}]
  </span>
</template>
