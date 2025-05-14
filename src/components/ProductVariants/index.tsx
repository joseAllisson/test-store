import type { Product, ProductVariant } from '../../types/product';

interface ProductVariantsProps {
  product: Product;
  selectedVariant: ProductVariant;
  setSelectedVariant: (variant: ProductVariant) => void;
}

export function ProductVariants({ product, selectedVariant, setSelectedVariant }: ProductVariantsProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium mb-2 text-gray-700">Tamanho</h3>
        <div className="flex gap-2">
          {product.variants.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedVariant({ ...selectedVariant, size })}
              className={`px-4 py-2 border rounded-lg transition-all ${
                selectedVariant.size === size
                  ? 'bg-primary text-white border-primary'
                  : 'hover:border-primary hover:text-primary'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2 text-gray-700">Cor</h3>
        <div className="flex gap-2">
          {product.variants.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedVariant({ ...selectedVariant, color })}
              className={`px-4 py-2 border rounded-lg transition-all ${
                selectedVariant.color === color
                  ? 'bg-primary text-white border-primary'
                  : 'hover:border-primary hover:text-primary'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}