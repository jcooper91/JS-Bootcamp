let myAccount = {
    name: 'Jack Cooper',
    expenses: 100,
    income: 1000
}

// myAccount = {}; // won't work as you're assigning whole new object
// myAccount.expenses = 2.34; // will work as you're just changing the property

let addExpense = function (account, amount) {
    account = {}; // this won't affect the original object. You can onlu change the original objects properties (below), not assign the whole object to something else
    // account.expenses = account.expenses + amount;
    console.log(account);
}

// addIncome - account, income
let addIncome = function (account, income) {
    account.income = account.income + income;
    console.log(account)
}


// reset account - reset expensees and income to 0 
let resetAccount = function (account) {
    account.expenses = 0;
    account.income = 0;
    console.log(account)
}
// get account summary = print account summary - account for Jack has £9000, £900 for income, £100 for expenses
let accountSummary = function (account) {
    console.log(` for ${account.name} has £${account.income - account.expenses}. £${account.income} for income and £${account.expenses} for expenses`)
}
accountSummary(myAccount);
// addIncome
// addExpense
// add Expense
// getAccountSummary
// resetAccount
// getAcoountSummary


addExpense(myAccount, 2.50);
console.log(myAccount);
