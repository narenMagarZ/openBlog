import { EditorEngineModuleEnum } from "../enums/editorEnum";
import { EditorEngineModuleReturnInterface } from "../interfaces";
import { 
  BoldModule, 
  CodeModule, 
  HeaderModule, 
  ImageModule, 
  ItalicModule, 
  LinkModule, 
  OrderListModule, 
  UnorderedListModule } from "./module";

export class EditorEngineDelegator {
  private engine: any;
  constructor(module: EditorEngineModuleEnum) {
    this.setEditorEngine(module);
  }

  private setEditorEngine(module: EditorEngineModuleEnum) {
    switch(module) {
      case EditorEngineModuleEnum.bold:
        this.engine = new BoldModule();
        break;
      case EditorEngineModuleEnum.italic: 
        this.engine = new ItalicModule();
        break;
      case EditorEngineModuleEnum.code:
        this.engine = new CodeModule();
        break;
      case EditorEngineModuleEnum.header:
        this.engine = new HeaderModule();
        break;
      case EditorEngineModuleEnum.link:
        this.engine = new LinkModule();
        break;
      case EditorEngineModuleEnum.image:
        this.engine = new ImageModule();
        break;
      case EditorEngineModuleEnum.orderList:
        this.engine = new OrderListModule();
        break;
      case EditorEngineModuleEnum.unorderList:
        this.engine = new UnorderedListModule();
        break;
      default:
        throw new Error("Invalid editor engine module.");
    }  
  }

  public edit(props: EditorEngineModuleReturnInterface): EditorEngineModuleReturnInterface {
    return this.engine.edit(props);
  }
}
