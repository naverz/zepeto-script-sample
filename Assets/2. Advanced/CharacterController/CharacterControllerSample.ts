import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import {SpawnInfo, ZepetoPlayers} from 'ZEPETO.Character.Controller'

export default class CharacterController extends ZepetoScriptBehaviour {

    Start() {
        ZepetoPlayers.instance.CreatePlayerWithHashCode("", "F8URQA", new SpawnInfo(), true);
        // ZepetoPlayers.instance.CreatePlayerWithZepetoId("", "gamedev1", new SpawnInfo(), true)
        
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            let _player = ZepetoPlayers.instance.LocalPlayer;
        });
    }

}