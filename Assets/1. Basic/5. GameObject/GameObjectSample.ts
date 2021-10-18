import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import {GameObject, Object,Transform,Animator, Light} from "UnityEngine";

export default class GameObjectSample extends ZepetoScriptBehaviour{
    Start(){
        //GameObject Create
        var tempObj = new GameObject();
        var obj = Object.Instantiate(tempObj);

        //GameObject Destroy
        Object.Destroy(obj);

        // GetComponent with Generic
        var myTransform = this.GetComponent<Transform>();

        // AddComponent with Generic
        var animator = this.gameObject.AddComponent<Animator>();


        var lightComponent = this.gameObject.AddComponent<Light>();

        // // Add Component CLR Type Access
        // var Light = $typeof("UnityEngine.Light");
        // var lightComponent = this.gameObject.AddComponent<typeof Light>();        

        // Get Component CLR Type Access
        // lightComponent = this.gameObject.GetComponent<typeof Light>();
    }
}