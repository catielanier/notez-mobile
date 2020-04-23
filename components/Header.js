import React from "react";
import { Appbar } from "react-native-paper";

function Header(props) {
  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" />
      <Appbar.Content
        title="NoteZ"
        subtitle="The FGC note app"
        color="#ffffff"
      />
      <Appbar.Action icon="login" />
      <Appbar.Action icon="account-plus" />
    </Appbar.Header>
  );
}

export default Header;
