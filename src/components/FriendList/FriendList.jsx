import FriendListItem from "./FriendListItem";
import styles from "./friend-list.module.css";

const FriendList = ({ items = [] }) => {
  const elements = items.map(({ id, ...other }) => (
    <FriendListItem key={id} {...other} />
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

export default FriendList;
