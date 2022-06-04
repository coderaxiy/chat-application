import { useState } from 'react';
import axios from 'axios';
import logo from '../assets/icons/Send Icon.svg'

const projectID = '52b33391-de48-42c8-9743-21f581cdf5fa';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Wrong username or password!');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
          <div className='head-wrap'>
          <img src={logo} alt="logo" width={'100px'} />
                <h1 className="title">BrotherGram</h1>
                <p>Please type this to enter to the main page username: Abror password: Abror007</p>
          </div>
        
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start messaging</span>
            </button>
          </div>
        </form>
        <div className='error'>{error}</div>
      </div>
    </div>

  );
};

export default LoginForm;