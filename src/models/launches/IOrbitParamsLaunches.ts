export interface IOrbitParamsLaunches {
    reference_system: string;
    regime?: string;
    longitude?: number;
    semi_major_axis_km?: null | number | number;
    eccentricity?: null | number | number;
    periapsis_km?: null | number | number;
    apoapsis_km?: null | number | number;
    inclination_deg?: null | number | number;
    period_min?: number;
    lifespan_years?: null | number | number;
}