import {ZepetoScriptBehaviour} from "ZEPETO.Script";
import {Text} from "UnityEngine.UI";

// import custom script from path
import ExtraComponent from "./lib/ExtraComponent"

export default class Properties extends ZepetoScriptBehaviour {
    
    public resultUi:Text;
    private extComponent:ExtraComponent;
    
    Start() 
    {
        // add script component
        this.gameObject.AddComponent<ExtraComponent>();
        this.extComponent = this.gameObject.GetComponent<ExtraComponent>();
    }
   
    Update() 
    {
        // get value by method call
        var count = this.extComponent.GetCount();
        
        if(count > 10)
        {
            // set value by method call 
            this.extComponent.SetCount(0);
        }
        
        // get public property
        var resultString = this.extComponent.stringProperty;
        
        // print result
        console.log(`result : ${resultString}`);
        this.resultUi.text = resultString;
    }
}
