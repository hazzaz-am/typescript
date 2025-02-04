// import Button from "./components/Button";
// import Container from "./components/Container";
import Input from "./components/Input";
import Form, { FormHandle } from "./components/Form";
import Button from "./components/Button";
import { useRef } from "react";

const App = () => {
	const ref = useRef<FormHandle>(null);

	const handleSave = (data: unknown) => {
		const extractedData = data as {
			name: string;
			age: string;
		};
		ref.current?.clear();

		console.log(extractedData);
	};

	return (
		<main>
			<Form onSave={handleSave} ref={ref}>
				<Input type="text" id="name" label="Your Name" />
				<Input type="number" id="age" label="Your Age" />
				<p>
					<Button>Save</Button>
				</p>
			</Form>
			{/* <p>
        <Button title="Button" disabled/>
      </p>

      <p>
        <Button href="https://google.com" target="_blank"/>
      </p> */}
			{/* <Container as={Button} type="button" title="Hello">
				Hello
			</Container> */}
		</main>
	);
};
export default App;
