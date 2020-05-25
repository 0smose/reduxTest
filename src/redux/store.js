import {createStore} from 'redux';
import { pastasReducer } from './pastas/pastasReducer';

const store = createStore(pastasReducer);

export default store;