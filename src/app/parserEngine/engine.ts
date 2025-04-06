import { TaskManager } from "../cor";
import { ParserTaskContextInterface } from "./parserTaskContextInterface";
import { ParserTaskResultInterface } from "./parserTaskResultInterface";
import { BoldParserTask, CodeParserTask, HeaderParserTask, ItalicParserTask, LinkParserTask, OrderListParserTask, UnorderListParserTask } from "./tasks";

const boldParserTask = new BoldParserTask(),
codeParserTask = new CodeParserTask(),
headerParserTask = new HeaderParserTask(),
italicParserTask = new ItalicParserTask(),
orderListParserTask = new OrderListParserTask(),
unorderListParserTask = new UnorderListParserTask(),
linkParserTask = new LinkParserTask();


export class ParserEngine {
  private taskManager: TaskManager<ParserTaskContextInterface, ParserTaskResultInterface>;

  public constructor() {
    this.taskManager = new TaskManager();
  }

  public registerTasks() {
    this.taskManager.registerTasks([
      boldParserTask, 
      codeParserTask, 
      headerParserTask, 
      italicParserTask, 
      orderListParserTask, 
      unorderListParserTask, 
      linkParserTask
    ]);
  }

  public executeTasks(id: string, context: ParserTaskContextInterface): ParserTaskResultInterface {
    return this.taskManager.execute(id, context);
  }
}