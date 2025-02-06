import { ReactNode, useEffect, useState } from "react";
import get from "./util/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import fetchingImg from "../src/assets/data-fetching.png";
import ErrorMessage from "./components/ErrorMessage";

type RawBlogPost = {
	id: number;
	title: string;
	body: string;
	userId: number;
};

function App() {
	const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>([]);
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState<string>();

	useEffect(() => {
		async function fetchdData() {
			setIsFetching(true);
			try {
				const data = (await get(
					"https://jsonplaceholder.typicode.com/posts"
				)) as RawBlogPost[];

				const blogsData: BlogPost[] = data.map((blog) => ({
					id: blog.id,
					title: blog.title,
					text: blog.body,
				}));
				setFetchedPosts(blogsData);
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message);
				}
			}
			setIsFetching(false);
		}

		fetchdData();
	}, []);

	let content: ReactNode;

	if (isFetching) {
		content = <p className="loading-fallback">Loading...</p>;
	} else if (error) {
		content = <ErrorMessage text={error} />;
	} else if (fetchedPosts.length > 0) {
		content = <BlogPosts posts={fetchedPosts} />;
	}

	return (
		<main>
			<img src={fetchingImg} alt="A Fetch Img" />
			{content}
		</main>
	);
}

export default App;
