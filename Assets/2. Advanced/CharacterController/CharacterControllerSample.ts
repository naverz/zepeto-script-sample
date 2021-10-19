import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import {SpawnInfo, ZepetoPlayers} from 'ZEPETO.Character.Controller'
import {Quaternion, Vector3} from "UnityEngine"

export default class CharacterController extends ZepetoScriptBehaviour {

    Start() {
        // set character spawn location
        var spawninfo = new SpawnInfo();
        spawninfo.position = Vector3.zero;
        spawninfo.rotation = Quaternion.identity;
        
        // load charater zepeto id
        ZepetoPlayers.instance.CreatePlayerWithZepetoId("", "gamedev1", spawninfo, true);
        
        // add init callback
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            let _player = ZepetoPlayers.instance.LocalPlayer;
            // test jump
            _player.Jump();
            // debug log
            console.log(` player created -> ${_player.name}` );
        });
    }

}
