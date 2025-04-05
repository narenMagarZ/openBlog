import { EditorEngineModuleInterface, EditorEngineModuleReturnInterface } from "@/app/interfaces";

export class ImageModule implements EditorEngineModuleInterface {
  edit({cursorPosition, content}: EditorEngineModuleReturnInterface): EditorEngineModuleReturnInterface{
    const leftContent = content.slice(0, cursorPosition.end),
    rightContent = content.slice(cursorPosition.end, content.length),
    updatedContent = leftContent + '## ' + rightContent;
    cursorPosition = { start: leftContent.length + 3, end: leftContent.length + 3 };
    return { cursorPosition: cursorPosition, content: updatedContent };
  }
}