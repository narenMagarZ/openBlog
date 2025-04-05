import { EditorEngineModuleInterface, EditorEngineModuleReturnInterface } from "@/app/interfaces";

export class UnorderedListModule implements EditorEngineModuleInterface {
  edit(): EditorEngineModuleReturnInterface{
    return { cursorPosition: 0, content: "" };
  }
}