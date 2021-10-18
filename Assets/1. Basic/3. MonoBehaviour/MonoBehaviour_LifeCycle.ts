
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export  default  class  Sample_MonoBehaviourLifeCycle extends  ZepetoScriptBehaviour{

    // All Unity MonoBehaviour events are available.
    // https://docs.unity3d.com/ScriptReference/MonoBehaviour.html
    /*
    Awake() { }
    OnEnable() { }
    Start() { }
    Update() { }
    ...
    */
    Awake() {
        console.log('Awake.');
    }
    OnEnable() {
        console.log('OnEnable.');
    }
    Start() {
        console.log('Start.');
    }

    Update() {
        console.log('OnUpdate.');
    }
    FixedUpdate() {
        console.log('FixedUpdate.');
    }
    LateUpdate() {
        console.log('LateUpdate.');
    }

    OnDisable() {
        console.log('OnDisable.');
    }
    OnDestroy() {
        console.log('OnDestroy.');
    }

    OnTriggerEnter() {
        console.log('OnTriggerEnter.');
    }
    OnTriggerExit() {
        console.log('OnTriggerExit.');
    }
    OnTriggerStay() {
        console.log('OnTriggerStay.');
    }

    OnTriggerEnter2D() {
        console.log('OnTriggerEnter2D.');
    }
    OnTriggerExit2D() {
        console.log('OnTriggerExit2D.');
    }
    OnTriggerStay2D() {
        console.log('OnTriggerStay2D.');
    }

    OnGUI() {
        console.log('OnGUI.');
    }

    OnApplicationFocus() {
        console.log('OnApplicationFocus.');
    }
    OnApplicationPause() {
        console.log('OnApplicationPause.');
    }
    OnApplicationQuit() {
        console.log('OnApplicationQuit.');
    }
}
