/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Card from "components/Card/Card.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLinkWork}>
          <Button
            href=""
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            {/* <CloudDownload className={classes.icons} /> */}
            Главная
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<CustomDropdown
          noLiPadding
          buttonText="Тест"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Юриспруденция
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              IT
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Медицина
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Экономика и финансы
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Экология
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Международные отношения
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              SMM, графический дизайн и анимация
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Журналистика
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Архитектура, дизайн и строительство
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Естетвенно-технические науки
            </Link>
          ]}
        />*/}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLinkWork}>
          <Button
            href=""
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            {/* <CloudDownload className={classes.icons} /> */}
            Рейтинг ВУЗов
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/contacts" className={classes.navLinkWork}>
          <Button
            href=""
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Контакты
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/about-us" className={classes.navLinkWork}>
          <Button
            href=""
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            О нас
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLinkWork}>
          <Button
            href=""
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            {/* <CloudDownload className={classes.icons} /> */}

           Партнеры
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={"/login-page"} className={classes.link} style={{paddingLeft: "20px"}}>
          <Button
            color="rose"
            round
          >
            Войти
              </Button>
        </Link>

      </ListItem>
    </List>
  );
}
