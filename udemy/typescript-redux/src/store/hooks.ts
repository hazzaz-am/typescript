import {
	type TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchAction = () => AppDispatch;

export const useDisPatchAction: DispatchAction = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
