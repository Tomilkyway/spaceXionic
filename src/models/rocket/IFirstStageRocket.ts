import { IThrustSeaLevelRocket } from "./IThrustSeaLevelRocket";

export interface IFirstStageRocket {
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
    thrust_sea_level: IThrustSeaLevelRocket;
    thrust_vacuum: IThrustSeaLevelRocket;
    cores?: number;
}