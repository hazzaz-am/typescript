import "./Container.css";

import {
	type ReactNode,
	type ElementType,
	ComponentPropsWithoutRef,
} from "react";

type ContainerProps<T extends ElementType> = {
	as?: T;
	children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Container = <C extends ElementType>({
	as,
	children,
	...props
}: ContainerProps<C>) => {
	const Component = as || "div";
	return (
		<Component className="btn" {...props}>
			{children}
		</Component>
	);
};
export default Container;
