import {
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    CircularProgress,
} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const KeywordModal = ({ keywords, loading, isOpen, closeModal }) => {
    return <>
        <Modal isOpen={isOpen} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Keywords
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody display='flex' alignItems='center' justifyContent='center'>
                    {
                    loading ? (<CircularProgress isIndeterminate color='blue.300' />) : 
                    (<Text>{keywords}</Text>)
                    }
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={closeModal}>
                        close
                    </Button>
                </ModalFooter>
            </ModalContent>

        </Modal>
    </>;
};

export default KeywordModal;
