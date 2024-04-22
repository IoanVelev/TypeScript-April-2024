class Employee {
  _name: string;
  _salary: number;
  _position: string;
  _department: string;
  _email?: string;
  _age?: number | string;

  constructor(
    name: string,
    salary: number,
    position: string,
    deparment: string,
    email: string = "n/a",
    age: number | string = "-1"
  ) {
    this._name = name;
    this._salary = salary;
    this._position = position;
    this._department = deparment;
    this._email = email;
    this._age = age;
  }
}

interface departInfo {
  name: {
    salary: number,
    peopleCount: number
  };
}

let obj = {} as departInfo;

function companyEmployees(input: string[]): void {
  const db: Employee[] = [];

  const linesInfo: number = Number(input.shift());

  for (let index = 0; index < linesInfo; index++) {
    const currentEmpInfo = input[index].split(" ");
    const name: string = currentEmpInfo[0];
    const salary: number = Number(currentEmpInfo[1]);
    const position: string = currentEmpInfo[2];
    const deparment: string = currentEmpInfo[3];

    const email: string =
      currentEmpInfo[4] && currentEmpInfo[4].includes("@")
        ? currentEmpInfo[4]
        : "n/a";

    const age: string =
      (currentEmpInfo[4] &&
        !currentEmpInfo[4].includes("@") || (currentEmpInfo[5]))
        ? currentEmpInfo[currentEmpInfo.length - 1]
        : '-1'

    const emp = new Employee(name, salary, position, deparment, email, age);
    if (!obj[deparment]) {
      obj[deparment] = { salary, peopleCount: 1}
    } else {
      obj[deparment]['salary'] += salary;
      obj[deparment]['peopleCount'] += 1;
    }
    db.push(emp);
  }

  let highestAvgSalary: number = 0;
  let highestDepartmentAvgSalary: string;

 Object.keys(obj).forEach(department => {
    if (highestAvgSalary < obj[department].salary / obj[department].peopleCount) {
        highestAvgSalary = obj[department].salary / obj[department].peopleCount;
        highestDepartmentAvgSalary = department;
    }
 });

 const filteredEmployees: Employee[] = db.filter(employees => highestDepartmentAvgSalary == employees._department).sort((a, b) => b._salary - a._salary);


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
