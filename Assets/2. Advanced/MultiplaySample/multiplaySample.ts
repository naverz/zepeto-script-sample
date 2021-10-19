import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { ZepetoWorldMultiplay } from 'ZEPETO.World';
import { Room } from 'ZEPETO.Multiplay';


export default class multiplaySample extends ZepetoScriptBehaviour {

    private multiplay: ZepetoWorldMultiplay;
    
    Start() {
        this.multiplay = this.gameObject.GetComponent<ZepetoWorldMultiplay>();

        this.multiplay.RoomJoined += (room: Room) => {
            // console.log(`RoomCreated, my session id is ${room.SessionId}`);

            // send message to server
            room.Send("echo","hello ZEPETO Multiplay");

            // add server message listener
            room.AddMessageHandler("echo",(message)=>{
                // print server message
                console.log(message);
            });
        };
    }
    
    Update() {
        
    }

    
    
    
}