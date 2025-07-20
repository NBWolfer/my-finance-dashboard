import { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  VStack,
  Text,
  Spinner,
  SimpleGrid,
} from '@chakra-ui/react';

// Finnhub'dan gelen veri tipini tanımlayalım
interface StockQuote {
  c: number;  // Current price
  d: number;  // Change
  dp: number; // Percent change
  h: number;  // High price of the day
  l: number;  // Low price of the day
  o: number;  // Open price of the day
  pc: number; // Previous close price
  t: number;  // Timestamp
  symbol: string; // Kendi eklediğimiz sembol
}

const API_KEY = 'd1uf41hr01qpci1cb5tgd1uf41hr01qpci1cb5u0';

export const LiveStockData = ({ symbols }: { symbols: string[] }) => {
  const [data, setData] = useState<StockQuote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!API_KEY) {
      setError("Finnhub API key is not configured. Please check your .env file.");
      setLoading(false);
      return;
    }

    const fetchStockData = async () => {
      try {
        const requests = symbols.map(symbol =>
          fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`)
            .then(res => {
              if (!res.ok) {
                throw new Error(`Failed to fetch data for ${symbol}`);
              }
              return res.json();
            })
            .then(quoteData => ({ ...quoteData, symbol })) // Gelen veriye sembolü ekliyoruz
        );

        const results = await Promise.all(requests);
        setData(results);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching stock data.");
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
    // Verileri periyodik olarak yenilemek için bir interval de kurabilirsiniz.
    // Örn: const interval = setInterval(fetchStockData, 60000); // her 60 saniyede bir
    // return () => clearInterval(interval); // bileşen kaldırıldığında interval'ı temizle
  }, [symbols]);

  if (loading) {
    return (
      <VStack justify="center" align="center" h="100%">
        <Spinner size="xl" />
        <Text>Loading Live Data...</Text>
      </VStack>
    );
  }

  if (error) {
    return (
      <Box bg="red.50" border="1px" borderColor="red.200" borderRadius="md" p={4}>
        <Text color="red.600" fontWeight="bold">⚠️ Error</Text>
        <Text color="red.600">{error}</Text>
      </Box>
    );
  }

  return (
    <VStack align="stretch" gap={4}>
      <Heading size="md">Live Stock Data</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
        {data.map((stock) => (
          <Box key={stock.symbol} p={4} borderWidth="1px" borderRadius="md" bg="white">
            <VStack align="stretch" gap={2}>
              <Text fontSize="lg" fontWeight="bold">{stock.symbol}</Text>
              <Text fontSize="2xl" fontWeight="bold">${stock.c?.toFixed(2)}</Text>
              <Box>
                <Text 
                  color={stock.d > 0 ? 'green.500' : 'red.500'} 
                  fontWeight="bold"
                  fontSize="sm"
                >
                  {stock.d > 0 ? '↗️' : '↘️'} {stock.d?.toFixed(2)} ({stock.dp?.toFixed(2)}%)
                </Text>
              </Box>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};