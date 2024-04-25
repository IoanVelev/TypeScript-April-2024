abstract class CreateAccount<T, U> {
  readonly bankName: T;
  readonly bankId: U;
  constructor(bankName: T, bankId: U) {
    this.bankName = bankName;
    this.bankId = bankId;
  }
}

class PersonalAccount<T, U, V> extends CreateAccount<T, U> {
  readonly ownerName: V;
  public money: number = 0;
  public recentTransactions = {};

  constructor(bankName: T, bankId: U, ownerName: V) {
    super(bankName, bankId);
    this.ownerName = ownerName;
  }

  deposit(amount: number): void {
    this.money += amount;
  }

  expense(amount: number, expenseType: string): void {
    let hasEnoughMoney: boolean = this.money - amount >= 0;

    if (hasEnoughMoney) {
      this.money -= amount;
      if (!this.recentTransactions[expenseType]) {
        this.recentTransactions[expenseType] = amount;
      } else {
        this.recentTransactions[expenseType] += amount;
      }
    } else {
      throw new Error(`You cant make ${expenseType} transaction`);
    }
  }

  showDetails(): string {
    const moneySpent = Object.values(this.recentTransactions).reduce(
      (accumulator: number, currentValue: number) => {
        return accumulator + currentValue;
      },
      0
    ) as number;

    return `Bank name: ${this.bankName} \nBank ID: ${this.bankId} \nOwner name: ${this.ownerName} \nMoney: ${this.money} \nMoney spent: ${moneySpent}`;
  }
}

let account = new PersonalAccount("DSK", 101240, "Ivan Ivanov");

account.deposit(1000);
account.deposit(1000);
account.expense(700, "Buy new phone");
account.expense(400, "Book a vacation");
account.expense(400, "Book a vacation");
account.expense(100, "Buy food");
console.log(account.showDetails());

let account2 = new PersonalAccount("Fibank", 100000, "Petar Petrol");

account2.deposit(10000);
account2.deposit(7000);
account2.expense(12000, "Buy a new car");
account2.expense(200, "Go to a fancy restaurant");
account2.expense(100, "Go to a bar");
account2.expense(30, "Go to the movies");
console.log(account2.showDetails());
