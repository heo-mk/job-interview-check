import {useQuery} from '@tanstack/react-query'
import {sanityClient} from '../lib/sanity'
import type {TrapQuestion} from '../types/content'

export function useTrapQuestionBySlug(slug?: string) {
  const query = `*[_type == "trapQuestion" && (slug.current == $slug || _id == $slug)][0]`

  const {data, isLoading} = useQuery({
    queryKey: ['trapQuestion', slug],
    queryFn: () => sanityClient.fetch<TrapQuestion | null>(query, {slug}),
    enabled: Boolean(slug),
  })

  return {data: data ?? null, loading: isLoading}
}
