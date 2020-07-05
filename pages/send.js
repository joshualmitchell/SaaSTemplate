import React from 'react';
import {
    ThemeProvider,
    CSSReset,
    theme,
    Heading,
    Flex,
    Stack,
    Link,
    Divider,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Button
} from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';

const Send = () => {
    const auth = useAuth();
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <Heading textAlign="center">Simple Messaging App</Heading>
            <Divider borderColor="blackAlpha.500" />
            <Flex alignItems="flex-start" justifyContent="center">
                <Stack
                    isInline
                    textAlign="left"
                    alignItems="stretch"
                    spacing={4}
                >
                    <Link>My Profile</Link>
                    <Link>My Messages</Link>
                    <Link display="block">Send A Message</Link>
                </Stack>
            </Flex>
            <Divider borderColor="blackAlpha.500" />
            <Flex
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
            >
                <FormControl>
                    <FormLabel>To</FormLabel>
                    <Input />
                    <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
                <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Input />
                    <FormErrorMessage>Error message</FormErrorMessage>
                </FormControl>
                <FormErrorMessage>Error message</FormErrorMessage>
                <Button>Submit</Button>
            </Flex>
        </ThemeProvider>
    );
};

export default Send;
