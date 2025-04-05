import { EditorEngineModuleInterface, EditorEngineModuleReturnInterface } from "@/app/interfaces";

export class BoldModule implements EditorEngineModuleInterface {
  edit({cursorPosition, content}: EditorEngineModuleReturnInterface): EditorEngineModuleReturnInterface{
    console.log(cursorPosition, content)
    const updatedContent = content + '****';
    return { cursorPosition: 0, content: updatedContent };
  }
}