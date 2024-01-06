import * as prismic from '@prismicio/client'

const client = prismic.createClient('constructor')

const home = await client.getByUID('page', 'home')
