import { useAuth } from '../lib/auth';

const Home = () => {
    const auth = useAuth();
    return (
        <div>
            <main>
                <h1>Simple Messaging App!</h1>
                <p>Current user: {auth?.user?.email} </p>
                <button onClick={(e) => auth.signInWithGoogle()}>
                    Sign In
                </button>
                {auth?.user && (
                    <button onClick={(e) => auth.signOut()}>Sign Out</button>
                )}
            </main>
        </div>
    );
};

export default Home;
