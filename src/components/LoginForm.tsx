

import React from 'react';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Verhindert den Standard-Submit
    const username = (event.target as HTMLFormElement).username.value;
    const password = (event.target as HTMLFormElement).password.value;

    if (username === 'Demo' && password === 'Demo') {
      window.location.href = '/lineup/dashboard';
    } else {
      alert('Ungültige Zugangsdaten!');
    }
  };

  return (
    <form method="post" onSubmit={handleLogin}>
      <label htmlFor="username">Benutzername:</label>
      <input type="text" id="username" name="username" required />

      <label htmlFor="password">Passwort:</label>
      <input type="password" id="password" name="password" required />

      <button type="submit">Anmelden</button>
    </form>
  );
};

export default LoginForm;