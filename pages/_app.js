import { AuthProvider } from '../lib/auth';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import customTheme from '../styles/theme';

const App = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={customTheme}>
            <AuthProvider>
                <CSSReset />
                <Component {...pageProps} />
            </AuthProvider>
        </ThemeProvider>
    );
};

export default App;
