import { IThrustSeaLevelRocket } from "./IThrustSeaLevelRocket";
import { IPayloadsRocket } from "./IPayloadsRocket";

export interface ISecondStageRocket {
    engines: number;
    fuel_amount_tons?: number;
    burn_time_sec: number;
    thrust: IThrustSeaLevelRocket;
    payloads: IPayloadsRocket;
}