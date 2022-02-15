import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import {Slider,InputField,Button} from "UnityEngine.UI";

export default class UI_Event extends ZepetoScriptBehaviour {

    public sliderUI:Slider;
    public btnUI:Button;

    Start(){
        this.btnUI.onClick.AddListener(()=>{
            // add button click event
            console.log('btnUI onClick');
        });
        this.sliderUI.onValueChanged.AddListener( (v) => {
            // add slider event
            console.log(`[${v}] sliderUI onValueChanged`);
        });
    }
}