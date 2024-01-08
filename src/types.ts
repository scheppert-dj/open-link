export type Content = {
	meta: {
		title: string
		description: string
		gtmId?: string
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
		mail:
			| {
					icon: string
					url: string
					alt: string
			  }
			| undefined
		facebook:
			| {
					icon: string
					url: string
					alt: string
			  }
			| undefined
		instagram:
			| {
					icon: string
					url: string
					alt: string
			  }
			| undefined
		x:
			| {
					icon: string
					url: string
					alt: string
			  }
			| undefined
		github:
			| {
					icon: string
					url: string
					alt: string
			  }
			| undefined
	}
}
