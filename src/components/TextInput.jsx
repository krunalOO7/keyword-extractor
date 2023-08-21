import { useState } from "react"
import { Textarea,Button,useToast } from "@chakra-ui/react"

const TextInput = ({extractKeywords}) => {
    const [textin,setTextIn] = useState("")
    const toast = useToast();

    const submitText = () =>{
       if(textin==='')
       {
        toast({
            title:'test field is empty ',
            description:"Please enter some text",
            status: 'error',
            duration:5000,
            isClosable:false
        }
        )
       }
       else{
        extractKeywords(textin)
       }
    }

  return (
    <>
    <Textarea 
        bg='blue.400'
        color="white"
        padding={4}
        marginTop={6}
        height={200}
        value={textin}
        onChange={(e) =>{
            setTextIn(e.target.value)
        }}
        />
    <Button bg='blue.500'
        color='white'
        marginTop={4}
        width='100%'
        __hover={{bg:'blue.700' }}
        onClick={submitText}>
            Extract Keywords
        
    </Button>
    
    </>
  )
}

export default TextInput