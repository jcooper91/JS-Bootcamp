/**
 * addExpense
 * addIncome
 * getAccountSummary
 */

 const account = {
     name: 'Jack Cooper',
     income: [],
     expenses: [],
     addExpense: function(description, amount) {
        const newExpense = {
            description: description,
            amount: amount
        }
        this.expenses.unshift(newExpense);
     },
     addIncome: function(description, amount) {
        const newIncome = {
            description: description,
            amount: amount
        }
        this.income.unshift(newIncome);
     },
     getAccountSummary: function() {
         let totalIncome = 0;
         let totalExpense = 0;
         let totalAmount = 0;
         this.income.forEach(function(income) {
            totalIncome += income.amount;
         })
         this.expenses.forEach(function(expense) {
             totalExpense += expense.amount;
         })
         totalAmount = totalIncome - totalExpense;
         return `${this.name}'s total account figure is ${totalAmount}. Their income was ${totalIncome} and their expenses totalled ${totalExpense}`;
     }
 }
account.addExpense('Piano Lessons', 400);
account.addExpense('Travel', 150);
account.addIncome('job', 800);
console.log(account.getAccountSummary());



/* COULD HAVE INSTEAD FOR ADDINCOME & ADDEXPENSE */
// addExpense: function(description, amount) {
//     this.account.push({
//         description: description,
//         amount: amount
//     })
// }
 