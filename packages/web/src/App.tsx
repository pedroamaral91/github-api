import { ChakraProvider, Container, Box } from '@chakra-ui/react';
import { Home } from './pages/home/home';

function App() {
  return (
    <ChakraProvider>
      <Box d="flex" bg="gray.800" justifyContent="center" alignItems="center" minW="100vw" minH="100vh" p="10">
        <Container bg="gray.300" borderRadius="10px" maxW="fit-content">
          <Home />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
