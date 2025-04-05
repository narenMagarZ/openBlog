import { EditorEngineModuleInterface, EditorEngineModuleReturnInterface } from "@/app/interfaces";

export class OrderListModule implements EditorEngineModuleInterface {
  edit(): EditorEngineModuleReturnInterface{
    return { cursorPosition: 0, content: "" };
  }
}