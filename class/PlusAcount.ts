import { DioAccount } from "./DioAccount"

export class PlusAccount extends DioAccount {
    
    
    

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (cash: number): any => {
        if (this.getStatus()) {
        console.log('Você deposito ' + cash)
        this.balance =+ cash + 10
        console.log("Novo valor de depósito: " + this.balance)

        }
    }
}