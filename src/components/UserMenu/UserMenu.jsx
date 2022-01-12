import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 25,
    color: 'white,',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  button: {
    fontSize: 15,
    fontWeight: 700,
    borderRadius: 10,
    border: ' 2px solid white',
    color: '#5d8aa8',
    padding: 10,
    background: 'white',
    cursor: 'pointer',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Привет, {name}</span>
      <button
        type="button"
        style={styles.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Выйти
      </button>
    </div>
  );
}
