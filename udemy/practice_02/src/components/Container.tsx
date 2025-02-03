import { type ReactNode, type ElementType } from "react";

type ContainerProps = {
	as: ElementType;
	children: ReactNode;
};

const Container = ({ as, children }: ContainerProps) => {
	const Component = as;
	return <Component>{children}</Component>;
};
export default Container;
