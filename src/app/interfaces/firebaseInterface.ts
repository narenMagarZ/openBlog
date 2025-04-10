export interface FirebaseServiceOperationInterface<W,R> {
  write: (input: Partial<W>) => Promise<void>;
  read: () => Promise<R[]>;
  update: () => Promise<void>;
  delete: () => Promise<void>;
  getPostCounter: () => Promise<number>;
}


