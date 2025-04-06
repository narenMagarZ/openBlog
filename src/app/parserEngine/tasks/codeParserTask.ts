import { TaskInterface } from "@/app/cor";
import { ParserTaskContextInterface } from "../parserTaskContextInterface";
import { ParserTaskResultInterface } from "../parserTaskResultInterface";

export class CodeParserTask implements TaskInterface<ParserTaskContextInterface, ParserTaskResultInterface> {
  execute(id: string, context: ParserTaskContextInterface) {
    const result = new ParserTaskResultInterface();
    context.content = context.content.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    result.content = context.content;
    return result;
  }
}