import { Container, Box, Typography} from '@mui/material';

function App(props) {
    const { descripcion="Sin descripcion" } = props;
    return (
    <Box sx={{ py: '5vh', mb: '2vh', bgcolor: '#E2E2E2' }} >
        <Container>
            <Typography variant="span" gutterBottom>
                {descripcion}
            </Typography>
        </Container>
    </Box>
    );
  }
  
  export default App;
  