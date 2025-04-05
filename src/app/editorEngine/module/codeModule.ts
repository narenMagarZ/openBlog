import { EditorEngineModuleInterface, EditorEngineModuleReturnInterface } from "@/app/interfaces";

export class CodeModule implements EditorEngineModuleInterface {
  edit({cursorPosition, content}: EditorEngineModuleReturnInterface): EditorEngineModuleReturnInterface {
    const leftContent = content.slice(0, cursorPosition.end),
    rightContent = content.slice(cursorPosition.end, content.length),
    updatedContent = leftContent + '```\n\n```' + rightContent;
    cursorPosition = { start: leftContent.length + 4, end: leftContent.length + 4 };
    return { cursorPosition: cursorPosition, content: updatedContent };
  }
}