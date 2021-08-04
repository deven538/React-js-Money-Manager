import './index.css'

const TransactionItem = props => {
  const {transactionItem, onClickDelete} = props
  const {transactionId, titleInput, amountInput, optionId} = transactionItem

  const deleteTransaction = () => {
    onClickDelete(transactionId)
  }

  return (
    <li className="item-container">
      <p className="item">{titleInput}</p>
      <p className="item">{amountInput}</p>
      <p className="item">{optionId}</p>
      <button
        type="button"
        testid="delete"
        className="delete-button"
        onClick={deleteTransaction}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
