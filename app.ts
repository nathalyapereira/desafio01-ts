import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PlusAccount } from './class/PlusAcount'

console.log(" -------------------------------------------- ");
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
console.log(" --------------- Depósito --------------- ");
peopleAccount.deposit(10)
console.log(" --------------- Saque --------------- ");
peopleAccount.withdraw(5)
console.log(" --------------- Valor total na conta --------------- ");
peopleAccount.getBalance()
console.log(" -------------------------------------------- ");
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20,)
console.log(companyAccount)
console.log(" --------------- Depósito --------------- ");
companyAccount.deposit(20)
console.log(" --------------- Saque --------------- ");
companyAccount.withdraw(50)
console.log(" --------------- Valor total na conta --------------- ");
companyAccount.getBalance()
console.log(" -------------------------------------------- ");
const plusAccount: PlusAccount = new PlusAccount('RICA', 100)
console.log(plusAccount)
console.log(" --------------- Rende 10 --------------- ");
plusAccount.deposit(100)
console.log(" --------------- Valor total na conta --------------- ");
plusAccount.getBalance()
