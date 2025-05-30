import { Link } from 'react-router';
import { CustomInput } from '../../components/CustomInput';
import { useState } from 'react';
import { Button } from '../../components/Button';

interface FilteredProduct {
  id: number;
  name: string;
  img: string;
  description: string;
}

const mockData = [
  {
    id: 1,
    name: 'Camisa 1',
    img: 'assets/camisa1.jpg',
    description: 'Mais nova camiseta com tal e tal',
  },
  {
    id: 2,
    name: 'Camisa Azul',
    img: 'assets/blue.jpg',
    description: 'Mais nova camiseta com tal e tal',
  },
  {
    id: 3,
    name: 'Camisa 3',
    img: 'assets/white.jpg',
    description: 'Mais nova camiseta com tal e tal',
  },
  {
    id: 4,
    name: 'Camisa Preta',
    img: 'assets/black.jpg',
    description: 'Mais nova camiseta com tal e tal',
  },
];

function Products() {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<FilteredProduct[]>(mockData);

  // const filteredProducts = mockData.filter((product) =>
  //   product.name.toLowerCase().includes(search.toLowerCase())
  // );

  const handleSearch = () => {
    if (!search) {
      setFilteredProducts(mockData);
      return;
    }

    const searchWords = search.toLowerCase().split(' ').filter(Boolean);

    const filteredData = mockData.filter((product) => {
      const productName = product.name.toLowerCase();
      return searchWords.some((word) => {
        return productName.includes(word);
      });
    });

    setFilteredProducts(filteredData);

    // const filteredData = mockData.filter((product) =>
    //   product.name.toLowerCase().includes(search.toLowerCase())
    // );

    // setFilteredProducts(filteredData);
  };

  return (
    <main>
      <section className="max-w-6xl mx-auto flex flex-wrap gap-12">
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex justify-between gap-2">
            <h1 className="text-4xl font-bold">Produtos</h1>
            <div className="flex gap-2">
              <CustomInput
                label="Buscar produtos"
                value={search}
                onChange={({ target }) => setSearch(target.value)}
              />
              <Button
                className="h-[42px] bg-primary text-white px-4 py-2 mt-auto rounded-lg"
                onClick={handleSearch}
              >
                Buscar
              </Button>
            </div>
          </div>

          <section className="grid grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <article className="border p-4 rounded-lg cursor-pointer">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-72 object-cover rounded-lg mb-2"
                  />
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-gray-600">{product.description}</p>
                </article>
              </Link>
            ))}
          </section>

          <div className="flex justify-end gap-2">
            <button className="bg-primary text-white px-4 py-2 rounded-lg">1</button>
            <button className="bg-white text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg">
              2
            </button>
            <button className="bg-white text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg">
              3
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;
