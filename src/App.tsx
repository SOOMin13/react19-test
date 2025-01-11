'use client';

export const metadata = {
	title: 'React Metadata Test',
	description: '리액트 19 메타데이터 기능을 테스트합니다.',
	openGraph: {
		title: 'React Metadata Test',
		description: '리액트 메타데이터 테스트.',
		url: 'react19-test.vercel.app', // Vercel 배포 후 업데이트
		images: [
			{
				url: 'https://react19-test.vercel.app/yeah.jpg', // Vercel에 배포한 이미지 URL
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
