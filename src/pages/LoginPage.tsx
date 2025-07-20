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

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        // ***************************************************************
        // EN ÖNEMLİ DEĞİŞİKLİK BURASI
        // Tarayıcının cookie'leri göndermesi ve sunucudan gelen
        // cookie'leri set etmesi (saklaması) için bu ayar zorunludur.
        credentials: 'include',
        // ***************************************************************
      });

      const data = await response.json();

      if (!response.ok) {
        // Hata mesajını backend'den gelen yanıttan alıyoruz.
        throw new Error(data.message || 'Kullanıcı adı veya şifre hatalı.');
      }

      // Başarılı durumda backend cookie'yi set etti.
      // Artık token'ı manuel olarak almamıza gerek yok.
      // Sadece AuthContext'teki durumu "giriş yapıldı" olarak güncelliyoruz.
      // Backend'den dönen kullanıcı bilgisini (data.user vb.) context'e gönderebiliriz.
      // Örnek olarak kullanıcı adını gönderiyoruz.
      login(username); // Veya login(data.user)

      navigate('/'); // Anasayfaya yönlendir
      
    } catch (error) {
      console.error('Login error:', error);
      setError(error instanceof Error ? error.message : 'Bir sorun oluştu.');
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
          <Box width="100%">
            <label htmlFor="username">Username</label>
            <Input
              id="username"
              required
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box width="100%">
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              type="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          {error && (
            <Box color="red.500" width="100%">
              {error}
            </Box>
          )}
          <Button type="submit" colorScheme="teal" width="full">
            Login
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};