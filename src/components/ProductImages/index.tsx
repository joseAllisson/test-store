import type { Product } from '../../types/product';

interface ProductImagesProps {
  product: Product;
  selectedImage: number;
  setSelectedImage: (index: number) => void;
}

export function ProductImages({ product, selectedImage, setSelectedImage }: ProductImagesProps) {
  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-xl">
        <img
          src={product.images[selectedImage]}
          alt={`${product.name} - Imagem ${selectedImage + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {product.images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square rounded-xl overflow-hidden shadow-md transition-all ${
              selectedImage === index ? 'ring-2 ring-primary scale-105' : 'hover:scale-105'
            }`}
          >
            <img src={img} alt={`Miniatura ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}