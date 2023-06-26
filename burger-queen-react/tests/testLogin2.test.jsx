import { render, screen, fireEvent, waitFor } from '@testing-library/react'; 
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, afterEach, vi } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Login from '../src/components/Login/Login'
import Menu from '../src/components/Menu/menu'
// Render se utiliza para emular la renderización de react y screen para acceder a elementos del DOM.
// fireEvent simula eventos del DOM. waitFor espera a que ocurran el evento asincrónico
// AfterEach se ejecuta despues de cada prueba. vi controla el tiempo de las pruebas.

// mock de la solicitud HTTP post, método de axios. 
const mockPostLogin = () => {
  const mock = new MockAdapter(axios);
  mock
  .onPost('http://localhost:8080')
  .reply (200, {
    email: "grace.hopper@systers.xyz",
    password: 123456
  })
};
// Temporizadores que emulan un entorno de ejecución real. 
afterEach(() => {
  vi.useRealTimers();
});

// guardamos el método mockAdapter que emula la respuesta de la petición HTTP. 
const mockAdapterLogin = new MockAdapter(axios);
// Adaptamos el método MockAdapter al tipo de petición HTTP.
mockAdapterLogin.onPost('http://localhost:8080/login').reply(200, {
  "email": "grace.hopper@systers.xyz",
  "password": "$2a$10$JABwR1UAtJqr2DCJ41ypMOgOqlh8eRXmTBO6DXfKG3ybxhABY4rey",
  "role": "admin",
  "id": 2
});
// getByText es un método de la biblioteca testing-library/react, busca un elemento del DOM que contenga el texto que le establecimos.
// toBeInTheDocument() es un método de la biblioteca de testing-library/jest-dom, comprueba que el elemento encontrado EXISTA en el DOM.
// <MemoryRouter> componente que proviene de la biblioteca react-router-dom, sirve para emular el ruteador en el test, envuelve al componente a testear.
describe('Login', () => {
  it('renderea título', async () => {
    mockPostLogin();
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByText('Hola!')).toBeInTheDocument();
    });
  });
})


it('funcionalidad botón login en status 200 de la petición http',async () => {
  
  mockPostLogin();
  render(
    <MemoryRouter>
    <Login />
    </MemoryRouter>
  );
  await waitFor(() => {
    const LoginButtonElement = screen.getByText('Iniciar sesión');
    fireEvent.click(LoginButtonElement);
  });
});

it('una vez que se clickea el boton Iniciar sesion y el status es 200, se renderea el componente Menu',async () => {
  // mockea una respuesta positiva de la petición http post
  mockPostLogin();
  // renderiza el componente Login dentro del componente MemoryRouter para simular el ruteo.
  render(
    <MemoryRouter>
    <Login />
    </MemoryRouter>
  );
  // con el método waitfor avisamos que hay que esperar por una respuesta asíncrona.
  await waitFor(() => {
    // guardamos el botón donde se encuentra el 'iniciar sesion'
    const LoginButtonElement = screen.getByText('Iniciar sesión');
    // fireEvent simula el click sobre el boton Iniciar sesión.
    fireEvent.click(LoginButtonElement);
  // se mockea una respuesta http 200 nuevamente 
    mockPostLogin();
    // y se renderiza el componente Menu
    render(
      <MemoryRouter>
      <Menu />
      </MemoryRouter>
  );
  });
});
