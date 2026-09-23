import { createClient } from '@sanity/client'
import data from './seed-data.json' with {type: 'json'}

const client = createClient({
    projectId: 'jo0ny6y1',
    dataset: 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_WRITE_TOKEN,
    useCdn: false,
})

async function seed() {
    for (const item of data) {
        const doc = {
            _type: 'trapQuestion',
            ...item,
            slug: { current: item.title.toLowerCase().replace(/[^a-z0-9가-힣]+/g, '-') },
        }
        const result = await client.create(doc)
        console.log(`생성됨: ${result._id} — ${item.title}`)
    }
}

seed().catch(console.error)