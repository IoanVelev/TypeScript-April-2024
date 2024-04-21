class BankAccount {
  private static latestId: number = 0;
  private id: number;
  private balance: number = 0;
  private interestRate: number = 0.02;

  constructor() {
    this.id = ++BankAccount.latestId;
    
  }

  setInterestRate(interest: number): void {
    this.interestRate = interest;
  }

  getInterest(years: number): string {
    return (this.balance * this.interestRate * years).toFixed(2);
  }

  deposit(amount: number): void {
    this.balance += amount;
  }
}

function testClient(input: string[]) {
  const db: BankAccount[] = [];

  for (const iterator of input) {
    const currentIterator: string[] = iterator.split(" ");
    const cmd: string = currentIterator[0];

    switch (cmd) {
      case "Create": {
        const user: BankAccount = new BankAccount();
        db.push(user);
        const currentUserId: number = db.length;
        console.log(`Account ID${currentUserId} created`);
        break;
      }

      case "Deposit": {
        const id: number = Number(currentIterator[1]);
        const amount: number = Number(currentIterator[2]);
        const currentClient: BankAccount = db[id-1];
        if (!currentClient) {
          console.log("Account does not exist");
          continue;
        }

        currentClient.deposit(amount);
        console.log(`Deposited ${amount} to ID${id}`);
        break;
      }

      case "GetInterest": {
        const id: number = Number(currentIterator[1]);
        const year: number = Number(currentIterator[2]);
        const currentClient: BankAccount = db[id-1];
        if (!currentClient) {
            console.log("Account does not exist");
            continue;
          }
        
        const interest = currentClient.getInterest(year);
        console.log(interest);
        break;
      }
      case "SetInterest": {
        const interestRate: number = Number(currentIterator[1]);
        db.forEach(client => client.setInterestRate(interestRate));
      }
    }
  }
}

testClient(["Create", "Deposit 1 20", "GetInterest 1 10", "End"]);
console.log("_____________________________________________________");

testClient([
  "Create",
  "Create",
  "Deposit 1 20",
  "Deposit 3 20",
  "Deposit 2 10",
  "SetInterest 1.5",
  "GetInterest 1 1",
  "GetInterest 2 1",
  "GetInterest 3 1",
  "End",
]);
