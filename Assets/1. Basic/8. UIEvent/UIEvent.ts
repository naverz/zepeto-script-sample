
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import {GameObject, Transform, Quaternion, Vector3, Object} from "UnityEngine";
import {Button, InputField, Slider} from "UnityEngine.UI";

export  default  class  UIEvent extends  ZepetoScriptBehaviour{
    //Slider Code
    public cubeTransform:Transform;
    public sliderUI:Slider;

    //InputField & Button Code
    public cubePrefab:GameObject;
    public inputFieldUI:InputField;
    public createBtn:Button;
    public deleteBtn:Button;
    public cubeArray:Object[];
    
    Start(){
        //Slider Code
        this.sliderUI.maxValue = 180;
        this.sliderUI.onValueChanged.AddListener( (v) => {
            this.cubeTransform.rotation = Quaternion.Euler(0, v, 0);
        });
        
        //InputField & Button Code
        this.cubeArray = [];
        this.createBtn.onClick.AddListener(()=>{
            this.CubeCreate();
        });
        this.deleteBtn.onClick.AddListener(()=>{
            this.CubeDeleteAll();
        });
    }

    CubeCreate(){
        var createCnt = Number(this.inputFieldUI.text);

        //Exception handling
        if(isNaN(createCnt) ||
            createCnt == 0) {
            return;
        }

        //Delete Cube
        this.CubeDeleteAll();

        //Create Cube
        for (var i = 0; i < createCnt; ++i)
        {
            var cubeObj = GameObject.Instantiate(this.cubePrefab, new Vector3(i * 1.5, -3.5, 0), Quaternion.identity);
            this.cubeArray.push(cubeObj);
        }
    }

    CubeDeleteAll(){
        //Delete Cube
        for (var i = 0; i < this.cubeArray.length; ++i) {
            GameObject.Destroy(this.cubeArray[i]);
        }
        this.cubeArray = [];
    }
}