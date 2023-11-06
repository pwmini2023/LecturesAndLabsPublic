import { createContext, useContext } from "react";

const ThemeContext = createContext("light");
const AuthContext = createContext(null);

export default function MyApp() {
	return (
		<AuthContext.Provider value={null}>
			<ThemeContext.Provider value="dark">
				<Form />
			</ThemeContext.Provider>
		</AuthContext.Provider>
	);
}

function Form() {
	return (
		<Panel title="Welcome">
			<Button>Sign up</Button>
			<Button>Log in</Button>
		</Panel>
	);
}

function Panel({ title, children }) {
	const theme = useContext(ThemeContext);
	const auth = useContext(AuthContext);

	const className = "panel-" + theme;
	return (
		<section className={className}>
			<h1>{title}</h1>
			{children}
		</section>
	);
}

function Button({ children }) {
	const theme = useContext(ThemeContext);
	const className = "button-" + theme;
	return <button className={className}>{children}</button>;
}
