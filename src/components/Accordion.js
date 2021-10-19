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
        <Box sx={{ bgcolor: '#fff' }} >
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
                                <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: "bold" }}>
                                    {heading}
                                </Typography>
                                {/* <Typography sx={{ color: 'text.secondary' }}>
                                    {secondaryHeading}
                                </Typography> */}
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ textAlign: "justify", textJustify: "inter-word", }}>
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
