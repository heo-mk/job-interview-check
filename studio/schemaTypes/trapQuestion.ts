import {defineField, defineType} from 'sanity'

export const trapQuestionType = defineType({
  name: 'trapQuestion',
  title: '함정 질문',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '질문 (예: 이전 회사는 왜 그만두셨어요?)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL 슬러그',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: '카테고리',
      type: 'string',
      options: {
        list: [
          '자기소개/도입형',
          '인성/태도',
          '경험/역량',
          '조직적합성/지원동기',
          '압박형',
          '추정형/브레인티저',
          '직무 방법론',
          '역질문',
          '기타',
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'riskReason',
      title: '왜 위험한가',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'evidenceLabel',
      title: '근거 라벨',
      type: 'string',
      options: {list: ['원칙 기반', '경험 기반', '제보 기반']},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'improvedDirection',
      title: '개선된 답변 방향',
      type: 'text',
    }),
    defineField({
      name: 'exampleAnswer',
      title: '모범답안 예시 (익명화된 문장만)',
      type: 'text',
    }),
    defineField({
      name: 'sourceNote',
      title: '출처 (선택)',
      type: 'string',
    }),
  ],
})