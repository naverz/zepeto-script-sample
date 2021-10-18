import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class ExtraComponent extends ZepetoScriptBehaviour {
    
    public stringProperty: string;
    
    private message: string;
    private count: int;
    
    Start() {
        this.message = "Hi zepeto!";
        this.count = 0;
    }
    
    Update() {
        this.stringProperty = `${this.message} : ${this.count++}`;
    }
    
    GetCount() {
        return this.count;
    }
    
    SetCount(newCount:int) {
        this.count = newCount;
    }

}