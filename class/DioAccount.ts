export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (cash: number): void => {
    if(this.validateStatus()){
      this.balance=+ cash
      console.log('Voce depositou ' + cash)
    }
  }

  withdraw = (cash: number): void => {
    if(cash <= this.balance && this.validateStatus()){
    cash= this.balance
    console.log('Voce sacou ' + cash)
    cash=- this.balance

    } else {
      console.log(cash + ' é um valor que não é possível ser sacado! Saldo na conta insuficiente.')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  getStatus = (): boolean => {
		return this.validateStatus();
	};

}
