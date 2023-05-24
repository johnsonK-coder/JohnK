let numberOne = [1, 2, 3];
let numberTwo = [4, 5, 6];
console.log(...numberOne, ...numberTwo);

const students = {
    name: "Doris",
    age: 24,
    gender: "Female",
    address: "4 Paris, France",
    courses: ["Math201", "Eng101", "Bam304"],
}
let {name, age, gender, address, courses} = students;
console.log(name);
console.log(age);
console.log(gender);
console.log(address);
console.log(courses);

let names = ["Mercy", "Doris", "Monica", "Mary"]
names.pop("Mary")
console.log(names);




//An array of object with mapping and filter
const cities =[
    {
        city: "Lagos",
    country: "Nigeria",
    population: "5.8"
    },

    {
    city: "Nairobi",
    country: "Kenya",
    population: "3.2"
    },

    {
    city: "Dakar",
    country: "Senegal",
    population: "3.6"
    },
];
console.log(cities);
const filteredCities = cities.map(city => city.country);
console.log(filteredCities);
const filteredCountries = cities.filter(city => city.country == "Lagos").map(city => city.country);

let filteredCity = cities.map(city => city.population);
console.log(filteredCity);
let filteredPopulation = cities.filter(city => city.population == "Kenya").map(city => city.population);

let filteredCountry = cities.map(city => city.city);
console.log(filteredCountry);
let filteredCounty = cities.filter(city => city. city == "Dakar").map(city => city.city);




