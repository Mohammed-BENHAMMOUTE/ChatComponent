import Chat from "@/components/chat/chat";
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider >
        <Chat />
    </ChakraProvider>
  );
}
