import { createContext, ReactElement, useEffect, useState } from "react";

export type ProductType = {
	sku: string;
	name: string;
	price: number;
};

const initialState: ProductType[] = [];

export type UseProductsContextType = { products: ProductType[] };

const initialContextState: UseProductsContextType = { products: [] };

const ProductsContext =
	createContext<UseProductsContextType>(initialContextState);

type ChildrenType = {
	children?: ReactElement | ReactElement[];
};

export const ProductsProvider = ({ children }: ChildrenType) => {
	const [products, setProducts] = useState<ProductType[]>(initialState);

	useEffect(() => {
		const fetchProducts = async (): Promise<ProductType[]> => {
			const data = await fetch("http://localhost:3500/products")
				.then((res) => res.json())
				.catch((err) => {
					if (err instanceof Error) {
						console.log(err.message);
					}
				});

			return data;
		};

		fetchProducts().then((products) => setProducts(products));
	}, []);
	return (
		<ProductsContext.Provider value={{ products }}>
			{children}
		</ProductsContext.Provider>
	);
};
