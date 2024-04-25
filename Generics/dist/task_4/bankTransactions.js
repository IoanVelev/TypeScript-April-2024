class CreateAccount {
    bankName;
    bankId;
    constructor(bankName, bankId) {
        this.bankName = bankName;
        this.bankId = bankId;
    }
}
class PersonalAccount extends CreateAccount {
    ownerName;
    money = 0;
    recentTransactions = {};
    constructor(bankName, bankId, ownerName) {
        super(bankName, bankId);
        this.ownerName = ownerName;
    }
    deposit(amount) {
        this.money += amount;
    }
    expense(amount, expenseType) {
        let hasEnoughMoney = this.money - amount >= 0;
        if (hasEnoughMoney) {
            this.money -= amount;
            if (!this.recentTransactions[expenseType]) {
                this.recentTransactions[expenseType] = amount;
            }
            else {
                this.recentTransactions[expenseType] += amount;
            }
        }
        else {
            throw new Error(`You cant make ${expenseType} transaction`);
        }
    }
    showDetails() {
        const moneySpent = Object.values(this.recentTransactions).reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
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