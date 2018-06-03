import { IRocketLaunches } from "./IRocketLaunches";
import { ITelemetryLaunches } from "./ITelemetryLaunches";
import { IReuseLaunches } from "./IReuseLaunches";
import { ILaunchSiteLaunches } from "./ILaunchSiteLaunches";
import { ILinksLaunches } from "./ILinksLaunches";

export interface ILaunches {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: string;
    launch_date_local: string;
    rocket: IRocketLaunches;
    telemetry: ITelemetryLaunches;
    reuse: IReuseLaunches;
    launch_site: ILaunchSiteLaunches;
    launch_success?: boolean;
    links: ILinksLaunches;
    details?: string;
}