import { Box,Image,Text,Flex } from "@chakra-ui/react"
import openAiLogo from '../assets/openai.png'
const Footer = () => {
  return (
    <Box marginTop={50}>
        <Flex justifyContent='center' alignItems='center'>
            <Image src={openAiLogo} alt="openAI logo" marginRight={1}/>
            <Text>
                Powered By Open Ai
            </Text>
        </Flex>

    </Box>
  )
}

export default Footer