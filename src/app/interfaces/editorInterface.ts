export interface EditorInterface {
  style: string;
  slug: string;
}

export interface EditorEngineModuleReturnInterface {
  cursorPosition: { start: number; end: number; };
  content: string;
}

export interface EditorEngineModuleInterface {
  edit: (props: EditorEngineModuleReturnInterface) => EditorEngineModuleReturnInterface;
}