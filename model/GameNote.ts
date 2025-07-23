import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export default class GameNote extends Model {
  static table = "game_notes";

  @field("author_id") authorId!: string;
  @field("shared_with") sharedWith!: string;
  @field("game") game!: string;
  @field("my_character") myCharacter!: string;
  @field("opponent_character") opponentCharacter?: string;
  @field("universal") universal!: boolean;
  @field("filter") filter!: string;
  @field("note") note!: string;
  @field("note_date") noteDate!: number;

  get sharedWithArray() {
    try {
      return JSON.parse(this.sharedWith || "[]");
    } catch {
      return [];
    }
  }

  setSharedWithArray(arr: string[]) {
    this.update((note) => {
      note.sharedWith = JSON.stringify(arr);
    });
  }
}
