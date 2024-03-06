import TransactionHistoryItem from "./TransactionHistoryItem";
import styles from "./transaction-history.module.css";

const TransactionHistory = ({ items = [] }) => {
  const elements = items.map(({ id, ...other }) => (
    <TransactionHistoryItem key={id} {...other} />
  ));
  return (
    <table className={styles.tableContainer}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{elements}</tbody>
    </table>
  );
};

export default TransactionHistory;
