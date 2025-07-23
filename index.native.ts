import { Platform } from "react-native";
import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import schema from "./model/schema";
import migrations from "./model/migrations";

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  onSetUpError: (e) => {
    console.error(e);
  },
});

const database = new Database({
  adapter,
  modelClasses: [],
});
