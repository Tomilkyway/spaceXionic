import { IThrustCapsule } from "./IThrustCapsule";

export interface IThrusterCapsule {
    type: string;
    amount: number;
    pods: number;
    fuel_1: string;
    fuel_2: string;
    thrust: IThrustCapsule;
}