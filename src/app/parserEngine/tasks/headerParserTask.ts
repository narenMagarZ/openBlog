import { TaskInterface } from "@/app/cor";
import { ParserTaskContextInterface } from "../parserTaskContextInterface";
import { ParserTaskResultInterface } from "../parserTaskResultInterface";

export class HeaderParserTask implements TaskInterface<ParserTaskContextInterface, ParserTaskResultInterface> {
  execute(id: string, context: ParserTaskContextInterface) {
    const result = new ParserTaskResultInterface();
    context.content = context.content.replace(/^#{6}\s+(.*$)/gm, '<h6>$1</h6>');
    context.content = context.content.replace(/^#{5}\s+(.*$)/gm, '<h5>$1</h5>');
    context.content = context.content.replace(/^#{4}\s+(.*$)/gm, '<h4>$1</h4>');
    context.content = context.content.replace(/^#{3}\s+(.*$)/gm, '<h3>$1</h3>');
    context.content = context.content.replace(/^#{2}\s+(.*$)/gm, '<h2>$1</h2>');
    context.content = context.content.replace(/^#\s+(.*$)/gm, '<h1>$1</h1>');
    result.content = context.content;
    return result;
  }
}