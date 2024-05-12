import { atom } from 'nanostores'

export const linksStore = atom<string[]>([])

export const storeLinksFromText = (text: string) => {
	const rawLinks = text.split('\n')

	const links = rawLinks
		.map((link) => link.trim().replace(/\?.*/, ''))
		.filter((link) => link.length > 0)

	linksStore.set(links)
}
