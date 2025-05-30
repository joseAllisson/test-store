import React, { useState, useEffect, useMemo } from 'react';
import Cookies from 'universal-cookie';
import { useCep } from './hooks/useCep';
import type { Product, ProductVariant } from './types/product';
import { setCookieWithExpiry } from './helper/setCookieWithExpiry';
import { ProductImages } from './components/ProductImages';
import { ProductVariants } from './components/ProductVariants';
import { ShippingCalculator } from './components/ShippingCalculator';
import { useCart } from './context/CartContext';

function App() {
  // const cookies = new Cookies();
  const cookies = useMemo(() => new Cookies(), []);
  const [cepInput, setCepInput] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>({
    size: '',
    color: '',
  });
  const { address, loading, error, fetchAddress } = useCep();

  const { addToCart } = useCart();

  // Simulando dados do produto
  const product: Product = {
    id: '1',
    name: 'Camiseta Básica',
    price: 89.9,
    images: ['/assets/camisa1.jpg', '/assets/camisa2.jpg', '/assets/camisa3.jpg'],
    variants: {
      sizes: ['P', 'M', 'G', 'GG'],
      colors: ['Branco', 'Preto', 'Azul', 'Vermelho'],
    },
  };

  // const [cart, setCart] = useState<CartItem[]>([]);
  // const addToCart = (product: Product) => {
  //   const existingProduct = cart.find((item) => item.id === product.id);
  //   if (existingProduct) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // }

  // Persistência em cookies
  useEffect(() => {
    const savedVariant = cookies.get('selectedVariant');
    const savedCep = cookies.get('cepInput');

    if (savedVariant) {
      setSelectedVariant(savedVariant);
    }
    if (savedCep) {
      setCepInput(savedCep);
    }
  }, [cookies]);

  // Salvar nos Cookies
  useEffect(() => {
    if (selectedVariant?.size || selectedVariant?.color) {
      setCookieWithExpiry('selectedVariant', selectedVariant);
    }
  }, [selectedVariant]);

  useEffect(() => {
    if (cepInput.length === 8) {
      setCookieWithExpiry('cepInput', cepInput);
    }
  }, [cepInput]);

  const handleCepSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cepInput.length === 9) {
      fetchAddress(cepInput.replace('-', ''));
    }
  };

  // fazer buscar no onChange ao inves de no submit
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     if (cepInput.length === 8) {
  //       console.log('cepInput', cepInput);
  //       fetchAddress(cepInput);
  //     }
  //   }, 200);

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [cepInput]);

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductImages
          product={product}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />

        <div className="space-y-6 bg-white p-6 rounded-2xl shadow-lg">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-2xl font-semibold mt-2 text-primary">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>

          <ProductVariants
            product={product}
            selectedVariant={selectedVariant}
            setSelectedVariant={setSelectedVariant}
          />

          <ShippingCalculator
            cepInput={cepInput}
            setCepInput={setCepInput}
            loading={loading}
            error={error}
            address={address}
            handleCepSubmit={handleCepSubmit}
          />

          <div className="flex justify-end mt-auto">
            <button
              onClick={() => addToCart(product)}
              className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50"
            >
              + Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
