import {
    Box,
    Card,
    Heading,
    Button,
    Flex,
    DrawerHeader,
    DrawerCloseButton,
    Divider,
    DrawerBody,
    useDisclosure,
    Drawer,
    DrawerContent,
    Input,
    InputLeftAddon,
    InputGroup,
    useToast,
} from "@chakra-ui/react";
import React, { useContext, useReducer } from "react";
import { reducer, initialState } from "./store/reducer";
import { StoreContext } from './store/store'
import StudentsTable from './components/Students'
import AddStudents from './components/AddStudents'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [state, dispatch] = useReducer(reducer, initialState);

    const toast = useToast()

    const onComplate = (formikValues) => {
        dispatch({
            type: 'ADD_STUDENT',
            payload: {
                ...formikValues,
                id: uuidv4(),
            },
        })
        toast({
            title: 'Student added to the list!',
            status: 'success',
            position: 'top',
        })
    }

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            <Flex w={'90%'} mx={'auto'} my={'20px'} justifyContent={'space-between'}>
                <Heading fontSize={"32px"}>Students</Heading>
                <Button onClick={onOpen}>Add student</Button>
            </Flex>
            <Box
                w={{
                    base: "100%",
                    md: "90%",
                    lg: "70%",
                }}
                mx={"auto"}
                my={20}
            >
                <Card p={4}>
                    <StudentsTable />
                    <Drawer isOpen={isOpen} onClose={onClose} placement="right" size={'sm'}>
                        <DrawerContent>
                            <DrawerHeader>
                                Add Students
                                <DrawerCloseButton />
                            </DrawerHeader>
                            <Divider />
                            <AddStudents onComplate={onComplate} />
                        </DrawerContent>
                    </Drawer>
                </Card>
            </Box>
        </StoreContext.Provider>
    );
};

export default App;
