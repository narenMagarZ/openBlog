import { DatabaseReference, ref } from "firebase/database";
import { } from "firebase/firestore";
import { db } from "@/app/config";

class DbRef {
  private static instance: DbRef;
  public refs: DatabaseReference;
  public postCounter: DatabaseReference;
  public posts: DatabaseReference;
  private constructor() {
    const baseRef = "db/3/";
    this.refs = ref(db, baseRef.concat("posts"));
    this.postCounter = ref(db, baseRef.concat("counts"));
    this.posts = ref(db, baseRef.concat("posts"));
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




