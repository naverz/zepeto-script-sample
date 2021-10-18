import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import {EventTrigger, EventTriggerType} from "UnityEngine.EventSystems";
import {Entry} from "UnityEngine.EventSystems.EventTrigger";

export default class EventTriggerSample extends ZepetoScriptBehaviour {

    Start() {
        var trigger = this.gameObject.GetComponent<EventTrigger>();
 
        // create eventsystem entry
        var entry = new Entry();
 
        // specify event type & delegation
        entry.eventID = EventTriggerType.PointerClick;
        entry.callback.AddListener(() => {
            console.log("click")
        });
 
        // register event entry
        trigger.triggers.Add(entry);
    }
}

