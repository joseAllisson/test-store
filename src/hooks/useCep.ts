import { useState } from 'react';
import type { AddressInfo } from '../types/address';
import { CepRepository } from '../repositories/CepRepository';

export function useCep() {
  const [address, setAddress] = useState<AddressInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAddress = async (cep: string) => {
    if (!cep.match(/^[0-9]{8}$/)) {
      setError('CEP deve conter 8 dígitos numéricos');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await CepRepository.fetchAddress(cep);
      if (data) {
        setAddress(data);
      } else {
        setError('CEP não encontrado');
        setAddress(null);
      }
    } catch {
      setError('Não disponível para esse CEP no momento');
      setAddress(null);
    } finally {
      setLoading(false);
    }
  };

  return { address, loading, error, fetchAddress };
}