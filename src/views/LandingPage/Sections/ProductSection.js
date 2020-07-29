import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Law from "@material-ui/icons/Gavel";
import It from "@material-ui/icons/Computer";
import Medicine from "@material-ui/icons/Healing";
import SMM from "@material-ui/icons/MovieFilter";
import Journal from "@material-ui/icons/Search";
import InternRel from "@material-ui/icons/Public";
import Finance from "@material-ui/icons/AttachMoney";
import Arch from "@material-ui/icons/AccountBalance";
import Math from "@material-ui/icons/Functions";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Что такое Worklab</h2>
          <h5 className={classes.description}>
          Это масштабный долгосрочный социальный проект,
          направленный на создание сайта-симулятора по профориентации для мололежи, 
          а также на достижение Целей устойчивого развития (ЦУР-4 - Качественное образование)
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>Цель проекта</h3>
          <h5 className={classes.description}>
             Помочь молодежи <b>ВОВРЕМЯ</b> определиться со своей профессией! 
          </h5>
          <h4 className={classes.description}>
            Worklab работает со всеми направлениями, включая
          </h4>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Юриспруденция"
              icon={Law}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Медицина"
              icon={Medicine}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="IT"
              icon={It}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Журналистика"
              icon={Journal}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="SMM, графический дизайн и анимация"
              icon={SMM}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Международные отношения"
              icon={InternRel}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Архитектура, дизайн и строительство"
              icon={Arch}
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Экономика и финансы"
              icon={Finance}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Естественно-технические науки"
              icon={Math}
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
