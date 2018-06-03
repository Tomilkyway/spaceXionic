import { ICompositeFairingRocket } from "./ICompositeFairingRocket";

export interface IPayloadsRocket {
    option_1: string;
    composite_fairing: ICompositeFairingRocket;
    option_2?: string;
}