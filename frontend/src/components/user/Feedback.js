import React from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button
} from '@material-ui/core';

const Feedback = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // Process form data or submit the form
    // ...
  };

  return (
    <Container maxWidth="md" className='container'>
      <section className="mb-4 my-5 card shadow p-5">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Contact us
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Do you have any questions? Please do not hesitate to contact us directly.
          Our team will come back to you within a matter of hours to help you.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="text"
                    id="name"
                    name="name"
                    label="Your name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="email"
                    id="email"
                    name="email"
                    label="Your email"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <TextField
                type="text"
                id="subject"
                name="subject"
                label="Subject"
                fullWidth
              />
              <TextField
                type="text"
                id="message"
                name="message"
                label="Your message"
                multiline
                rows={2}
                fullWidth
              />
              <Button type="submit" variant="contained" color="primary">
                Send
              </Button>
            </form>
            <div className="status" />
          </Grid>
          <Grid item xs={12} md={3} align="center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x" />
                <Typography variant="body1">Lucknow, UTTAR PRADESH</Typography>
              </li>
              <li>
                <i className="fas fa-phone mt-4 fa-2x" />
                <Typography variant="body1">+91123456789</Typography>
              </li>
              <li>
                <i className="fas fa-envelope mt-4 fa-2x" />
                <Typography variant="body1">mauryaakash2000@gmail.com</Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default Feedback;
