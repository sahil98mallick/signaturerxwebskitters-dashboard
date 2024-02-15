import { useDispatch } from "react-redux";
import type { AppDispatch } from "redux-toolkit/store/store";
// import type { AppDispatch } from "@/reduxtoolkit/store/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;