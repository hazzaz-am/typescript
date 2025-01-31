import { createContext, ReactElement, useMemo, useReducer } from "react";
import { ChildrenType } from "./ProductsProvider";

export type CartItemType = {
	sku: string;
	name: string;
	price: number;
	qty: number;
};

type CartStateType = { cart: CartItemType[] };

const initCartState: CartStateType = { cart: [] };

const REDUCER_ACTION_TYPE = {
	ADD: "ADD",
	REMOVE: "REMOVE",
	QUANTITY: "QUANTITY",
	SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
	type: string;
	payload?: CartItemType;
};

const reducer = (
	state: CartStateType,
	action: ReducerAction
): CartStateType => {
	switch (action.type) {
		case REDUCER_ACTION_TYPE.ADD: {
			if (!action.payload) {
				throw new Error("Payload missing in Add");
			}

			const { sku, name, price } = action.payload;
			const filteredCarts: CartItemType[] = state.cart.filter(
				(item) => item.sku !== sku
			);

			const isExistingItem: CartItemType | undefined = state.cart.find(
				(item) => item.sku === sku
			);

			const qty: number = isExistingItem ? isExistingItem.qty + 1 : 1;

			return { ...state, cart: [...filteredCarts, { sku, name, price, qty }] };
		}

		case REDUCER_ACTION_TYPE.REMOVE: {
			if (!action.payload) {
				throw new Error("Payload missing in remove");
			}

			const { sku } = action.payload;
			const filteredCarts: CartItemType[] = state.cart.filter(
				(item) => item.sku !== sku
			);

			return { ...state, cart: [...filteredCarts] };
		}

		case REDUCER_ACTION_TYPE.QUANTITY: {
			if (!action.payload) {
				throw new Error("Payload missing in quantity");
			}

			const { sku, qty } = action.payload;
			const filteredCarts: CartItemType[] = state.cart.filter(
				(item) => item.sku !== sku
			);

			const isExistingItem: CartItemType | undefined = state.cart.find(
				(item) => item.sku === sku
			);

			if (!isExistingItem) {
				throw new Error("Item must be exist to update");
			}

			const updatedItem: CartItemType = { ...isExistingItem, qty };

			return { ...state, cart: [...filteredCarts, updatedItem] };
		}

		case REDUCER_ACTION_TYPE.SUBMIT: {
			return { ...state, cart: [] };
		}

		default:
			throw new Error("Unidentified Action Type");
	}
};

const useCartContext = (initCartState: CartStateType) => {
	const [state, dispatch] = useReducer(reducer, initCartState);

	const REDUCER_ACTIONS = useMemo(() => {
		return REDUCER_ACTION_TYPE;
	}, []);

	const totalItems = state.cart.reduce((prevValue, cartItem) => {
		return prevValue + cartItem.qty;
	}, 0);

	const totalPrice = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(
		state.cart.reduce((prevValue, cartItem) => {
			return prevValue + cartItem.qty * cartItem.price;
		}, 0)
	);

	const cart = state.cart.sort((a, b) => {
		const itemA = Number(a.sku.slice(-4));
		const itemB = Number(b.sku.slice(-4));

		return itemA - itemB;
	});

	return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextType: UseCartContextType = {
	dispatch: () => {},
	cart: [],
	REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
	totalItems: 0,
	totalPrice: "",
};

export const CartContext =
	createContext<UseCartContextType>(initCartContextType);

const CartProvider = ({ children }: ChildrenType): ReactElement => {
	return (
		<CartContext.Provider value={useCartContext(initCartState)}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
