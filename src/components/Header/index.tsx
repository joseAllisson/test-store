import { Link } from 'react-router';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

export function Header() {
  const { cart, addToCart, removeFromCart } = useCart();
  const [openCart, setOpenCart] = useState(false);
  const quantityProducts = cart.map((item) => item.quantity).reduce((a, b) => a + b, 0);

  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="w-full pr-4 flex items-center justify-between space-x-4">
            <h1 className="text-2xl font-bold">Teste</h1>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-primary-light transition-colors">
                Início
              </Link>
              <Link to="/products" className="hover:text-primary-light transition-colors">
                Produtos
              </Link>
              <Link to="/about" className="hover:text-primary-light transition-colors">
                Sobre
              </Link>
              <Link to="/contact" className="hover:text-primary-light transition-colors">
                Contato
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4 relative">
            <button
              className="relative hover:text-primary transition-colors"
              aria-label="Ver carrinho"
              onClick={() => setOpenCart(!openCart)}
            >
              {/* Badge de quantidade */}
              {quantityProducts > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full text-xs w-5 h-5 flex items-center justify-center shadow-md">
                  {quantityProducts}
                </span>
              )}

              {/* Ícone do carrinho */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>

            <div className={`absolute top-8 right-0 bg-white text-primary rounded-xl shadow-lg p-4 w-72 ${openCart ? 'block' : 'hidden'}`}>
              <p className="font-semibold mb-2">Itens no carrinho:</p>

              <ul className="space-y-3">
                {cart.map((item) => (
                  <li key={item.id} className="flex items-center gap-3">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="bg-red-500 hover:bg-red-600 text-white rounded-full flex justify-center items-center w-6 h-6 text-xs"
                        >
                          -
                        </button>

                        <span className="text-sm font-semibold">{item.quantity}</span>

                        <button
                          onClick={() => addToCart(item)}
                          className="bg-green-500 hover:bg-green-600 text-white rounded-full flex justify-center items-center w-6 h-6 text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
