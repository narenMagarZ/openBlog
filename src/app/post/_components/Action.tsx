import { EditorEngineModuleEnum } from "@/app/enums/editorEnum";
import { EditorEngineDelegator } from "@/app/editorEngine";

interface ActionInterface {
  currentCursorPosition: number;
  content: string;
  newCursorPosition?: number;
  setContent: (content: string) => void;
}

export function Action({ currentCursorPosition, content, setContent}: ActionInterface) {
  const engineModules: EditorEngineModuleEnum[] = [
    EditorEngineModuleEnum.bold, 
    EditorEngineModuleEnum.italic, 
    EditorEngineModuleEnum.link, 
    EditorEngineModuleEnum.header, 
    EditorEngineModuleEnum.code,
    EditorEngineModuleEnum.orderList,
    EditorEngineModuleEnum.unorderList,
    EditorEngineModuleEnum.image
  ];

  function handleActionClick(module: EditorEngineModuleEnum) {
    const engine = new EditorEngineDelegator(module);
    const { cursorPosition, content: updatedContent } = engine.edit({cursorPosition: currentCursorPosition, content: content});
    setContent(updatedContent);
    currentCursorPosition = cursorPosition;
  }
  
  return (
    <div className="">
      <div className="flex text-xs items-center gap-2 rounded bg-[#e5e5e5] p-2">
         {
          engineModules.map((module, index) => (
            <button onClick={() => handleActionClick(module)} key={index} className="cursor-pointer hover:bg-[#eeeeee] px-2 py-1 rounded">{module.charAt(0).toLocaleUpperCase() + module.slice(1)}</button>
          ))
         }
      </div>
    </div>
  )
}