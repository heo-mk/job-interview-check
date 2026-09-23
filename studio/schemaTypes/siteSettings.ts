import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: '사이트 설정',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: '히어로 헤드라인',
      type: 'string',
    }),
    defineField({
      name: 'heroSubheadline',
      title: '히어로 서브카피',
      type: 'string',
    }),
    defineField({
      name: 'heroIntro',
      title: '도입 문단 (수학 비유)',
      type: 'text',
    }),
    defineField({
      name: 'taglineQuote',
      title: '인용구 블록',
      type: 'text',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA 버튼 문구',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return {title: '사이트 설정 (싱글턴)'}
    },
  },
})