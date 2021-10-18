import {ZepetoScriptBehaviour} from "ZEPETO.Script";
import {WaitForSeconds} from "UnityEngine";
export default class Coroutine extends ZepetoScriptBehaviour {
    private curent: number;
    Start()
    {
        this.curent = 0;
        console.log(`start routine`);
        this.StartCoroutine(this.DoRoutine());
    }

    *DoRoutine() {
        while(true) {
            console.log(`[${this.curent++}] Wait to next routine..`);
            yield new WaitForSeconds(1);
        }
    }
}
