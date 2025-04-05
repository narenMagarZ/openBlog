import { EditorEngineModuleInterface, EditorEngineModuleReturnInterface } from "@/app/interfaces";

export class HeaderModule implements EditorEngineModuleInterface {
  edit(): EditorEngineModuleReturnInterface{
    return { cursorPosition: 0, content: "" };
  }
}