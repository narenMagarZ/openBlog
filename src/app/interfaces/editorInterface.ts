export interface EditorInterface {
  style: string;
  slug: string;
}

export interface EditorEngineModuleReturnInterface {
  cursorPosition: number;
  content: string;
}

export interface EditorEngineModuleInterface {
  edit: (props: EditorEngineModuleReturnInterface) => EditorEngineModuleReturnInterface;
}