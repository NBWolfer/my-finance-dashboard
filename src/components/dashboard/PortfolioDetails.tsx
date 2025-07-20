import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  Heading,
  VStack,
  Text,
  Spinner,
  Box,
  SimpleGrid,
} from '@chakra-ui/react';

// Gelen portfolyo verisinin tipini (kısmi olarak) tanımlayalım
interface PortfolioSummary {
  total_cash_balance: number;
  total_assets: number;
  total_accounts: number;
  total_transactions: number;
}

interface UserOidResponse {
    customer_oid: string;
}

export const PortfolioDetails = () => {
  const [summary, setSummary] = useState<PortfolioSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchPortfolioData = async () => {
      if (!user) {
        setError("Please log in to view portfolio details.");
        setLoading(false);
        return;
      }

      try {
        // Kullanıcının customer_oid'sini almak için backend'e istek gönder
        const userOidResponse = await fetch('http://localhost:8000/me', {
          method: 'GET',
          credentials: 'include', // Cookie-based auth
        });

        if (!userOidResponse.ok) {
          throw new Error(`Failed to fetch user OID. Status: ${userOidResponse.status}`);
        }

        const backendRes: UserOidResponse = await userOidResponse.json();

        console.log('User OID Response:', backendRes); 

        // Cookie-based authentication kullanarak backend'den portfolyo verisi al
        const response = await fetch(`http://127.0.0.1:3000/user-portfolio/${backendRes.customer_oid}`, {
          method: 'GET',
          credentials: 'include', // Cookie-based auth
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch portfolio data. Status: ${response.status}`);
        }

        const portfolioData = await response.json();
        setSummary(portfolioData);

      } catch (err: any) {
        setError(err.message || "An unexpected error occurred.");
        
        // Fallback: Mock data for demo purposes
        setSummary({
          total_cash_balance: 50000,
          total_assets: 5,
          total_accounts: 3,
          total_transactions: 25
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, [user]); // user değiştiğinde (login/logout) tekrar çalışır

  if (loading) {
    return (
      <VStack justify="center" align="center" h="100%">
        <Spinner />
        <Text>Loading Portfolio...</Text>
      </VStack>
    );
  }

  if (error) {
    return (
      <Box 
        p={4} 
        bg="red.50" 
        border="1px solid" 
        borderColor="red.200" 
        borderRadius="md"
        color="red.800"
      >
        <Text fontWeight="bold">Error</Text>
        <Text>{error}</Text>
      </Box>
    );
  }

  return (
    <VStack align="stretch" gap={4}>
      <Heading size="md">Portfolio Summary</Heading>
      {summary ? (
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          <Box 
            p={4} 
            bg="blue.50" 
            borderRadius="md" 
            border="1px solid" 
            borderColor="blue.200"
          >
            <Text fontSize="sm" color="blue.600" fontWeight="medium">Total Cash</Text>
            <Text fontSize="2xl" fontWeight="bold" color="blue.800">
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(summary.total_cash_balance)}
            </Text>
          </Box>
          
          <Box 
            p={4} 
            bg="green.50" 
            borderRadius="md" 
            border="1px solid" 
            borderColor="green.200"
          >
            <Text fontSize="sm" color="green.600" fontWeight="medium">Total Assets</Text>
            <Text fontSize="2xl" fontWeight="bold" color="green.800">
              {summary.total_assets}
            </Text>
          </Box>
          
          <Box 
            p={4} 
            bg="purple.50" 
            borderRadius="md" 
            border="1px solid" 
            borderColor="purple.200"
          >
            <Text fontSize="sm" color="purple.600" fontWeight="medium">Bank Accounts</Text>
            <Text fontSize="2xl" fontWeight="bold" color="purple.800">
              {summary.total_accounts}
            </Text>
          </Box>
          
          <Box 
            p={4} 
            bg="orange.50" 
            borderRadius="md" 
            border="1px solid" 
            borderColor="orange.200"
          >
            <Text fontSize="sm" color="orange.600" fontWeight="medium">Total Transactions</Text>
            <Text fontSize="2xl" fontWeight="bold" color="orange.800">
              {summary.total_transactions}
            </Text>
          </Box>
        </SimpleGrid>
      ) : (
        <Text>No portfolio summary available.</Text>
      )}
    </VStack>
  );
};