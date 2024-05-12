export const cleanLinks = (links: string) => {
	return links.split('\n').map((link) => link.trim().replace(/\?.*/, ''))
}
