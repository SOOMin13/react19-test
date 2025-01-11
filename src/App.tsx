function App() {
	const metadata = {
		title: 'React Metadata Test',
    link: 'https://react19-test-oxx0lo5c7-soomin13s-projects.vercel.app/yeah.jpg'
	};
	return (
		<>
			<h1>{metadata.title}</h1>
			<title>{metadata.title}</title>
			<meta name='soomin'/>
			<div>
				<h1>React Metadata Test</h1>
				<p>This page demonstrates React 19 metadata functionality.</p>
			</div>
		</>
	);
}

export default App;
