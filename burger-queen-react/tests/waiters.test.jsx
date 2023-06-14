import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Waiter from '../src/components/Orders/Waiter';
import { describe, it, expect, afterEach, vi } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { MemoryRouter } from 'react-router-dom';


const mockGet = () => {
  const mock = new MockAdapter(axios);
  mock
    .onGet('http://localhost:8080/orders')
    .reply(200, [
      {
        id: 2324,
        userId: 15254,
        client: 'Jude Milhon',
        products: [
          {
            qty: 1,
            product: {
              id: 1214,
              name: 'Sandwich de jamón y queso',
              price: 1000,
              image:
                'https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg',
              type: 'Desayuno',
              dateEntry: '2022-03-05 15:14:10',
            },
          },
          {
            qty: 1,
            product: {
              id: 7450,
              name: 'Café americano',
              price: 500,
              image:
                'https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/coffe.jpg',
              type: 'Desayuno',
              dateEntry: '2022-03-05 15:14:10',
            },
          },
        ],
        status: 'pending',
        dataEntry: '2022-03-05 15:00',
      },
      {
        id: 8746,
        userId: 15254,
        client: 'Katie Bouman',
        products: [
          {
            qty: 2,
            product: {
              id: 7450,
              name: 'Café americano',
              price: 500,
              image:
                'https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/coffe.jpg',
              type: 'Desayuno',
              dateEntry: '2022-03-05 15:14:10',
            },
          },
          {
            qty: 1,
            product: {
              id: 8452,
              name: 'Agua 500ml',
              price: 500,
              image:
                'https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/water.jpg',
              type: 'Almuerzo',
              dateEntry: '2022-03-05 15:14:10',
            },
          },
        ],
        status: 'delivered',
        dataEntry: '2022-03-05 15:00',
        dateProcessed: '2022-03-05 16:00',
      },
    ]);
};

afterEach(() => {
  vi.useRealTimers();
});

const mockAdapter = new MockAdapter(axios);

// Configura una respuesta mock para la solicitud PATCH
mockAdapter.onPatch('http://localhost:8080/orders').reply(200, {
  status: 'delivered',
});

const findByText = (container, text) => {
  const elements = Array.from(container.querySelectorAll('*'));
  const element = elements.find(el => el.textContent === text);
  if (element) {
    return element;
  }
  throw new Error(`Unable to find an element with the text: ${text}`);
};

describe('Waiter', () => {
  it('renders title', async() => {
    mockGet();
    render(
        <MemoryRouter>
            <Waiter />
        </MemoryRouter>
    );
    await waitFor(() => {
        expect(screen.getByText('Estado de la Orden')).toBeTruthy();
        // sgue estando incorrecto 
    });
});

  it('renders orders', () => {
    vi.useFakeTimers();
    mockGet();
    render(<Waiter />);
    vi.advanceTimersByTime(40000);

    waitFor(() => {
      const orderElement = findByText(screen.container, 'Orden Nº 8746');
      expect(orderElement).toBeTruthy();

      const statusElement = findByText(screen.container, 'Estado: delivering');
      expect(statusElement).toBeTruthy();

      const product1QtyElement = findByText(screen.container, 'Cantidad: 1');
      expect(product1QtyElement).toBeTruthy();

      const product1NameElement = findByText(
        screen.container,
        'Nombre: Sandwich de jamón y queso'
      );
      expect(product1NameElement).toBeTruthy();

      const product2QtyElement = findByText(screen.container, 'Cantidad: 1');
      expect(product2QtyElement).toBeTruthy();

      const product2NameElement = findByText(
        screen.container,
        'Nombre: Café americano'
      );
      expect(product2NameElement).toBeTruthy();

      const readyButtonElement = findByText(screen.container, 'Listo');
      expect(readyButtonElement).toBeTruthy();
    });
  });

  it('submit', () => {
    vi.useFakeTimers();
    mockGet();
    render(<Waiter />);
    vi.advanceTimersByTime(40000);

    waitFor(() => {
      const readyButtonElement = findByText(screen.container, 'Listo');
      fireEvent.click(readyButtonElement);
    });
  });
});
