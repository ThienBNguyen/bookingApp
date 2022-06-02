import { useReducer } from 'react';

const INITIAL_STATE = {
	city: undefined,
	datas: [],
	options: {
		adult: undefined,
		children: undefined,
		room: undefined
	}
};
export const SerachContext = createContect(INITIAL_STATE);
const SearchReducer = (state, option) => {
	switch (action.type) {
		case 'NEW_SEARCH':
			return action.payload;
		case 'RESET_SEARCH':
			return INITIAL_STATE;
		default:
			return state;
	}
};
// export const SearchContextProvider = ({children}) = {
//     const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
//     return (
//         <SerachContext.Provider
//         />
//     )
// };
