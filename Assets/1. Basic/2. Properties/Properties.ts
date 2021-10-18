
import {ZepetoScriptBehaviour} from "ZEPETO.Script";
import {Vector3, GameObject, Transform} from "UnityEngine";

export default class Properties extends ZepetoScriptBehaviour {
    
    public floatValue: float;
    public floatValues: float[];
    
    @NonSerialized()
    public strValue:string;
    
    @HideInInspector()
    public strValue2:string;
    
    public gameOject:GameObject;
    public transformValue:Transform;
    
    // private collider:Collider;
    private vectorValue: Vector3;
    
    Start() 
    {
        console.log(typeof(this.floatValues));
        console.log(`floatValue : ${this.floatValue}`);
        console.log(`strValue : ${this.strValue}`);
        
        console.log(`${this.floatValues.length}`)

        // console.log(`type ${typeof extraComponent}`);
    }

    Update() 
    {
        // rotate cube a
        var transform = this.gameOject.GetComponent<Transform>();
        transform.Rotate(this.vectorValue);

        // rotate cube b
        this.transformValue.Rotate(this.vectorValue);
    }
}
