export interface Result {
    timeSpan: string[];
    fields: string[];
    items: [
        string[][],
        number[][],
        any[],
        any[]
    ];
}

export interface MonthlySums {
    [key: string]: {
        pv: number;
        ip: number;
    };
}

export interface ChartOneState {
    series: {
        name: string;
        data: number[];
    }[];
}