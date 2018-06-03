import { ILinksHistory } from "./ILinksHistory";

export interface IHistory {
    title: string;
    event_date_utc: string;
    flight_number?: number;
    details: string;
    links: ILinksHistory;
}