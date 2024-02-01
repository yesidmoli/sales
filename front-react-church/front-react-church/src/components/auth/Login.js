// Login.js
import React, { useState } from 'react';
import Axios from '../../config/axios';
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const history = useHistory();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Realizar una solicitud al backend para autenticar al usuario y obtener el token
      const response = await Axios.post('/api/user-token/', {
        email: email,
        password: password,
      });

      // Obtener el token del cuerpo de la respuesta
      const newToken = response.data.token;
      localStorage.setItem('token', newToken);

      console.log("este es el token", newToken)

      // Llamar a la función de login del contexto con el nuevo token
      login(newToken);
      history.push('/');
    
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      Swal.fire({
        icon: 'error',
        title: "Credenciales incorrectas",
        text: "Por favor, verifica tu email y contraseña",
    });
    }
  };

  return (
    <div className=' login'>
      <div className='conten'>
      <h1>Inicio de Sesión</h1>
      <form className='form-login'>
        <label for="email">
          Email: </label>
          <input class="input-global" type="text" id='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Ingrese el correo' />
        
        <br />
        <label for="password">
          Contraseña:</label>
          <input class="input-global" type="password" id='password' value={password} onChange={e => setPassword(e.target.value)}  placeholder='Ingrese la contraseña'/>
        
        <br />
        <button type="button"className='btn btn-success'  onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </form>
      </div>
    </div>
  );
};

export default Login;
