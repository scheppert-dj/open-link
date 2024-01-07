export type Content = {
	meta: {
		title: string
		description: string
		image: string
	}
	header: {
		avatar: string
		name: string
		description: string
	}
	apps: {
		image: string
		name: string
		url: string
	}[]
	links: {
		image: string
		url: string
		text: string
	}[]
	socials: {
		icon: string
		url: string
		text: string
	}[]
}
