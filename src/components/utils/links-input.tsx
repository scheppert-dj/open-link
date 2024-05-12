import type { FC } from 'react'
import { storeLinksFromText } from '../../stores/links-store'

export const LinksInput: FC = () => {
	return (
		<>
			<label htmlFor="links" className="text-md mb-2 block font-bold text-white">
				Link Inputs
			</label>
			<textarea
				id="links"
				className="block min-h-96 w-full overflow-hidden rounded-lg border border-gray-600 bg-gray-700 p-2 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
				placeholder="Enter your links here"
				onInput={(e) => storeLinksFromText(e.currentTarget.value)}
			></textarea>
		</>
	)
}
