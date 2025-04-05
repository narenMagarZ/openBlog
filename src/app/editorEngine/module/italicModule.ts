import { EditorEngineModuleInterface, EditorEngineModuleReturnInterface } from "@/app/interfaces";

export class ItalicModule implements EditorEngineModuleInterface {
  edit({cursorPosition, content}: EditorEngineModuleReturnInterface): EditorEngineModuleReturnInterface {
    const leftContent = content.slice(0, cursorPosition.end),
    rightContent = content.slice(cursorPosition.end, content.length),
    updatedContent = leftContent + '__' + rightContent;
    cursorPosition = { start: leftContent.length + 1, end: leftContent.length + 1 };
    return { cursorPosition: cursorPosition, content: updatedContent };
  }
  
}