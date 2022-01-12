import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  section: {
    color: 'white',
    border: '2px solid white',
    padding: 10,
    borderRadius: 10,
    background: '#5d8aa8',
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

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div style={styles.section}>
      <h1>Создать аккаунт</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="on">
        <label style={styles.label}>
          Имя
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" style={styles.button}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
