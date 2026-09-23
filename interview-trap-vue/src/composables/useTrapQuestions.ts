import {useQuery} from '@tanstack/vue-query'
import {toValue, type MaybeRefOrGetter} from 'vue'
import {sanityClient} from '../lib/sanity'
import {allTrapQuestionsQuery, trapQuestionsByCategoryQuery} from '../lib/queries'
import type {TrapQuestion, Category} from '../types/content'

export function useTrapQuestions(category?: MaybeRefOrGetter<Category | undefined>) {
  const {data, isLoading} = useQuery({
    queryKey: () => ['trapQuestions', toValue(category) ?? 'all'],
    queryFn: () => {
      const cat = toValue(category)
      const query = cat ? trapQuestionsByCategoryQuery : allTrapQuestionsQuery
      const params = cat ? {category: cat} : {}
      return sanityClient.fetch<TrapQuestion[]>(query, params)
    },
  })

  return {data, loading: isLoading}
}
