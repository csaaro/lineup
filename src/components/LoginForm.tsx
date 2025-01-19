import React from 'react';

const LoginForm: React.FC = () => {
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.target as HTMLFormElement).username.value;
    const password = (event.target as HTMLFormElement).password.value;

    if (username === 'Demo' && password === 'Demo') {
      window.location.href = '/lineup/dashboard';
    } else {
      alert('Ungültige Zugangsdaten!');
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <div className="form-group">
        <label htmlFor="username">Benutzername</label>
        <input type="text" id="username" name="username" required />
      </div>

      <div className="form-group">
        <label htmlFor="password">Passwort</label>
        <input type="password" id="password" name="password" required />
      </div>

      <button type="submit" className="login-button">Anmelden</button>
    </form>
  );
};

export default LoginForm;