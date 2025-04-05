import { EditorEngineModuleInterface, EditorEngineModuleReturnInterface } from "@/app/interfaces";

export class LinkModule implements EditorEngineModuleInterface {
  edit(): EditorEngineModuleReturnInterface{
    return { cursorPosition: 0, content: "" };
  }
}