import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  calculateIncome = () => {
    const {transactionsList} = this.props
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.optionId === 'Income') {
        incomeAmount += eachTransaction.amountInput
      }
    })
    return incomeAmount
  }

  calculateExpenses = () => {
    const {transactionsList} = this.props
    let expenseAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.optionId === 'Expenses') {
        expenseAmount += eachTransaction.amountInput
      }
    })
    return expenseAmount
  }

  render() {
    const incomeAmount = this.calculateIncome()
    const expensesAmount = this.calculateExpenses()
    const balance = incomeAmount - expensesAmount

    return (
      <div className="money-details-container">
        <div className="card balance-card">
          <div className="image-container">
            <img
              className="image-edit"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
            />
          </div>
          <div className="balance-amount-container">
            <p className="balance-type">Your Balance</p>
            <p className="amount" testid="balanceAmount">
              Rs {balance}
            </p>
          </div>
        </div>

        <div className="card income-card">
          <div className="image-container">
            <img
              className="image-edit"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
            />
          </div>
          <div className="balance-amount-container">
            <p className="balance-type">Your Income</p>
            <p className="amount" testid="incomeAmount">
              Rs {incomeAmount}
            </p>
          </div>
        </div>

        <div className="card expense-card">
          <div className="image-container">
            <img
              className="image-edit"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alt="expenses"
            />
          </div>
          <div className="balance-amount-container">
            <p className="balance-type">Your Expenses</p>
            <p className="amount" testid="expensesAmount">
              Rs {expensesAmount}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
