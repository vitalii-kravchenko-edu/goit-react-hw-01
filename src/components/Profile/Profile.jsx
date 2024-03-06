import styles from "./profile.module.css"

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={avatar} alt="User avatar" className={styles.avatar}/>
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.infoList}>
        <li className={styles.infoItem}>
          <span className={styles.infoText}>Followers</span>
          <span className={styles.infoValue}>{stats.followers}</span>
        </li>
        <li className={styles.infoItem}>
          <span className={styles.infoText}>Views</span>
          <span className={styles.infoValue}>{stats.views}</span>
        </li>
        <li className={styles.infoItem}>
          <span className={styles.infoText}>Likes</span>
          <span className={styles.infoValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
