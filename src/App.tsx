'use client';

export const metadata = {
	title: 'React Metadata Test',
	description: 'A test page for React 19 metadata functionality.',
	openGraph: {
		title: 'React Metadata Test',
		description: 'This is an example to test metadata in React 19.',
		url: 'react19-test.vercel.app', // Vercel 배포 후 업데이트
		images: [
			{
				url: 'https://your-vercel-domain.vercel.app/og-image.png', // Vercel에 배포한 이미지 URL
				alt: 'React Metadata Example Image',
			},
		],
	},
};

function App() {
	return (
		<div>
			<h1>React Metadata Test</h1>
			<p>This page demonstrates React 19 metadata functionality.</p>
		</div>
	);
}

export default App;
