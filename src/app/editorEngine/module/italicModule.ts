import { EditorEngineModuleInterface, EditorEngineModuleReturnInterface } from "@/app/interfaces";

export class ItalicModule implements EditorEngineModuleInterface {
  edit(): EditorEngineModuleReturnInterface{
    return { cursorPosition: 0, content: "" };
  }
  
}