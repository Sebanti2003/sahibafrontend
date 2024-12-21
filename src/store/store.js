import { configureStore } from "@reduxjs/toolkit";
// import tokenReducer from "../slices/token";
import authenticateReducer from "../slices/authenticateornot";
import slider from '../slices/sidebar'
// import cartReducer from "../slices/cart";
import { loadState, saveState } from "../utils/localstorage";

const preloadedData = loadState();

export const store = configureStore({
  reducer: {
    authenticatedornot: authenticateReducer,
    slider: slider
  },
  preloadedState: preloadedData,
});

store.subscribe(() => {
  saveState({
    slider:store.getState().slider,
    authenticatedornot: store.getState().authenticatedornot,
  });
});

// export const useAppDispatch = () => useDispatch();
// export const useAppSelector = (selector) => useSelector(selector);
