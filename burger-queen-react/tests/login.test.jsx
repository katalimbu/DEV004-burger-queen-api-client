import { render, screen, fireEvent, waitFor, getByText } from '@testing-library/react'; 
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, afterEach, vi } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Login from '../src/components/Login/Login'
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


it('funcionalidad botón login',async () => {

  mockPostLogin();
  render(
    <MemoryRouter>
    <Login />
    </MemoryRouter>
  );
  
  
  await waitFor(() => {
    const LoginButtonElement = (screen.getByText.container, 'Iniciar sesión');
    fireEvent.click(LoginButtonElement);
  },{ timeout: 10000 });
});




// it('realiza la petición HTTP al hacer clic en el botón', async () => {
//   vi.useFakeTimers();
//   mockPostLogin();
//   render(
//     <MemoryRouter>
//       <Login />
//     </MemoryRouter>);
//     vi.advanceTimersByTime(40000);

//   // Obtén el botón del DOM utilizando alguno de los métodos proporcionados por testing-library/react, como getByText o getByRole.
//   const loginBtnFound = screen.getByText('Iniciar sesión');

//   // Simula el evento de clic en el botón utilizando la función fireEvent.
//   fireEvent.click(loginBtnFound);

//   // Espera a que se realice la petición HTTP utilizando waitFor y verifica que la petición sea correcta.
//   await waitFor(() => {
//     expect(mockAdapterLogin.history.post.length).toEqual(1);
//     expect(mockAdapterLogin.history.post[0].url).toEqual('http://localhost:8080');
//   });
// });