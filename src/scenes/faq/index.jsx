import {Accordion, Box, Typography, useTheme} from "@mui/material";
import Header from "../../components/Header";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {tokens} from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Question Page"/>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An importan question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi debitis, eligendi enim et
                        impedit ipsam iure libero magni molestias natus nobis nulla porro possimus qui quis quos sed
                        sequi.</p>
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Another importan question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi debitis, eligendi enim et
                        impedit ipsam iure libero magni molestias natus nobis nulla porro possimus qui quis quos sed
                        sequi.</p>
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Your favorite question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi debitis, eligendi enim et
                        impedit ipsam iure libero magni molestias natus nobis nulla porro possimus qui quis quos sed
                        sequi.</p>
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Some random question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi debitis, eligendi enim et
                        impedit ipsam iure libero magni molestias natus nobis nulla porro possimus qui quis quos sed
                        sequi.</p>
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    The last question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi debitis, eligendi enim et
                        impedit ipsam iure libero magni molestias natus nobis nulla porro possimus qui quis quos sed
                        sequi.</p>
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
}

export default FAQ;
