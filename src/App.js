import { Box, styled } from '@mui/material';
//components
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Articles from './components/Articles';
import { Routes, Route } from "react-router-dom"
import Indivedual from './components/Indivedual';

const Container = styled(Box)(({ theme }) => ({
  width: '59%',
  margin: '110px auto 0 auto',
  [theme.breakpoints.down('md')]: {
    width: '75%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '85%'
  }
}));

function App() {

  return (
    <Box>
      <Header />
      <Container>
        <InfoHeader />


        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/:id" element={<Indivedual />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
