import { EditorEngineModuleInterface, EditorEngineModuleReturnInterface } from "@/app/interfaces";

export class BoldModule implements EditorEngineModuleInterface {
  edit({cursorPosition, content}: EditorEngineModuleReturnInterface): EditorEngineModuleReturnInterface {
    const leftContent = content.slice(0, cursorPosition.end),
    rightContent = content.slice(cursorPosition.end, content.length),
    updatedContent = leftContent + '****' + rightContent;
    cursorPosition = { start: leftContent.length + 2, end: leftContent.length + 2 };
    return { cursorPosition: cursorPosition, content: updatedContent };
  }
}