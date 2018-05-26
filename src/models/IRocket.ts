import {IFirstStage} from "./IFirstStage";
import {ISecondStage} from "./ISecondStage";
/**
 * Created by alexandremenielle on 26/05/2018.
 */

export interface IRocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage: IFirstStage;
  second_stage: ISecondStage;
}
