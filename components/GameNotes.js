import React, { useContext } from "react";
import { ScrollView, Text } from "react-native";
import SideMenu from "react-native-side-menu";
import { MenuContext } from "../contexts/MenuContext";
import SearchDrawer from "./SearchDrawer";

export default function GameNotes() {
	const { searchBar } = useContext(MenuContext);
	return (
		<SideMenu
			isOpen={searchBar}
			menu={() => <SearchDrawer type="game" useNativeDriver={true} />}
			menuPosition="right"
		>
			<ScrollView>
				<Text>Game Notes</Text>
			</ScrollView>
		</SideMenu>
	);
}
