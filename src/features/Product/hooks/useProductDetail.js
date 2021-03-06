import { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await productApi.get(productId);
        setProduct(response);
        console.log(response);
      } catch (error) {
        console.log('Failt to fetch:', error);
      }
      setLoading(false);
    })();
  }, [productId]);

  return { product, loading };
}
