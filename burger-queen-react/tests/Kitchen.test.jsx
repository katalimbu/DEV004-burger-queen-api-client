import { render, screen, fireEvent, waitFor,getByText } from '@testing-library/react';
import Kitchen from '../src/components/Orders/Kitchen';
import { describe, it, expect, afterEach, vi } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { MemoryRouter } from 'react-router-dom';


const mockGet = () => {
  const mock = new MockAdapter(axios);
  mock
    .onGet('https://burger-queen-api-mock-production-c642.up.railway.app/orders')
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

const mockAdapter = new MockAdapter(axios);

// Configura una respuesta mock para la solicitud PATCH
mockAdapter.onPatch('https://burger-queen-api-mock-production-c642.up.railway.app/orders').reply(200, {
  status: 'delivering',
});

afterEach(() => {
  vi.useRealTimers();
});

describe('Kitchen', () => {
  it('renders title', async() => {
    mockGet();
    render(
      <MemoryRouter>
        <Kitchen />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByText('Estado del Pedido')).toBeInTheDocument();
      // sigue estando incrrecto
    
   });
  });

  it('renders orders', () => {
    vi.useFakeTimers();
    mockGet();
    render(
      <MemoryRouter>
        <Kitchen />
      </MemoryRouter>
    );
    vi.advanceTimersByTime(40000);

    waitFor(() => {
      const orderElement = getByText(screen.container, 'Orden Nº 2324');
      expect(orderElement).toBeTruthy();

      const statusElement = getByText(screen.container, 'Estado: pending');
      expect(statusElement).toBeTruthy();

      const product1QtyElement = getByText(screen.container, 'Cantidad: 1');
      expect(product1QtyElement).toBeTruthy();

      const product1NameElement = getByText(
        screen.container,
        'Nombre: Sandwich de jamón y queso'
      );
      expect(product1NameElement).toBeTruthy();

      const product2QtyElement = getByText(screen.container, 'Cantidad: 1');
      expect(product2QtyElement).toBeTruthy();

      const product2NameElement = getByText(
        screen.container,
        'Nombre: Café americano'
      );
      expect(product2NameElement).toBeTruthy();

      const readyButtonElement = getByText(screen.container, 'Listo');
      expect(readyButtonElement).toBeTruthy();
    });
  });

  it('submit', () => {
    vi.useFakeTimers();
    mockGet();
    render(
      <MemoryRouter>
    <Kitchen />
    </MemoryRouter>
    );
    vi.advanceTimersByTime(40000);

    waitFor(() => {
      const readyButtonElement = getByText(screen.container, 'Listo');
      fireEvent.click(readyButtonElement);
    });
  });

  it('manejar errores de axios get', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet('https://burger-queen-api-mock-production-c642.up.railway.app/orders').reply(500);

    render(
      <MemoryRouter>
        <Kitchen />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Error al obtener los datos')).toBeTruthy();
    });
  });
});


