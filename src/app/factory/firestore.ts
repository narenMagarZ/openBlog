import { collection, Firestore, getDocs, addDoc, getDoc, doc } from "firebase/firestore";
import { FirebaseServiceOperationInterface, InputPostInterface, PostInterface } from "../interfaces";

export class FirebaseFirestore implements FirebaseServiceOperationInterface<InputPostInterface, PostInterface> {
  public constructor(private db: Firestore) {}

  public async write(input: Partial<InputPostInterface>) {
    try {
      await addDoc(collection(this.db, "posts"), input);
    } catch (error: any) {
      console.error("Error writing data to firestore", error.message);
      throw error;
    }
  }

  public async read(): Promise<PostInterface[]> {
    try {
      const querySnapshot = await getDocs(collection(this.db, "posts"));
      return querySnapshot.docs.map<PostInterface>(doc => doc.data() as PostInterface);
    } catch (error: any) {
      console.error("Error reading data from firestore", error.message);
      throw error;
    }
  }

  public async update() {}

  public async delete() {}

  public async getPostCounter(): Promise<number> {
    const querySnapshot = await getDocs(collection(this.db, "postCounter")),
    result = querySnapshot.docs.map<{value: number}>(doc => doc.data() as {value: number});
    return result[0].value;
  }

}