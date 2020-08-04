import React, { useState, createContext } from "react";

export const MenuContext = createContext();

const MenuContextProvider = (props) => {
	const [searchBar, openSearchBar] = useState(false);

	const showSearchBar = () => {
		openSearchBar(!searchBar);
	};

	return (
		<MenuContext.Provider value={{ searchBar, showSearchBar }}>
			{props.children}
		</MenuContext.Provider>
	);
};

export default MenuContextProvider;
