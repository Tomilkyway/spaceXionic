import { IThrustSeaLevelRocket } from "./IThrustSeaLevelRocket";

export interface IEnginesRocket {
    number: number;
    type: string;
    version: string;
    layout?: string;
    engine_loss_max?: number;
    propellant_1: string;
    propellant_2: string;
    thrust_sea_level: IThrustSeaLevelRocket;
    thrust_vacuum: IThrustSeaLevelRocket;
    thrust_to_weight?: number;
}