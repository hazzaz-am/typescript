import {
	type ReactNode,
	type ElementType,
	ComponentPropsWithoutRef,
} from "react";

type ComponentProps<T extends ElementType> = {
	as?: T;
	children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Component = <C extends ElementType>({
	as,
	children,
	...props
}: ComponentProps<C>) => {
	const As = as || "div";

	return (
		<As className="btn" {...props}>
			{children}
		</As>
	);
};
export default Component;
