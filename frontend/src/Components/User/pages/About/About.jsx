import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, List, ListItem, styled } from '@mui/material';
import AboutImage from './AboutImg';

const SectionTypography = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

const ListItemText = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const AboutUs = () => {
  return (
    <Container maxWidth="xl">
      <AboutImage />
      <SectionTypography variant="h4" component="h1">
        About Us
      </SectionTypography>
      <SectionTypography variant="body1" paragraph>
        Welcome to our hospital management system! We are dedicated to providing
        exceptional healthcare services to our patients and streamlining
        administrative tasks for our staff.
      </SectionTypography>
      <SectionTypography variant="body1" paragraph>
        Our team of experienced doctors, nurses, and administrators work
        tirelessly to ensure the smooth operation of the hospital and the
        highest level of care for our patients.
      </SectionTypography>
      <SectionTypography variant="h5" component="h2">
        Our Mission
      </SectionTypography>
      <SectionTypography variant="body1" paragraph>
        Our mission is to improve the health and well-being of our community by
        providing accessible, high-quality medical services. We strive to
        enhance patient outcomes, promote health education, and implement
        innovative technology solutions to optimize healthcare delivery.
      </SectionTypography>
      <SectionTypography variant="h5" component="h2">
        Our Values
      </SectionTypography>
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="body1">Compassion: We treat every patient with empathy and understanding.</Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="body1">Excellence: We are committed to delivering the highest standard of care.</Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="body1">Integrity: We uphold ethical principles and maintain trust.</Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="body1">Collaboration: We foster teamwork and cooperation among our staff.</Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography variant="body1">Innovation: We embrace new technologies and ideas to advance healthcare.</Typography>
          </ListItemText>
        </ListItem>
      </List>
      <SectionTypography variant="h5" component="h2">
        Contact Us
      </SectionTypography>
      <SectionTypography variant="body1" paragraph>
        If you have any questions, suggestions, or would like to make an
        appointment, please feel free to reach out to us. Our friendly staff
        will be happy to assist you.
      </SectionTypography>
      <SectionTypography variant="body1" paragraph>
        Phone: +91-9777249152
        <br />
        Email: pedamalaya@gmail.com
      </SectionTypography>
    </Container>
  );
};
export default AboutUs;
