import { Button, Text, Heading, Code, Icon, Flex } from '@chakra-ui/core';
import Head from 'next/head';

import { useAuth } from '@/lib/auth';
import ChangeUserEmail from '@/components/ChangeUserEmail.jsx';

const Home = () => {
    const auth = useAuth();
    return (
        <Flex
            as="main"
            direction="column"
            align="center"
            justify="center"
            h="100vh"
        >
            <Head>
                <title>Simple Messaging App</title>
            </Head>
            <Icon name="logo" size="32px" />
            <Heading>Simple Messaging App</Heading>
            <Text>
                Current user:{' '}
                <Code>{auth.user ? auth.user.email : 'None'}</Code>
                <ChangeUserEmail />
            </Text>

            {auth.user ? (
                <Button onClick={(e) => auth.signOut()}>Sign Out</Button>
            ) : (
                <Button onClick={(e) => auth.signInWithGoogle()}>
                    Sign In
                </Button>
            )}
        </Flex>
    );
};

export default Home;
