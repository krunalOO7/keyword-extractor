import { Heading,Image,Text } from "@chakra-ui/react"
import LightLogo from '../assets/keyword.png'

const Header = () => {
  return (
    <>
        <Image src={LightLogo} alt="Logo" width={100} marginBottom='1rem'/>
        <Heading color="white" marginBottom='1rem'>
          AI Keyword Extractor
        </Heading>
        <Text fontSize={25} textAlign='center'>
            Paste in your text below and we will extract the keyword for you
        </Text>
    </>
  )
}

export default Header