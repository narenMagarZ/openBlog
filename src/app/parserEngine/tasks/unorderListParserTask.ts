import { TaskInterface } from "@/app/cor";
import { ParserTaskContextInterface } from "../parserTaskContextInterface";
import { ParserTaskResultInterface } from "../parserTaskResultInterface";

export class UnorderListParserTask implements TaskInterface<ParserTaskContextInterface, ParserTaskResultInterface> {
  execute(id: string, context: ParserTaskContextInterface) {
    const result = new ParserTaskResultInterface();
    result.content = context.content;
    return result;
  }
}