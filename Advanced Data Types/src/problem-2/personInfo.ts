type Person = {
    firstName: string,
    lastName: string,
    age: number
}

function personInfo(param1: string, param2: string, param3: string): Person {
    const result: Person = {
        firstName: param1,
        lastName: param2,
        age: Number(param3)
    }

    return result;
}


console.log(personInfo("Peter", "Pan","20"));
