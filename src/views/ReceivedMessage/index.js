import React, { useState, useEffect } from 'react';
import { firestore } from '../../Functions/Firebase';
import { Table, Th, Thead, Tbody, Tr, Td, TableContainer, TableCaption, Flex } from '@chakra-ui/react';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

export const fetchFormSubmissions = async () => {
  const formSubmissionsRef = collection(firestore, 'formSubmissions');

  try {
    const querySnapshot = await getDocs(formSubmissionsRef);

    const formSubmissions = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return formSubmissions;
  } catch (error) {
    console.error('Error fetching form submissions:', error);
    return [];
  }
};

const ReceivedMessage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const submissions = await fetchFormSubmissions();
      setMessages(submissions);
    };

    fetchData();
  }, []);

  const markMessageAsRead = async (messageId) => {
    const messageRef = doc(firestore, 'formSubmissions', messageId);

    try {
      await updateDoc(messageRef, { isNew: false });
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align={{ base: 'center', md: 'center' }}
      justify="center"
      m={5}
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      color="black"
      background="gray.200"
    >
      <TableContainer style={{ overflowY: 'auto', height: '100vh' }}>
        <Table variant="" size="lg" align="center">
          <TableCaption>Received Messages</TableCaption>
          <Thead>
            <Tr>
              <Th>S.No</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone No</Th>
              <Th>Message</Th>
            </Tr>
          </Thead>
          <Tbody>
            {messages.map((message, index) => (
              <Tr key={index} fontWeight={message.isNew ? 'bold' : 'normal'}>
                <Td>{index + 1}</Td>
                <Td>{message.name}</Td>
                <Td>{message.email}</Td>
                <Td>{message.phoneno}</Td>
                <Td>{message.message}</Td>
                {message.isNew && (
                  <Td>
                    <button onClick={() => markMessageAsRead(message.id)}>Mark as Read</button>
                  </Td>
                )}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default ReceivedMessage;
