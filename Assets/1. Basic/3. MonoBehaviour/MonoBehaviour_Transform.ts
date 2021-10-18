
/* 
@name ###NAME###
@property float floatValue
@property string stringValue
@property UnityEngine.Transform transformValue
@description this is custom description. float : <color=#00FF00>{{floatValue}}</color>.
*/
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export  default  class  MonoBehaviour_Transform extends  ZepetoScriptBehaviour
{
    // All Unity MonoBehaviour events are available.
    // https://docs.unity3d.com/ScriptReference/MonoBehaviour.html
    /*
    Awake() { }
    Start() { }
    OnEnable() { }
    Update() { }
    */

    Start() {
        console.warn(`My name is ${this.gameObject.name}`);
    }

    Update() {
        this.transform.Rotate(0, 1, 0);
    }
}
