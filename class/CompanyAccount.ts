import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber,)
  }

  getLoan = (cash: number) => {
      console.log('Voce pegou um empréstimo')
      this.deposit(cash)
    }
}
