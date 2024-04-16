function personInfo(param1, param2, param3) {
    const result = {
        firstName: param1,
        lastName: param2,
        age: Number(param3)
    };
    return result;
}
console.log(personInfo("Peter", "Pan", "20"));
