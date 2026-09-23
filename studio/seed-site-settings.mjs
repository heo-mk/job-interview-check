import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 'jo0ny6y1',
    dataset: 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_WRITE_TOKEN,
    useCdn: false,
})

const siteSettings = {
    _type: 'siteSettings',
    _id: 'siteSettings',
    heroHeadline:
        "왜 이런 걸 묻지 싶은 질문일수록, 사실은 '같이 일할 사람인가'를 채점하고 있습니다",
    heroSubheadline:
        '그 판단이 눈에 보이지 않을 뿐, 합격과 불합격을 가르는 숨은 기준이 됩니다',
    heroIntro:
        '0은 짝수일까요, 홀수일까요? 초등학교 때 이미 배운 내용이라 1초 안에 답할 수 있을 것 같지만, 막상 질문을 받으면 많은 사람이 "어... 그러네, 뭐였지?" 하고 멈춥니다. 어려워서가 아니라, 너무 당연해 보여서 애초에 생각해본 적이 없기 때문이에요.\n\n반대로 "1은 소수인가요?"라는 질문에는 오히려 자신 있게 틀린 답을 내놓는 사람이 많습니다. 안다고 착각하는 경우죠.\n\n면접 질문도 이 두 가지 함정을 똑같이 품고 있습니다. 몰라서 못 답하거나, 안다고 착각해서 틀리거나. 어느 쪽이든 결과는 같습니다. 준비 안 한 사람이 그 순간 가장 크게 흔들립니다.',
    taglineQuote:
        '마이크 타이슨의 말처럼, 누구나 그럴싸한 계획을 가지고 있습니다. 쳐맞기 전까지는.\n\n면접장에서 그 "한 방"은 대개 어려운 기술 질문이 아니라, 준비할 생각도 안 했던 쉬운 질문에서 옵니다.',
    ctaButtonText: '위험한 질문 목록 보기',
}

async function seedSiteSettings() {
    // _id를 고정값으로 지정하면 createOrReplace로 항상 하나만 유지됩니다.
    const result = await client.createOrReplace(siteSettings)
    console.log(`사이트 설정 저장됨: ${result._id}`)
}

seedSiteSettings().catch(console.error)