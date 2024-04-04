// import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <tr className="tableRow" key={transaction.id}>
            <td className="tableData">{transaction.type}</td>
            <td className="tableData">{transaction.amount}</td>
            <td className="tableData">{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
