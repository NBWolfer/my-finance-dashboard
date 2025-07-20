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

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
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