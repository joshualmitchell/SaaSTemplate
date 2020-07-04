import { useAuth } from '../lib/auth';
import { Button, Text, Heading, Code } from '@chakra-ui/core';
import Head from 'next/head';

const Home = () => {
    const auth = useAuth();
    return (
        <div className="container">
            <Head>
                <title>Simple Messaging App</title>
            </Head>
            <main>
                <Heading>Simple Messaging App!</Heading>
                <Text>
                    Current user: <Code>{auth?.user?.email}</Code>
                </Text>
                <Button onClick={(e) => auth.signInWithGoogle()}>
                    Sign In
                </Button>
                {auth?.user && (
                    <Button onClick={(e) => auth.signOut()}>Sign Out</Button>
                )}
            </main>
        </div>
    );
};

export default Home;
