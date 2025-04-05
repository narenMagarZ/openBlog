import { DatabaseReference, ref } from "firebase/database";
import { db } from "@/app/config";

class DbRef {
  private static instance: DbRef;
  public refs: DatabaseReference;
  private constructor() {
    this.refs = ref(db, "db/3/posts");
  }
  static get() {
    if(!DbRef.instance) {
      DbRef.instance = new DbRef();
    }
    return DbRef.instance;
  }
}

const dbRef = DbRef.get();

export { dbRef as DbRef }
