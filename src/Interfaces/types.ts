export type GuideStatus = "pending" | "in-transit" | "delivered";

export interface GuideHistory {
    status: GuideStatus;
    timestamp: string;
}

export interface Guide {
    trackingNumber: string;
    status: GuideStatus;
    origin: string;
    destination: string;
    recipient: string;
    creationDate: string;
    history: GuideHistory[];
}