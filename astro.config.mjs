import { defineConfig, squooshImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

// https://astro.build/config

export default defineConfig({
	integrations: [tailwind(), react()],
	image: {
		domains: ['res.cloudinary.com'],
		service: squooshImageService()
	}
})
