import { configureStore } from "@reduxjs/toolkit";
// import tokenReducer from "../slices/token";
import authenticateReducer from "../slices/authenticateornot";
// import cartReducer from "../slices/cart";
import { loadState, saveState } from "../utils/localstorage";

const preloadedData = loadState();

export const store = configureStore({
  reducer: {
    authenticatedornot: authenticateReducer,
  },
  preloadedState: preloadedData,
});

store.subscribe(() => {
  saveState({
    authenticatedornot: store.getState().authenticatedornot,
  });
});

// export const useAppDispatch = () => useDispatch();
// export const useAppSelector = (selector) => useSelector(selector);
