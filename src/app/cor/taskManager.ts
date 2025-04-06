import { TaskInterface } from "./taskInterface";

export class TaskManager<C, R> {
  private tasks: TaskInterface<C, R>[];
  constructor() {
    this.tasks = [];
  }

  public registerTasks(tasks: TaskInterface<C, R>[]) {
    this.tasks = tasks;
  }

  public execute(id: string, context: C): R {
    let result: R;
    for(const index in this.tasks) {
      result = this.tasks[index].execute(id, context);
    }
    // @ts-ignore
    return result;
  }
}


