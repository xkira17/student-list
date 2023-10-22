import {
    Box,
    Button,
    ButtonGroup,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { BsPen } from "react-icons/bs";
import React, { useContext } from "react";
import { StoreContext } from '../store/store'

const StudentsTable = () => {
    const { state, dispatch } = useContext(StoreContext);

    const onDelete = (id) => {
        dispatch({ type: "DELETE_STUDENT", payload: id });
    };

    return (
        <Box>
            <Table variant={"simple"} size={"md"}>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Phone Number</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {state.student?.map((item, index) => (
                        <Tr key={item.id}>
                            <Td>{index}</Td>
                            <Td>{item.name}</Td>
                            <Td>{item.email}</Td>
                            <Td>{item.tel}</Td>
                            <Td>
                                <ButtonGroup isAttached variant={"outline"}>
                                    <Button rightIcon={<BsPen />} colorScheme="green">Edit</Button>
                                    <Button onClick={() => onDelete(item.id)} colorScheme="red">
                                        Delete
                                    </Button>
                                </ButtonGroup>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default StudentsTable;
