# Project: School Catalogue

Hello!

I'm Bianca, and this project is part of the Codecademy course **"Learn Intermediate JavaScript."**

I created a digital school catalog that holds quick reference material for each school in the city. The parent and three child classes have the following properties, getters, setters, and methods:

### School - Parent class
- Properties: `name` (string), `level` (one of three strings: `'primary'`, `'middle'`, or `'high'`), and `numberOfStudents` (number)
- Getters: All properties have getters
- Setters: The `numberOfStudents` property has a setter
- Methods: `.quickFacts()` and `.pickSubstituteTeacher()` (this is a static method)

### Primary
- Includes everything in the `School` class, plus one additional property
- Properties: `pickupPolicy` (string)

### Middle
- Does not include any additional properties or methods

### High
- Includes everything in the `School` class, plus one additional property
- Properties: `sportsTeams` (array of strings)


You can check the result in [`school_catalogue.js`](https://github.com/biancatrindade/school_catalogue/blob/main/school_catalogue.js).

**See you there!**
