// src/components/dashboard/ChatbotResponseDisplay.tsx
import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';

interface ChatbotResponseDisplayProps {
  response: string;
  onBack: () => void; // Geri dönme fonksiyonu için prop
}

export const ChatbotResponseDisplay = ({ response, onBack }: ChatbotResponseDisplayProps) => {
  return (
    <VStack gap={6} align="stretch" p={8} bg="white" borderRadius="lg">
      <Button
        onClick={onBack}
        alignSelf="flex-start"
        variant="ghost"
        colorScheme="teal"
      >
        ← Back to Dashboard
      </Button>
      <Box>
        <Heading size="lg" mb={4}>Chatbot Response</Heading>
        <Text fontSize="md">{response}</Text>
      </Box>
    </VStack>
  );
};