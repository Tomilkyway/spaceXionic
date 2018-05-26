/**
 * Created by alexandremenielle on 26/05/2018.
 */
export interface ICore {
  core_serial?: string;
  flight?: number;
  block?: number;
  reused?: boolean;
  land_success?: boolean;
  landing_type?: string;
  landing_vehicle?: string;
}
