import React, { useState } from 'react';
import {
  Heading,
  Input,
  Textarea,
  FormControl,
  Button,
  Flex, useTheme, useToast
} from '@chakra-ui/react';
import { firestore } from '../Functions/Firebase';
import { addDoc , collection } from 'firebase/firestore';
import {toastSuccess, toastError} from '../helpers/toast'

const ShortForm = () => {
  const toast = useToast()
  const theme = useTheme();
  const ref = collection(firestore, "formSubmissions")
  const bgColor = theme.colors.brand[800];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      addDoc(ref, {...formData,timestamp: new Date()})

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      toast(toastSuccess('Form Submit successful!'));
    } catch (error) {
      console.log(error)
      toast(toastError('Form submission failed.'))
    }
  };

  return (
    <Flex direction={"column"} align={"center"}
    justify="space-between"  
    p={10}
    m={5}
    borderWidth="1px"
    borderRadius="lg"
    boxShadow="lg"
    color="black"
    bgColor={bgColor}
    >  <Flex gap={3} align={"center"}>
      <Heading mb={4} fontSize="2xl" fontStyle={"italic"} color={"white"} >
      Contact Us Today! 
      </Heading>
      </Flex>  
      <Heading fontSize="1xl" color={"white"} fontStyle={"italic"} mb={6}>
      For more information or to contact us, call us at <strong>(909) 499-9590</strong> or fill out the form below. Thank you!
      </Heading>
      <Flex direction={"column"} alignItems={"center"}>
      <form onSubmit={handleSubmit}>
        <FormControl bg={"white"} >
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Name:"
            value={formData.name}
            onChange={handleChange}
            isRequired
          />
        </FormControl>
        <FormControl bg={"white"}  mt={5}>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email:"
            value={formData.email}
            onChange={handleChange}
            isRequired
          />
        </FormControl>
        <FormControl bg={"white"}  mt={5}>
          <Input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone:"
            value={formData.phone}
            onChange={handleChange}
            isRequired
          />
        </FormControl>
        <FormControl bg={"white"} mb={5} mt={5}>
          <Textarea
            id="message"
            name="message"
            placeholder="Message:"
            value={formData.message}
            onChange={handleChange}
            isRequired
          />
        </FormControl>
        <Button type="submit" w={60} p={6} bg={"black"} colorScheme={"white"} fontStyle={"italic"}>Submit</Button>
      </form>
      </Flex>
    </Flex>
  );
};

export default ShortForm;
