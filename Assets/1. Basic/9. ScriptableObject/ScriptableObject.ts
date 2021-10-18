import { Vector3 } from 'UnityEngine';
import { ZepetoScriptBehaviour, ZepetoScriptableObject } from 'ZEPETO.Script'
// import scriptable object type definition
import PlayerScriptObjectDef from "./playerDefine/PlayerScriptObjectDef";

export default class ScriptableObjectSample extends ZepetoScriptBehaviour {
    
    public player:ZepetoScriptableObject;
    public enemy:ZepetoScriptableObject<PlayerScriptObjectDef>; // generic type call
        
    Awake() {

        // direct access
        console.log("play name : ", this.player["name"]);
        console.log("play hp : ", this.player["hp"]);        
        console.log("play position : ", this.player["position"]);
        console.log("play rotation : ", this.player["rotation"]);

        // generic type call
        let monsterState = this.enemy.targetObject;
        console.log("enemy name : ", monsterState.name);
        console.log("enemy hp : ", monsterState.hp);
        console.log("enemy position : ", monsterState.position);
        console.log("enemy rotation : ", monsterState.rotation);

        // type casting
        let playerPosition = this.player["position"] as Vector3;
        console.log(`player position : (x:${playerPosition.x}, y:${playerPosition.y}, z:${playerPosition.z})`);

        // generic type can access class member 
        console.log(`enemy position : (x:${monsterState.position.x}, y:${monsterState.position.y}, z:${monsterState.position.z})`);

    }
    

    

}