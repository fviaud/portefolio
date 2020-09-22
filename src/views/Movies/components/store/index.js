import { injectReducer } from "store";
import { moviesReducer } from "./reducers";

injectReducer("movies", moviesReducer);
