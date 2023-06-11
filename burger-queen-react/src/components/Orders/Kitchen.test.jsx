import { render, screen,fireEvent, waitFor } from '@testing-library/react';
import Kitchen from './Kitchen';
import { describe,it,expect, afterEach, vi } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mockGet = () => {
  const mock = new MockAdapter(axios);
  mock.onGet('http://localhost:8080/orders').reply(200,
    [
      {
        "id": 2324,
        "userId": 15254,
        "client": "Jude Milhon",
        "products": [
          {
            "qty": 1,
            "product": {
              "id": 1214,
              "name": "Sandwich de jamón y queso",
              "price": 1000,
              "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg",
              "type": "Desayuno",
              "dateEntry": "2022-03-05 15:14:10"
            }
          },
          {
            "qty": 1,
            "product": {
              "id": 7450,
              "name": "Café americano",
              "price": 500,
              "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/coffe.jpg",
              "type": "Desayuno",
              "dateEntry": "2022-03-05 15:14:10"
            }
          }
        ],
        "status": "pending",
        "dataEntry": "2022-03-05 15:00"
      },
      {
        "id": 8746,
        "userId": 15254,
        "client": "Katie Bouman",
        "products": [
          {
            "qty": 2,
            "product": {
              "id": 7450,
              "name": "Café americano",
              "price": 500,
              "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/coffe.jpg",
              "type": "Desayuno",
              "dateEntry": "2022-03-05 15:14:10"
            }
          },
          {
            "qty": 1,
            "product": {
              "id": 8452,
              "name": "Agua 500ml",
              "price": 500,
              "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/water.jpg",
              "type": "Almuerzo",
              "dateEntry": "2022-03-05 15:14:10"
            }
          }
        ],
        "status": "delivered",
        "dataEntry": "2022-03-05 15:00",
        "dateProcessed": "2022-03-05 16:00"
      }
    ]
  );
}

afterEach(() => {
  vi.useRealTimers();
});


describe('Kitchen', () => {
  it('renders title', () => {
    mockGet()
    render(<Kitchen />);
    expect(screen.findByText('Estado del Pedido')).toBeTruthy()
  });

  it('renders orders',()=>{
    vi.useFakeTimers();
    mockGet()
    render(<Kitchen />);
    vi.advanceTimersByTime(40000);

    waitFor(() => {
      expect(screen.findByText('Orden Nº 2324')).toBeTruthy();
      expect(screen.findByText('Estado: pending')).toBeTruthy();
      expect(screen.findByText('Cantidad: 1')).toBeTruthy();
      expect(screen.findByText('Nombre: Sandwich de jamón y queso')).toBeTruthy();  
      expect(screen.findByText('Cantidad: 1')).toBeTruthy();
      expect(screen.findByText('Nombre: Café americano')).toBeTruthy();    
      expect(screen.findByText('Listo')).toBeTruthy(); 
    });
  });

  it('submit',()=>{
    vi.useFakeTimers();
    mockGet()
    render(<Kitchen />);
    vi.advanceTimersByTime(40000);

    waitFor(() => {
      const button = screen.getByText('Listo');
      fireEvent.click(button);
    })
     
  });
  
  // it.only('submit', async () => {
  //   mockGet();
  //   render(<Kitchen />);

  //   await waitFor(() => {
  //     // await new Promise((resolve) => setTimeout(resolve, 40000));
    
  //     const button = screen.getByText('Listo');
  //     fireEvent.click(button);
  //   })
    
  // }); // Establecer el tiempo de espera a 60000ms (60 segundos)
  

  // it('submit',async ()=>{
  //   mockGet()
  //   render(<Kitchen />);
  //   await new Promise((resolve) => setTimeout(resolve, 40000));
  //     const button = screen.getByText('Listo');
  //     // Simula el clic en el botón
  //        fireEvent.click(button);
    
    
    
  // })
});