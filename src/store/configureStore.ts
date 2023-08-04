import { legacy_createStore as createStore } from "redux";

import rootReducer from "./reducers";

const configureStore = (): any => createStore(rootReducer);

export default configureStore;
