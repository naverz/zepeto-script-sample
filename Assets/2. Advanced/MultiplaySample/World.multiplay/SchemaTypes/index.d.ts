import { Schema, MapSchema, ArraySchema } from "@colyseus/schema"; 

declare module "ZEPETO.Multiplay.Schema" {
	interface State extends Schema {
		players: MapSchema<Player>;
		transforms: MapSchema<Transform>;
	}
	class Player extends Schema {
		userId: string;
		sessionId: string;
		metadata: string;
		transform: Transform;
	}
	class Transform extends Schema {
		id: string;
		ownerSessionId: string;
		position: Vector3;
		rotation: Vector3;
		positionX: number;
		positionY: number;
		positionZ: number;
		rotationX: number;
		rotationY: number;
		rotationZ: number;
	}
	class Vector3 extends Schema {
		x: number;
		y: number;
		z: number;
	}
}