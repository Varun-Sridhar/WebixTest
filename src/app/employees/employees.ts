export interface IEmployees {
    EmployeeId : number;
    BeaconId : number;
    DirectManagaerEmployeeId : number;
    MatrixManagerEmployeeId : number;
    Hiredate : Date;
    Division : number;
    Department : string;
    JobTitle : number;
    JobTitle2 : string;
    Location : number;
    Sublocation : string;
    Status : number;
    ConfirmationDate : Date;
    PayRollId : number;
    JobtitleDescription : string;
    TradingSystem : string;
}

export class Employees implements IEmployees {
    constructor(public EmployeeId : number, public BeaconId : number, public DirectManagaerEmployeeId : number, public MatrixManagerEmployeeId : number, public Hiredate : Date,
        public Division : number, public Department : string, public JobTitle : number, public JobTitle2 : string, public Location : number, public Sublocation : string,
        public Status : number, public ConfirmationDate : Date, public PayRollId : number, public JobtitleDescription : string, public TradingSystem : string){}
}