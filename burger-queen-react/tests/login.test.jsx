import { render, screen, fireEvent, waitFor } from '@testing-library/react'; 
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
  .onPost('http://localhost:8080/login')
  .reply ({
    email: "grace.hopper@systers.xyz",
    password: 123456
  })
};
// Temporizadores que emulan un entorno de ejecución real. 
afterEach(() => {
  vi.useRealTimers();
});
// es una función génerica que busca que x elemento del DOM contenga x texto. 
const findByText = (container, text) => {
  const elements = Array.from(container.querySelectorAll('*'));
  const element = elements.find(el => el.textContent === text);
  if (element) {
    return element;
  }
  throw new Error(`Unable to find an element with the text: ${text}`);
};
// guardamos el método mockAdapter que emula la respuesta de la petición HTTP. 
const mockAdapterLogin = new MockAdapter(axios);
// Adaptamos el método MockAdapter al tipo de petición HTTP.
mockAdapterLogin.onPost('http://localhost:8080/login').reply(200, {
  "email": "grace.hopper@systers.xyz",
  "password": "$2a$10$JABwR1UAtJqr2DCJ41ypMOgOqlh8eRXmTBO6DXfKG3ybxhABY4rey",
  "role": "admin",
  "id": 2
});




 
