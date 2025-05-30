import type { AddressInfo } from '../../types/address';

interface ShippingCalculatorProps {
  cepInput: string;
  setCepInput: (cep: string) => void;
  loading: boolean;
  error?: string | null;
  address?: AddressInfo | null;
  handleCepSubmit: (e: React.FormEvent) => void;
}

export function ShippingCalculator({
  cepInput,
  setCepInput,
  loading,
  error,
  address,
  handleCepSubmit,
}: ShippingCalculatorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-700">Verificar disponibilidade</h3>
      <form onSubmit={handleCepSubmit} className="flex gap-2">
        <input
          type="text"
          value={cepInput}
          onChange={(e) => {
            const rawValue = e.target.value.replace(/\D/g, ''); // remove não-dígitos
            const maskedValue = rawValue
              .replace(/^(\d{5})(\d)/, '$1-$2') // insere o traço após o quinto dígito
              .slice(0, 9); // limita a 9 caracteres totais (8 números + 1 traço)

            setCepInput(maskedValue);
          }}
          placeholder="Digite seu CEP"
          maxLength={9}
          className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Verificando...' : 'Verificar'}
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {address && (
        <>
          <p className="text-primary-dark font-bold">Disponível!</p>
          <div className="p-4 bg-primary-light rounded-lg border border-primary-light">
            <p className="font-medium text-primary-dark">Endereço de entrega:</p>
            <p className="text-primary-dark">{address.logradouro}</p>
            <p className="text-primary-dark">{address.bairro}</p>
            <p className="text-primary-dark">{`${address.localidade} - ${address.uf}`}</p>
            <p className="text-primary-dark">{address.cep}</p>
          </div>
        </>
      )}
    </div>
  );
}
