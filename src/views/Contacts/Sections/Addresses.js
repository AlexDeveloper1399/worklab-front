import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

//icons
import Instagram from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook";
import Mail from "@material-ui/icons/Mail";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Контакты</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Instagram"
              description={<p>Следи за нами и за событиями <a href="https://www.instagram.com/ylsp_teamkg/">здесь</a></p>}
              icon={Instagram}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Facebook"
              description={<p>И <a href="https://www.facebook.com/ylsp.2020/">тут</a></p>}
              icon={Facebook}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Gmail"
              description="Или свяжитесь с нами по электронной почте ylsp.2020@gmail.com"
              icon={Mail}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
