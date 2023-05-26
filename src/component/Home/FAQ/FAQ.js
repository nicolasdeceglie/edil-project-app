import React, { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import FAQIMAGE from '../../../images/FAQIMAGE.jpg';

const FAQ = () => {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  return (
    <section className="fq-ask-wrap section-padding">
      <Grid container spacing={3} className="websitePadding">
        <Grid item xs={12} md={6} sm={12}>
          <Grid className="fq-ask-banner">
            <img src={FAQIMAGE} alt="" style={{ borderRadius: '8px' }} />
          </Grid>
        </Grid>
        <Grid item md={6} sm={12}>
          <Grid className="theme-heading">
            <span>Alcune domande frequenti</span>
            <h2>FAQ'S</h2>
          </Grid>
          <Grid className="frequent-ask-accrodian">
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={'root'}
            >
              <ListItem className="collapse_heading" button onClick={handleClick1}>
                <ListItemText primary="Perché siamo i migliori?" />
                {open1 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={'nested'}>
                    <ListItemText
                      className="collapse_description"
                      primary="Lorem ipsum dolor sit amet, error insolens reprimique."
                    />
                  </ListItem>
                </List>
              </Collapse>
              <ListItem className="collapse_heading" button onClick={handleClick2}>
                <ListItemText primary="Lorem Ipsum" />
                {open2 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={'nested'}>
                    <ListItemText
                      className="collapse_description"
                      primary="Lorem Ipsum."
                    />
                  </ListItem>
                </List>
              </Collapse>
              <ListItem className="collapse_heading" button onClick={handleClick3}>
                <ListItemText primary="Lorem Ipsum" />
                {open3 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={'nested'}>
                    <ListItemText
                      className="collapse_description"
                      primary="Lorem Ipsum."
                    />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default FAQ;