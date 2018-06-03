import { IHeightRocket } from "./IHeightRocket";
import { IMassRocket } from "./IMassRocket";
import { IPayloadWeightRocket } from "./IPayloadWeightRocket";
import { IFirstStageRocket } from "./IFirstStageRocket";
import { ISecondStageRocket } from "./ISecondStageRocket";
import { IEnginesRocket } from "./IEnginesRocket";
import { ILandingLegsRocket } from "./ILandingLegsRocket";

export interface IRocket {
    id: string;
    name: string;
    type: string;
    active: boolean;
    stages: number;
    boosters: number;
    cost_per_launch: number;
    success_rate_pct: number;
    first_flight: string;
    country: string;
    company: string;
    height: IHeightRocket;
    diameter: IHeightRocket;
    mass: IMassRocket;
    payload_weights: IPayloadWeightRocket[];
    first_stage: IFirstStageRocket;
    second_stage: ISecondStageRocket;
    engines: IEnginesRocket;
    landing_legs: ILandingLegsRocket;
    description: string;
}