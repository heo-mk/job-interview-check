import {useQuery} from '@tanstack/react-query'
import {sanityClient} from '../lib/sanity'
import {allTrapQuestionsQuery, trapQuestionsByCategoryQuery} from '../lib/queries'
import type {TrapQuestion, Category} from '../types/content'

export function useTrapQuestions(category?: Category) {
  const query = category ? trapQuestionsByCategoryQuery : allTrapQuestionsQuery
  const params = category ? {category} : {}

  const {data, isLoading} = useQuery({
    queryKey: ['trapQuestions', category ?? 'all'],
    queryFn: () => sanityClient.fetch<TrapQuestion[]>(query, params),
  })

  return {data: data ?? [], loading: isLoading}
}
