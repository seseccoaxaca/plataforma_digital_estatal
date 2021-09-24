import { Container, Box, Typography} from '@mui/material';

function App(props) {
    const { descripcion="Sin descripcion" } = props;
    return (
    <Box sx={{ py: '5vh', bgcolor: '#cfe8fc' }} >
        <Container>
            <Typography variant="body1" gutterBottom>
                {descripcion}
            </Typography>
        </Container>
    </Box>
    );
  }
  
  export default App;
  