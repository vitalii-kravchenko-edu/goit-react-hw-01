import styles from "./friend-list.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      {isOnline ? <p className={styles.online}>Online</p> : <p className={styles.offline}>Offline</p>}
    </li>
  );
};

export default FriendListItem;
