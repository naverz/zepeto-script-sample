import { Sandbox, SandboxOptions, SandboxPlayer } from "ZEPETO.Multiplay";
import { Player } from "ZEPETO.Multiplay.Schema";

export default class extends Sandbox {

    onCreate(options: SandboxOptions) {        
        this.onMessage("echo", (client, message) => {
            console.log(`Echo onMessage from ${client.sessionId}, -> ${message}`);

            // send current client
            client.send("echo", "echo to sender : " + message);

            // Broadcast all connected client
            this.broadcast("echo", "echo to all : " + message);
        });
    }

    onJoin(client: SandboxPlayer) {
        const player = new Player();
        player.sessionId = client.sessionId;
        player.userId = client.userId;
        var players = this.state.players;

        players.set(client.sessionId, player);

        console.log('onJoin!!!!');
    }

    onLeave(client: SandboxPlayer, consented?: boolean) {
        
    }
}