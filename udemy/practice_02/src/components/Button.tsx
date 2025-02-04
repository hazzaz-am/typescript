import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
	href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
	href?: string;
};

const isAnchorElem = (
	props: ButtonProps | AnchorProps
): props is AnchorProps => {
	return "href" in props;
};

const Button = (props: ButtonProps | AnchorProps) => {
	if (isAnchorElem(props)) {
		return <a className="button" {...props} />;
	}

	return <button className="button" {...props} />;
};
export default Button;
