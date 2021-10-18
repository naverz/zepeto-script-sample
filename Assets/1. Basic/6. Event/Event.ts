import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import {UnityEvent} from "UnityEngine.Events";

export default class Event extends ZepetoScriptBehaviour {
    private mEvent:UnityEvent;

    Start() {    
        this.mEvent = new UnityEvent();
        this.mEvent.AddListener( ()=> this.Ping() );
    }

    Update() {
        if(this.mEvent != null) {
            this.mEvent.Invoke();
        }
    }
     
    Ping(){
        console.log('Ping');
    }

}