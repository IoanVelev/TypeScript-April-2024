class Employee {
    _name;
    _salary;
    _position;
    _department;
    _email;
    _age;
    constructor(name, salary, position, deparment, email = "n/a", age = "-1") {
        this._name = name;
        this._salary = salary;
        this._position = position;
        this._department = deparment;
        this._email = email;
        this._age = age;
    }
}
let obj = {};
function companyEmployees(input) {
    const db = [];
    const linesInfo = Number(input.shift());
    for (let index = 0; index < linesInfo; index++) {
        const currentEmpInfo = input[index].split(" ");
        const name = currentEmpInfo[0];
        const salary = Number(currentEmpInfo[1]);
        const position = currentEmpInfo[2];
        const deparment = currentEmpInfo[3];
        const email = currentEmpInfo[4] && currentEmpInfo[4].includes("@")
            ? currentEmpInfo[4]
            : "n/a";
        const age = (currentEmpInfo[4] &&
            !currentEmpInfo[4].includes("@") || (currentEmpInfo[5]))
            ? currentEmpInfo[currentEmpInfo.length - 1]
            : '-1';
        const emp = new Employee(name, salary, position, deparment, email, age);
        if (!obj[deparment]) {
            obj[deparment] = { salary, peopleCount: 1 };
        }
        else {
            obj[deparment]['salary'] += salary;
            obj[deparment]['peopleCount'] += 1;
        }
        db.push(emp);
    }
    let highestAvgSalary = 0;
    let highestDepartmentAvgSalary;
    Object.keys(obj).forEach(department => {
        if (highestAvgSalary < obj[department].salary / obj[department].peopleCount) {
            highestAvgSalary = obj[department].salary / obj[department].peopleCount;
            highestDepartmentAvgSalary = department;
        }
    });
    const filteredEmployees = db.filter(employees => highestDepartmentAvgSalary == employees._department).sort((a, b) => b._salary - a._salary);
    console.log(`Highest average salary: ${highestDepartmentAvgSalary}`);
    filteredEmployees.forEach(employee => {
        console.log(`${employee._name} ${employee._salary.toFixed(2)} ${employee._email} ${employee._age}`);
    });
}
companyEmployees([
    "4",
    "Peter 120.00 Dev Development peter@abv.bg 28",
    "Tina 333.33 Manager Marketing 33",
    "Sam 840.20 ProjectLeader Development sam@sam.com",
    "George 0.20 Freeloader Nowhere 18",
]);
console.log("_____________________________________");
companyEmployees(["6",
    "Silver 496.37 Temp Coding silver@yahoo.com",
    "Sam 610.13 Manager Sales",
    "John 609.99 Manager Sales john@abv.bg 44",
    "Venci 0.02 Director BeerDrinking beer@beer.br 23",
    "Andre 700.00 Director Coding",
    "Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey"
]);
