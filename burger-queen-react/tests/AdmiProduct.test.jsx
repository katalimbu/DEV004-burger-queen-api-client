import { fireEvent, render, screen } from '@testing-library/react';
import AdmiProduct from '../src/components/Products/AdmiProduct';
import { describe, it, expect, vi } from 'vitest';

const navigateMock = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: () => navigateMock,
}));

vi.mock("../src/components/error/error", async () => {
  const actual = await vi.importActual("../src/components/error/error")
  return {
    ...actual,
    default: () => <div data-testid="route-deny" />
  }
})

vi.mock("../src/components/Products/ProductList", async () => {
  const actual = await vi.importActual("../src/components/Products/ProductList")
  return {
    ...actual,
    default: () => <div data-testid="product-list" />
  }
})


describe('admiProduct', () => {
  it('renders title', () => {
    localStorage.setItem('userRole', 'admin');

    render(<AdmiProduct />);

    expect(screen.getByText('Productos Burguer Queen')).toBeInTheDocument();    
  });

  it('renders ProductList component', () => {
    localStorage.setItem('userRole', 'admin');

    render(<AdmiProduct />);

    expect(screen.getByTestId("product-list")).toBeInTheDocument();    
  });

  it('renders button', () => {
    localStorage.setItem('userRole', 'admin');

    render(<AdmiProduct />);

    expect(screen.getByText('Agregar nuevo producto')).toBeInTheDocument();    
  });

  it('renders RouteDeny component', () => {
    localStorage.setItem('userRole', 'other');

    render(<AdmiProduct />);

    expect(screen.getByTestId("route-deny")).toBeInTheDocument();    
  });

  it('clicks add product button', () => {
    localStorage.setItem('userRole', 'admin');

    render(<AdmiProduct />);

    const button = screen.getByText('Agregar nuevo producto');

    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalled();    
  });
});
