// src/components/dashboard/ChatbotResponseDisplay.tsx

import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { ReactNode } from 'react';

// Markdown component props interface
interface MarkdownProps {
  children?: ReactNode;
  [key: string]: any;
}

// Markdown etiketlerini Chakra UI component'lerine çevirecek obje
const chakraComponents = {
  h1: (props: MarkdownProps) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props: MarkdownProps) => <Heading as="h2" size="lg" my={4} {...props} />,
  h3: (props: MarkdownProps) => <Heading as="h3" size="md" my={4} {...props} />,
  h4: (props: MarkdownProps) => <Heading as="h4" size="sm" my={3} {...props} />,
  p: (props: MarkdownProps) => <Text fontSize="md" my={2} {...props} />,
  ul: (props: MarkdownProps) => <Box as="ul" my={4} ml={6} {...props} />,
  ol: (props: MarkdownProps) => <Box as="ol" my={4} ml={6} {...props} />,
  li: (props: MarkdownProps) => <Text as="li" mb={1} {...props} />,
  strong: (props: MarkdownProps) => <Text as="strong" fontWeight="bold" {...props} />,
  em: (props: MarkdownProps) => <Text as="em" fontStyle="italic" {...props} />,
  code: (props: MarkdownProps) => (
    <Text 
      as="code" 
      bg="gray.100" 
      px={1} 
      py={0.5} 
      borderRadius="md" 
      fontFamily="mono" 
      fontSize="sm"
      {...props} 
    />
  ),
  blockquote: (props: MarkdownProps) => (
    <Box 
      as="blockquote" 
      borderLeft="4px solid" 
      borderColor="teal.200" 
      pl={4} 
      my={4} 
      fontStyle="italic"
      {...props} 
    />
  ),
  // Diğer etiketler için de eşleştirmeler ekleyebilirsiniz
};

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
        {/* Eski <Text> componenti yerine ReactMarkdown'ı kullanıyoruz */}
        <ReactMarkdown components={chakraComponents}>
          {response}
        </ReactMarkdown>
      </Box>
    </VStack>
  );
};