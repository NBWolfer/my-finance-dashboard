import { Box, Flex, Heading, Spacer, Link, HStack, Button, Text } from '@chakra-ui/react';
import { useAuth } from '../../context/AuthContext';
import { Link as RouterLink } from 'react-router-dom'; // React Router'dan Link import ediyoruz

export const Header = () => {
  const { user, logout } = useAuth();

  return (
    <Box as="header" borderBottom="1px" borderColor="gray.200" px={8} py={4} bg="white">
      <Flex alignItems="center">
        <HStack gap={4}>
          <Heading size="md" color="teal.500">HEADER LOGO</Heading>
          <Heading size="sm" fontWeight="normal">NAME</Heading>
        </HStack>
        <Spacer />
        <HStack gap={6}>
          {user ? (
            <>
              <Text>Welcome, <Text as="span" fontWeight="bold">{user.name}</Text></Text>
              <Button onClick={logout} size="sm" variant="outline">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link asChild fontWeight="bold">
                <RouterLink to="/login">Login</RouterLink>
              </Link>
              <Link asChild bg="teal.400" color="white" px={4} py={2} borderRadius="md">
                <RouterLink to="/login">Sign Up</RouterLink>
              </Link>
            </>
          )}
        </HStack>
      </Flex>
    </Box>
  );
};