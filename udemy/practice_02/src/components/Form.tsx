import {
	type FormEvent,
	type ComponentPropsWithoutRef,
	useImperativeHandle,
	useRef,
	forwardRef,
} from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
	onSave: (value: unknown) => void;
};

export type FormHandle = {
	clear: () => void;
};

const Form = forwardRef<FormHandle, FormProps>(
	({ onSave, ...otherProps }, ref) => {
		const formRef = useRef<HTMLFormElement>(null);

		const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();

			const formData = new FormData(event.currentTarget);
			const data = Object.fromEntries(formData);
			onSave(data);
		};

		useImperativeHandle(ref, () => {
			return {
				clear() {
          console.log("CLEARING");
					formRef.current?.reset();
				},
			};
		});

		return <form onSubmit={handleFormSubmit} {...otherProps} ref={formRef} />;
	}
);
export default Form;
