import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { Field } from '@chakra-ui/react';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      login(username);
      navigate('/'); // Giriş başarılı olunca anasayfaya yönlendir
    }
  };

  return (
    <Container centerContent>
      <Box
        w="100%"
        maxW="md"
        p={8}
        mt="20vh"
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
      >
        <VStack as="form" onSubmit={handleLogin} gap={6}>
          <Heading>Login / Sign Up</Heading>
          <Field.Root required>
            <Field.Label>Your Name</Field.Label>
            <Input
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Field.Root>
          <Field.Root>
            <Field.Label>Password</Field.Label>
            <Input type="password" placeholder="(optional for this demo)" />
          </Field.Root>
          <Button type="submit" colorScheme="teal" width="full">
            Login
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};