import Button from "./components/Button";
import Container from "./components/Container";
// import Input from "./components/Input";

const App = () => {
	return (
		<main>
			{/* <Input type="text" id="name" label="Your Name" />
			<Input type="number" id="age" label="Your Age" /> */}
			{/* <p>
        <Button title="Button" disabled/>
      </p>

      <p>
        <Button href="https://google.com" target="_blank"/>
      </p> */}
			<Container as={Button}>Hello</Container>
		</main>
	);
};
export default App;
