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
    Box,
    Text,
    Badge,
    Image
} from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';
import { Name } from '@/components/';

const Profile = () => {
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
            <Box textAlign="left" />
            <Flex
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Image height="100px" width="100px" />
                <Name />
                <Flex>
                    <Text>Premium Member: </Text>
                    <Badge variant="outline" variantColor="red">
                        No
                    </Badge>
                </Flex>
                <Link>Become A Premium Member</Link>
            </Flex>
        </ThemeProvider>
    );
};

export default Profile;
