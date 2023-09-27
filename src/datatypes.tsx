export type dataType = {
    company: string;
    Applied: Number;
    Recommended: Number;
    Intervie: Number;
    Offer: Number;
    Hired: Number;
    TotalRejected: Number;
    opportunity: {
        name: string;
        Applied: status[];
        Recommended: status[];
        Interview: status[];
        Offer: status[];
        Hired: status[];
    }[]
}

type status = {
    Active: Number;
    Disqualified: Number;
}