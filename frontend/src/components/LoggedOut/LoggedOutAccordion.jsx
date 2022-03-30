import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const LoggedOutAccordion = () => {
  return (
    <div className="container py-5 text-white">
      <h2 className="accordionTitle text-center">Frequently Asked Questions</h2>
      <div className="my-5">
        <Accordion className="bg-gray radius-0 mb-2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="accordionIcon text-white" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accordionText text-white">
              What is Netflix?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="border-top border-gray border-2">
            <Typography className="accordionText text-white">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices.But not with us.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="bg-gray radius-0 mb-2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="accordionIcon text-white" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accordionText text-white">
              How much does Netflix cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="border-top border-gray border-2">
            <Typography className="accordionText text-white">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all are available but on our site, you do not
              need to pay to enjoy ours .
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="bg-gray radius-0 mb-2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="accordionIcon text-white" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accordionText text-white">
              Where can I watch?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="border-top border-gray border-2">
            <Typography className="accordionText text-white">
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="bg-gray radius-0 mb-2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="accordionIcon text-white" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accordionText text-white">
              How do I cancel?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="border-top border-gray border-2">
            <Typography className="accordionText text-white">
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account لاut you will miss
              a lot.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="bg-gray radius-0 mb-2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="accordionIcon text-white" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="accordionText text-white">
              What can I watch on Netflix?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="border-top border-gray border-2">
            <Typography className="accordionText text-white">
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. But in
              our site, there is only moves and TV shows.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default LoggedOutAccordion;
