import { TaskInterface } from "@/app/cor";
import { ParserTaskContextInterface } from "../parserTaskContextInterface";
import { ParserTaskResultInterface } from "../parserTaskResultInterface";

export class LinkParserTask implements TaskInterface<ParserTaskContextInterface, ParserTaskResultInterface> {
  execute(id: string, context: ParserTaskContextInterface) {
    const result = new ParserTaskResultInterface();
    context.content = context.content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    result.content = context.content;
    return result;
  }
}