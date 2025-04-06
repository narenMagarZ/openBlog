export interface TaskInterface<C, R> {
  execute: (id: string, context: C) => R;
}