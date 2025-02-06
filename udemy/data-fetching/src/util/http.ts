async function get(url: string) {
	const response = await fetch(url);
	console.log("RESPONSE", response);
	if (!response.ok) {
		throw new Error("There is an ERROR while fetching data");
	}

	const data = await response.json()  as unknown;
	return data;
}

export default get;
