import {useQuery} from '@tanstack/react-query'
import {sanityClient} from '../lib/sanity'
import {siteSettingsQuery} from '../lib/queries'
import type {SiteSettings} from '../types/content'

export function useSiteSettings() {
  const {data, isLoading} = useQuery({
    queryKey: ['siteSettings'],
    queryFn: () => sanityClient.fetch<SiteSettings>(siteSettingsQuery),
  })

  return {data: data ?? null, loading: isLoading}
}
