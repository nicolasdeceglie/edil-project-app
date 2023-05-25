import React, { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import WhatDoLeftImage from '../../../images/fq-ask.jpg';

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
            <img src={WhatDoLeftImage} alt="" />
          </Grid>
        </Grid>
        <Grid item md={6} sm={12}>
          <Grid className="theme-heading">
            <span>Some FAQ’s</span>
            <h2>Fequality Ask Question</h2>
          </Grid>
          <Grid className="frequent-ask-accrodian">
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={'root'}
            >
              <ListItem className="collapse_heading" button onClick={handleClick1}>
                <ListItemText primary="Why We Best?" />
                {open1 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={'nested'}>
                    <ListItemText
                      className="collapse_description"
                      primary="There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique."
                    />
                  </ListItem>
                </List>
              </Collapse>
              <ListItem className="collapse_heading" button onClick={handleClick2}>
                <ListItemText primary="Feature With Great Service" />
                {open2 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={'nested'}>
                    <ListItemText
                      className="collapse_description"
                      primary="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
                    />
                  </ListItem>
                </List>
              </Collapse>
              <ListItem className="collapse_heading" button onClick={handleClick3}>
                <ListItemText primary="Great Qustion for our customer" />
                {open3 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={'nested'}>
                    <ListItemText
                      className="collapse_description"
                      primary="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch."
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
