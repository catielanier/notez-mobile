import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "game_notes",
      columns: [
        { name: "author_id", type: "string" }, // reference to User._id
        { name: "shared_with", type: "string", isOptional: true }, // JSON-encoded array
        { name: "game", type: "string" },
        { name: "my_character", type: "string" },
        { name: "opponent_character", type: "string", isOptional: true },
        { name: "universal", type: "boolean" },
        { name: "filter", type: "string" },
        { name: "note", type: "string" },
        { name: "note_date", type: "number" }, // timestamp
      ],
    }),
    tableSchema({
      name: "player_notes",
      columns: [
        { name: "author_id", type: "string" },
        { name: "shared_with", type: "string", isOptional: true }, // JSON string of user IDs
        { name: "game", type: "string" },
        { name: "player", type: "string" },
        { name: "filter", type: "string" },
        { name: "note", type: "string" },
        { name: "note_date", type: "number" }, // timestamp
      ],
    }),
  ],
});
