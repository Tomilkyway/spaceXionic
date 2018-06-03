import { IFirstStageLaunches } from "./IFirstStageLaunches";
import { ISecondStageLaunches } from "./ISecondStageLaunches";

export interface IRocketLaunches {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: IFirstStageLaunches;
    second_stage: ISecondStageLaunches;
}