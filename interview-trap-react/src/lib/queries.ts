export const allTrapQuestionsQuery = `*[_type == "trapQuestion"] | order(category asc)`

export const trapQuestionsByCategoryQuery = `*[_type == "trapQuestion" && category == $category]`

export const trapQuestionBySlugQuery = `*[_type == "trapQuestion" && slug.current == $slug][0]`

export const siteSettingsQuery = `*[_type == "siteSettings"][0]`
