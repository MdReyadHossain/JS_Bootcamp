const vehicle = [
    {
        name: "BMW",
        pw: 503
    },
    {
        name: "Lamborghini",
        pw: 626
    },
    {
        name: "Mazda",
        pw: 452
    },
];


const FilterVehicle = () => vehicle.filter((obj) => obj.pw > 1 ).map((obj) => obj.name);

console.log(FilterVehicle());