export interface IScores {
    BeaconId: number;
    TestType: string;
    Score: number;
    Feedback: string;
    Date: Date;
    HROM: string;
    Location: string;
    Result: string;
    VacancyID: number;
}

export class Scores implements IScores {
    constructor (public BeaconId: number, public TestType: string, public Score: number,
        public Feedback: string, public Date: Date, public HROM: string, public Location: string, public Result: string, public VacancyID: number){}
}