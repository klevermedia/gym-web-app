import React from "react";
import { Route, Routes }  from "react-router-dom";
import { createTheme, ThemeProvider, Box } from '@mui/material';

import './App.scss'
import Home from './pages/Home';
import ExerciseDetail from './components/ExerciseDetails/ExerciseDetail';
import Footer from './components/Footer/Footer';

const theme = createTheme({
    palette: {
        primary: {
            main: '#090714',
        }
    },
    typography: {
        fontFamily: [
            "Bebas Neue",
            "Inter",
            "Helvetica Neue",
            "Arial",
            "sans-serif"
        ].join(",")
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '18px',
                    letterSpacing: '3px',
                    borderRadius: 0,
                    color: '#CBFF00',
                    borderColor: '#CBFF00',
                    boxShadow: 'none',
                    ['&:hover']: {
                        color: '#FFF',
                        borderColor: 'rgba(255, 255, 255, .3)',
                        boxShadow: 'none',
                    }
                }
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    ['& fieldset']: {
                        borderRadius: 0,
                    },
                }
            },
        },
        
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box width="400px" m="auto" sx={{
                width: { xl: '1448px'},
            }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exercise/:id" element={<ExerciseDetail />} />
                </Routes>
                <Footer />
            </Box>
        </ThemeProvider>
    )
}

export default App;