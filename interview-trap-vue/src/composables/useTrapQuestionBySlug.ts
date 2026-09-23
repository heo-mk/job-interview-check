import {useQuery} from '@tanstack/vue-query'
import {toValue, type MaybeRefOrGetter} from 'vue'
import {sanityClient} from '../lib/sanity'
import type {TrapQuestion} from '../types/content'

export function useTrapQuestionBySlug(slug: MaybeRefOrGetter<string | undefined>) {
  const query = `*[_type == "trapQuestion" && (slug.current == $slug || _id == $slug)][0]`

  const {data, isLoading} = useQuery({
    queryKey: () => ['trapQuestion', toValue(slug)],
    queryFn: () => {
      const s = toValue(slug)
      return sanityClient.fetch<TrapQuestion | null>(query, {slug: s})
    },
    enabled: () => Boolean(toValue(slug)),
  })

  return {data, loading: isLoading}
}
