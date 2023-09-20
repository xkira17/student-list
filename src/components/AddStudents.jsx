import { Box, Button, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import { ErrorMessage, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { addStudentsFormInitialValue } from '../store/reducer'
import { validateInput } from '../validations/inout.validator'

const AddStudents = ({ data = null, onComplate }) => {
    const [initialValue, setInitialValue] = useState(addStudentsFormInitialValue)

    const onAddBtn = (formikValues) => {
        onComplate(formikValues);
    }

    useEffect(() => {
        if (data) {
            setInitialValue(data)
        }
    }, [data])

    return (
        <Box>
            <Formik initialValues={initialValue} onSubmit={onAddBtn} enableReinitialize validationSchema={validateInput()}>
                {
                    (formik) => (
                        <Form >
                            <Flex w={'400px'} mx={'auto'} mt={'20px'}>
                                <FormControl>
                                    <FormLabel>
                                        <Input onChange={e => formik.setFieldValue('name', e.target.value)} value={formik.values.name} name='name' placeholder='Name' />
                                    </FormLabel>
                                    <Text color={'red'}>
                                        <ErrorMessage name='name' />
                                    </Text>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>
                                        <Input name='email' onChange={e => formik.setFieldValue('email', e.target.value)} value={formik.values.email} placeholder='Email' />
                                    </FormLabel>
                                    <Text color={'red'}>
                                        <ErrorMessage name='email' />
                                    </Text>
                                </FormControl>
                            </Flex>
                            <FormControl w={'400px'} mx={'auto'}>
                                <FormLabel>
                                    <Input name='tel' onChange={e => formik.setFieldValue('tel', e.target.value)} value={formik.values.tel} placeholder='Phone number' type='tel' />
                                </FormLabel>
                                <Text color={'red'}>
                                    <ErrorMessage name='tel' />
                                </Text>
                                <Button colorScheme='whatsapp' w={'full'} type='submit'>Add</Button>
                            </FormControl>
                        </Form>
                    )
                }
            </Formik>
        </Box >
    )
}

export default AddStudents