function dayOfWeek(param): void {
  const obj = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
  };

  if (obj[param]) {
    console.log(obj[param]);
  } else {
    console.log("error");
  }
}

dayOfWeek("Friday");
