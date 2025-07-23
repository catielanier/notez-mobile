import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export default class PlayerNote extends Model {
  static table = "player_notes";

  @field("author_id") authorId!: string;
  @field("shared_with") sharedWith!: string;
  @field("game") game!: string;
  @field("player") player!: string;
  @field("filter") filter!: string;
  @field("note") note!: string;
  @field("note_date") noteDate!: number;

  get sharedWithArray(): string[] {
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
