class BankAccount {
    static latestId = 1;
    id;
    balance = 0;
    interestRate = 0.02;
    constructor() {
        this.id = BankAccount.latestId++;
    }
    setInterestRate(interest) {
        this.interestRate = interest;
    }
    getInterest(years) {
        return (this.balance * this.interestRate * years).toFixed(2);
    }
    deposit(amount) {
        this.balance += amount;
    }
}
function testClient(input) {
    const db = [];
    for (const iterator of input) {
        const currentIterator = iterator.split(" ");
        const cmd = currentIterator[0];
        switch (cmd) {
            case "Create": {
                const user = new BankAccount();
                const currentUserId = db.length + 1;
                db.push(user);
                console.log(`Account ID${currentUserId} created`);
                break;
            }
            case "Deposit": {
                const id = Number(currentIterator[1]);
                const amount = Number(currentIterator[2]);
                const currentClient = db[id - 1];
                if (!currentClient) {
                    console.log("Account does not exist");
                    continue;
                }
                currentClient.deposit(amount);
                console.log(`Deposited ${amount} to ID${id}`);
                break;
            }
            case "GetInterest": {
                const id = Number(currentIterator[1]);
                const year = Number(currentIterator[2]);
                const currentClient = db[id - 1];
                if (!currentClient) {
                    console.log("Account does not exist");
                    continue;
                }
                const interest = currentClient.getInterest(year);
                console.log(interest);
                break;
            }
            case "SetInterest": {
                const interestRate = Number(currentIterator[1]);
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
