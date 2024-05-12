import { useState, type FC } from 'react'
import { linksStore } from '../../stores/links-store'
import { useStore } from '@nanostores/react'

const isExternalLink = (link: string) => {
	return link.startsWith('http')
}

const CopyButton: FC<{ link: string }> = ({ link }) => {
	const [copyText, setCopyText] = useState('Copy Link')
	const copyToClipboard = (value: string) => {
		navigator.clipboard.writeText(value)
		setCopyText('Copied!')
		setTimeout(() => {
			setCopyText('Copy Link')
		}, 1000)
	}

	return (
		<button
			className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
			onClick={() => copyToClipboard(link)}
		>
			{copyText}
		</button>
	)
}

export const LinksOutput: FC = () => {
	const $linksStore = useStore(linksStore)

	return (
		<>
			<p className="text-md mb-2 block text-sm font-bold text-white">Link Outputs</p>
			<div
				id="results"
				className="placeholder-gray-400focus:border-blue-500 gap flex h-full w-full flex-col gap-4 text-nowrap rounded-lg border border-gray-600 bg-gray-700 p-2 text-sm text-white focus:ring-blue-500 "
			>
				{$linksStore.map((link) => (
					<div key={link} className="flex w-full max-w-full flex-row items-center gap-2">
						{isExternalLink(link) ? (
							<a
								href={link}
								className="w-full overflow-hidden truncate whitespace-nowrap text-blue-500 hover:text-blue-600"
							>
								{link}
							</a>
						) : (
							<span className="w-full overflow-hidden truncate whitespace-nowrap text-blue-500 hover:text-blue-600">
								{link}
							</span>
						)}
						<CopyButton link={link} />
					</div>
				))}
			</div>
		</>
	)
}
