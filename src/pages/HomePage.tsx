import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  VStack,
  Text,
  Button,
  Heading,
} from '@chakra-ui/react';
import { Chatbot } from '../components/Chatbot';
import { AssetChart } from '../components/dashboard/AssetChart';
import { ChatbotResponseDisplay } from '../components/dashboard/ChatbotResponseDisplay';
import { Header } from '../components/layout/Header';
// Yeni bileşeni import edelim
import { LiveStockData } from '../components/dashboard/LiveStockData'; 

const STOCKS_TO_DISPLAY = ['AAPL', 'MSFT', 'GOOGL', 'TSLA'];

export const HomePage = () => {
    const [chatbotResponse, setChatbotResponse] = useState<string | null>(null);

    const handleSendMessage = (message: string) => {
        const response = `You asked about: "${message}". Here is the detailed analysis and data you requested. We are processing your request to show relevant charts and information.`;
        setChatbotResponse(response);
    };

    const handleBackToDashboard = () => {
        setChatbotResponse(null);
    };
    
    const renderDefaultDashboard = () => (
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
        {/* Sol Sütun */}
        <GridItem>
            <VStack gap={6} align="stretch">
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Box p={6}>
                        <AssetChart />
                    </Box>
                </Box>
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Box p={6}>
                        <Heading size="md">Portfolio Details</Heading>
                        <Text mt={2}>Your detailed portfolio information will be shown here.</Text>
                    </Box>
                </Box>
            </VStack>
        </GridItem>
        {/* Sağ Sütun */}
        <GridItem>
            <VStack gap={6} align="stretch">
                {/* ESKİ KODUN YERİNE YENİ BİLEŞENİ KOYUYORUZ */}
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
                  <LiveStockData symbols={STOCKS_TO_DISPLAY} />
                </Box>
                
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Box p={6}>
                        <Heading size="md">Top Strategies</Heading>
                        <Text mt={2}>A list of top-performing investment strategies.</Text>
                    </Box>
                    <Box p={4} mt={2} borderTopWidth="1px">
                        <Button colorScheme="teal" w="100%">View Stock Strategies</Button>
                    </Box>
                </Box>
            </VStack>
        </GridItem>
      </Grid>
    );

    return (
        <Box bg="gray.100" minH="100vh">
            <Header />
            <Container maxW="container.xl" py={10}>
                <Chatbot onSendMessage={handleSendMessage} />
                <Box
                    p={chatbotResponse ? 0 : 6}
                    borderWidth={chatbotResponse ? 0 : '1px'}
                    borderColor="gray.200"
                    borderRadius="lg"
                    bg={chatbotResponse ? 'transparent' : 'white'}
                    boxShadow={chatbotResponse ? 'none' : 'sm'}
                    transition="all 0.3s ease-in-out"
                >
                {chatbotResponse ? (
                    <ChatbotResponseDisplay response={chatbotResponse} onBack={handleBackToDashboard} />
                ) : (
                    renderDefaultDashboard()
                )}
                </Box>
            </Container>
        </Box>
    );
}