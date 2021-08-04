import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({optionId: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()

    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )

    const {displayText} = typeOption

    const newTransaction = {
      transactionId: uuidv4(),
      titleInput,
      amountInput: parseInt(amountInput),
      optionId: displayText,
    }
    if (titleInput !== '' && amountInput !== '') {
      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
        titleInput: '',
        amountInput: '',
        optionId: transactionTypeOptions[0].optionId,
      }))
    }
  }

  onClickDelete = id => {
    const {transactionsList} = this.state
    const filteredTransactions = transactionsList.filter(
      eachTransaction => eachTransaction.transactionId !== id,
    )

    this.setState({transactionsList: filteredTransactions})
  }

  render() {
    const {titleInput, amountInput, optionId, transactionsList} = this.state

    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="user-details-container">
            <h1 className="user-name">Hi, Richard</h1>
            <p className="welcome-message">
              Welcome back to your{' '}
              <span className="app-name">Money Manager</span>
            </p>
          </div>

          <MoneyDetails transactionsList={transactionsList} />

          <div className="transaction-history-container">
            <div className="transaction-container">
              <form onSubmit={this.onAddTransaction} className="form-container">
                <h1 className="form-heading">Add Transaction</h1>
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <input
                  placeholder="TITLE"
                  id="title"
                  className="input"
                  onChange={this.onChangeTitle}
                  value={titleInput}
                />

                <label htmlFor="Amount" className="label">
                  AMOUNT
                </label>

                <input
                  placeholder="AMOUNT"
                  id="Amount"
                  className="input"
                  onChange={this.onChangeAmount}
                  value={amountInput}
                />

                <label htmlFor="select" className="label">
                  {' '}
                  TYPE
                </label>

                <select
                  id="select"
                  className="input"
                  onChange={this.onChangeSelect}
                  value={optionId}
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      value={eachOption.optionId}
                      key={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1 className="history-heading">History</h1>
              <ul className="history-item-container">
                <li className="item-container">
                  <p className="title-heading">Title</p>
                  <p className="title-heading">Amount</p>
                  <p className="title-heading">Type</p>
                </li>
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    transactionItem={eachTransaction}
                    key={eachTransaction.transactionId}
                    onClickDelete={this.onClickDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
