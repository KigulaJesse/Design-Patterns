interface Relative {
    readonly name: string;
    DoB?: Date;
    type: "Uncle" | "Aunt" | "Cousin";
    married: true | false;
}

const relatives: Relative[] = [
    {name:"John Ssenyonyi", type: "Uncle", married: true},
    {name: "Ruth Ssenyonyi", type: "Aunt", married: true},
    {name: "Julian Nyombi", type: "Aunt", married: true},
    {name: "Solomon Nyombi", DoB: new Date(1996,11,3), type: "Cousin", married: false},
]

type RelativeTypeCount = {
    type: "Uncle" | "Aunt" | "Cousin";
    number: number
}



