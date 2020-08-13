import { useState } from 'react';
import { useAuth } from '@/lib/auth';
import {
    Button,
    Text,
    Heading,
    Code,
    Icon,
    Flex,
    Input
} from '@chakra-ui/core';

const ChangeUserEmail = () => {
    const auth = useAuth();
    const [email, setEmail] = useState('');
    const handleChange = (event) => setEmail(event.target.value);

    return (
        <>
            <Input
                value={email}
                placeholder="enter a new email"
                onChange={handleChange}
            />

            {auth.user ? (
                <Button onClick={(e) => auth.updateEmail(email)}>
                    Change Me
                </Button>
            ) : (
                <Button onClick={(e) => auth.signInWithGoogle()}>
                    Sign In
                </Button>
            )}
        </>
    );

    // take the inputted value, and we're going to update the user email in firebase.
};

export default ChangeUserEmail;
