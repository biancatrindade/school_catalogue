class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
        
    }

    set numberOfStudents(newNumberOfStudents) {
        return typeof newNumberOfStudents === 'number' ? this._numberOfStudents : console.log('Invalid input: numberOfStudents must be set to a Number.');
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.\n`)
    }

    static pickSubstituteTeacher(substituteTeachers) {
        const randomTeacher = Math.floor(Math.random()*substituteTeachers.length);
        return substituteTeachers[randomTeacher];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfStudents);
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        console.log(this._sportsTeams); 
    }

}

//Testing the code 

console.log('\nPRIMARY SCHOOL\n')

const cheeseburger = new PrimarySchool("St Cheeseburger's Primary School", 250, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

const substitute = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

console.log(cheeseburger);

console.log(`\nThe substitute teacher is: ${substitute}`);

console.log('\nMIDDLE SCHOOL\n');

const pubicPolytechnic = new MiddleSchool('Pubic Polytechnic', 5000);

pubicPolytechnic.quickFacts();

console.log(pubicPolytechnic);

console.log('\nHIGH SCHOOL\n')

const nisoHighSchool = new HighSchool('Niso High School', 50, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(nisoHighSchool);

