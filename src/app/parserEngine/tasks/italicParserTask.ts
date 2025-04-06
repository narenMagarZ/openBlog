import { TaskInterface } from "@/app/cor";
import { ParserTaskContextInterface } from "../parserTaskContextInterface";
import { ParserTaskResultInterface } from "../parserTaskResultInterface";

export class ItalicParserTask implements TaskInterface<ParserTaskContextInterface, ParserTaskResultInterface> {
  execute(id: string, context: ParserTaskContextInterface) {
    const result = new ParserTaskResultInterface();
    context.content = context.content.replace(/_([^_]+)_/g, '<em>$1</em>');
    result.content = context.content;
    return result;
  }
}