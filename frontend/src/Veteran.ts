export class Person {
    id: string; //Schema doesn't have ID listed, should we still have this here?
    firstName: string;
    lastName: string;
	serviceNumber: string; //this might be an incorrect datatype
	rank: string;
	branch: string;
	militaryInfo: string;
	deployments: string;
	bio: string;
	bioExtended: string;
	primaryImage: string; //This might not be a string
	otherImages: string;
	additionalLinks: string;
	deceased: string;
	deathDate: string;
	deathLocation: string;
	internmentLocation: string;
    //age:number;
}