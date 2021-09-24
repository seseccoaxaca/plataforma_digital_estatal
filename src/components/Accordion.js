import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Box, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions(props) {
    const { data } = props;

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ bgcolor: '#cfe8fc' }} >
            <Container sx={{ py: '2vh' }} >
                {data.map(accordion => {
                    const { id, heading, details } = accordion;
                    return (
                        <Accordion
                            expanded={expanded === id}
                            key={id}
                            onChange={handleChange(id)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    {heading}
                                </Typography>
                                {/* <Typography sx={{ color: 'text.secondary' }}>
                                    {secondaryHeading}
                                </Typography> */}
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {details}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    );
                })}
            </Container>
        </Box>
    );
}
