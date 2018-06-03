import { IThrusterCapsule } from "./IThrusterCapsule";
import { ILaunchPayloadMassCapsule } from "./ILaunchPayloadMassCapsule";
import { ILaunchPayloadVolCapsule } from "./ILaunchPayloadVolCapsule";
import { IPressurizedCapsule } from "./IPressurizedCapsule";
import { ITrunkCapsule } from "./ITrunkCapsule";
import { IHeightwTrunkCapsule } from "./IHeightwTrunkCapsule";
import { IHeatShieldCapsule } from "./IHeatShieldCapsule";

export interface ICapsule {
    id: string;
    name: string;
    type: string;
    active: boolean;
    crew_capacity: number;
    sidewall_angle_deg: number;
    orbit_duration_yr: number;
    heat_shield: IHeatShieldCapsule;
    thrusters: IThrusterCapsule[];
    launch_payload_mass: ILaunchPayloadMassCapsule;
    launch_payload_vol: ILaunchPayloadVolCapsule;
    return_payload_mass: ILaunchPayloadMassCapsule;
    return_payload_vol: ILaunchPayloadVolCapsule;
    pressurized_capsule: IPressurizedCapsule;
    trunk: ITrunkCapsule;
    height_w_trunk: IHeightwTrunkCapsule;
    diameter: IHeightwTrunkCapsule;
}