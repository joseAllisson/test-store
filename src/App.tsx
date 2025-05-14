import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useCep } from './hooks/useCep';
import type { Product, ProductVariant } from './types/product';
import { setCookieWithExpiry } from './helper/setCookieWithExpiry';
import { Header } from './components/Header';
import { ProductImages } from './components/ProductImages';
import { ProductVariants } from './components/ProductVariants';
import { ShippingCalculator } from './components/ShippingCalculator';
import { Footer } from './components/Footer';

function App() {
  const cookies = new Cookies();
  const [cepInput, setCepInput] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>({
    size: '',
    color: ''
  });
  const { address, loading, error, fetchAddress } = useCep();

  // Simulando dados do produto
  const product: Product = {
    id: '1',
    name: 'Camiseta Básica',
    price: 89.90,
    images: [
      '/assets/camisa1.jpg',
      '/assets/camisa2.jpg',
      '/assets/camisa3.jpg',
    ],
    variants: {
      sizes: ['P', 'M', 'G', 'GG'],
      colors: ['Branco', 'Preto', 'Azul', 'Vermelho']
    }
  };

  // Persistência em cookies
  useEffect(() => {
    const savedVariant = cookies.get('selectedVariant');
    const savedCep = cookies.get('cepInput');

    if (savedVariant) {
      setSelectedVariant(savedVariant);
    }
    if (savedCep) {
      setCepInput(savedCep);
      fetchAddress(savedCep);
    }
  }, []);

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
    if (cepInput.length === 8) {
      fetchAddress(cepInput);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-8 flex-grow">
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
                  currency: 'BRL'
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;