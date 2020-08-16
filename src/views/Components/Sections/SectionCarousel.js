import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Popover from "@material-ui/core/Popover";
import Button from "components/CustomButtons/Button.js";

import image1 from "assets/img/medOldSite.png";
import image2 from "assets/img/lowOldSite.png";
import image3 from "assets/img/finance.jpg";

import image4 from "assets/img/enginOldSite.png";
import image5 from "assets/img/itOldSite.png"

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false
  };
  const [anchorElBottom1, setAnchorElBottom1] = React.useState(null);
  const [anchorElBottom2, setAnchorElBottom2] = React.useState(null);
  const [anchorElBottom3, setAnchorElBottom3] = React.useState(null);
  const [anchorElBottom4, setAnchorElBottom4] = React.useState(null);
  const [anchorElBottom5, setAnchorElBottom5] = React.useState(null);

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" onClick={event => setAnchorElBottom1(event.currentTarget)} />
                  <Popover
                    classes={{
                      paper: classes.popover
                    }}
                    open={Boolean(anchorElBottom1)}
                    anchorEl={anchorElBottom1}
                    onClose={() => setAnchorElBottom1(null)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center"
                    }}
                  >
                    <h3 className={classes.popoverHeader}>Ты можешь стать врачом и спасать людям жизнь!</h3>
                    <div className={classes.popoverBody}>
                      <Link to={"/login-page"} className={classes.link}>
                        <Button
                          color="rose"
                          round
                        >
                          Начать
                        </Button>
                      </Link>
                    </div>
                  </Popover>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                    onClick={event => setAnchorElBottom2(event.currentTarget)}
                  />
                  <Popover
                    classes={{
                      paper: classes.popover
                    }}
                    open={Boolean(anchorElBottom2)}
                    anchorEl={anchorElBottom2}
                    onClose={() => setAnchorElBottom2(null)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center"
                    }}
                  >
                    <h3 className={classes.popoverHeader}>Ты можешь стать отличным юристом и представлять в своем лице закон</h3>
                    <div className={classes.popoverBody}>
                      <Link to={"/login-page"} className={classes.link}>
                        <Button
                          color="rose"
                          round
                        >
                          Начать
                        </Button>
                      </Link>
                    </div>
                  </Popover>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" onClick={event => setAnchorElBottom3(event.currentTarget)} />
                  <Popover
                    classes={{
                      paper: classes.popover
                    }}
                    open={Boolean(anchorElBottom3)}
                    anchorEl={anchorElBottom3}
                    onClose={() => setAnchorElBottom3(null)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center"
                    }}
                  >
                    <h3 className={classes.popoverHeader}>Или можешь стать финансистом и управлять деньгами</h3>
                    <div className={classes.popoverBody}>
                      <Link to={"/login-page"} className={classes.link}>
                        <Button
                          color="rose"
                          round
                        >
                          Начать
                        </Button>
                      </Link>
                    </div>
                  </Popover>
                </div>
                <div>
                  <img src={image4} alt="Fourth slide" className="slick-image" onClick={event => setAnchorElBottom4(event.currentTarget)} />
                  <Popover
                    classes={{
                      paper: classes.popover
                    }}
                    open={Boolean(anchorElBottom4)}
                    anchorEl={anchorElBottom4}
                    onClose={() => setAnchorElBottom4(null)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center"
                    }}
                  >
                    <h3 className={classes.popoverHeader}>Инженером и быть крутейшим</h3>
                    <div className={classes.popoverBody}>
                      <Link to={"/login-page"} className={classes.link}>
                        <Button
                          color="rose"
                          round
                        >
                          Начать
                        </Button>
                      </Link>
                    </div>
                  </Popover>
                </div>
                <div>
                  <img src={image5} alt="Fifth slide" className="slick-image" onClick={event => setAnchorElBottom5(event.currentTarget)} />
                  <Popover
                    classes={{
                      paper: classes.popover
                    }}
                    open={Boolean(anchorElBottom5)}
                    anchorEl={anchorElBottom5}
                    onClose={() => setAnchorElBottom5(null)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center"
                    }}
                  >
                    <h3 className={classes.popoverHeader}>Или можешь быть просто всего лишь программистом</h3>
                    <div className={classes.popoverBody}>
                      <Link to={"/login-page"} className={classes.link}>
                        <Button
                          color="rose"
                          round
                        >
                          Начать
                        </Button>
                      </Link>
                    </div>
                  </Popover>
                </div>
              </Carousel>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
