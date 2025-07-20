// src/components/chatbot/Chatbot.tsx
import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Input,
  Button,
  HStack,
} from '@chakra-ui/react';

interface ChatbotProps {
  onSendMessage: (message: string) => void;
}

export const Chatbot = ({ onSendMessage }: ChatbotProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = async () => {
    // Mesaj gönderme işlemi
    if (inputValue.trim()) {
      try {
        // Python backend'e istek gönder
        const response = await fetch('http://localhost:8000/mcp/query', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Cookie-based auth için gerekli
          body: JSON.stringify({
            query: inputValue
          })
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Response from AI agent:', data);
          // Backend'den gelen yanıtı parent component'e gönder
          // data.response AI agent'tan gelen gerçek yanıt
          // data.source hangi agent'ın kullanıldığını gösterir
          const aiResponse = data.response || 'No response received from AI agent';
          const agentSource = data.source || 'unknown';
          
          onSendMessage(`[${agentSource}]: ${aiResponse}`);
        } else {
          // Hata durumunda kullanıcıya bilgi ver
          const errorData = await response.json();
          onSendMessage(`Error: ${errorData.detail || 'Failed to get response from AI agent'}`);
        }
      } catch (error) {
        console.error('Error sending message:', error);
        onSendMessage(`Error: Failed to connect to AI agent service`);
      }
      
      setInputValue(''); // Input'u temizle
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <Container maxW="container.md" centerContent py={10}>
      <Heading as="h2" size="lg" mb={4}>
        WELCOME
      </Heading>
      <Box w="100%" p={6} border="1px" borderColor="gray.200" borderRadius="lg" bg="white">
        <HStack>
          <Input
            placeholder="Ask me about your portfolio, stocks, or strategies..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button onClick={handleSend} colorScheme="teal">
            Send
          </Button>
        </HStack>
      </Box>
    </Container>
  );
};