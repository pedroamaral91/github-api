import { ChakraProvider, Container } from '@chakra-ui/react';
import { Home } from './pages/home/home';

function App() {
  return (
    <ChakraProvider>
      <Container d="flex" w="100vw" maxW="100vw" h="100vh" bg="gray.800" justifyContent="center" alignItems="center">
        <Container maxW="90vw" w="90vw" h="80vh" bg="gray.300" borderRadius="10px">
          <Home />
        </Container>
      </Container>
    </ChakraProvider>
  );
}

export default App;
