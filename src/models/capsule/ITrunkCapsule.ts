import { ILaunchPayloadVolCapsule } from "./ILaunchPayloadVolCapsule";
import { ICargoCapsule } from "./ICargoCapsule";

export interface ITrunkCapsule {
    trunk_volume: ILaunchPayloadVolCapsule;
    cargo: ICargoCapsule;
}