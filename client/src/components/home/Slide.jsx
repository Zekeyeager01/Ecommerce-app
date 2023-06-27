import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, styled, Typography, Button, Divider } from "@mui/material";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)({
  marginTop: "10px",
  background: "#ffffff",
});

const Deal = styled(Box)({
  padding: "15px 20px",
  display: "flex",
});

const Timer = styled(Box)({
  display: "flex",
  marginLeft: "10px",
  alignItems: "center",
  color: "#7f7f7f",
});

const DealText = styled(Typography)({
  fontSize: "22px",
  fontWeight: 600,
  marginRight: "25px",
  lineHeight: "32px",
});

const ViewAllButton = styled(Button)({
  marginLeft: "auto",
  backgroundColor: "#2874f0",
  borderRadius: "2px",
  fontSize: "13px",
});

const Image = styled("img")({
  width: "auto",
  height: 150,
});

const Text = styled(Typography)({
  fontSize: "14px",
  marginTop: "5px",
});

const Slide = ({ products, title, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours} : {minutes} : {seconds} Left
      </Box>
    );
  };

  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img src={timerURL} alt="time clock" style={{ width: 24 }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}

        <ViewAllButton variant="contained" color="primary">
          View All
        </ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((product) => (
          <Link to={`product/${product.id}`} style={{ textDecoration: "none" }}>
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <Image src={product.url} alt="product" />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {product.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{product.discount}</Text>
              <Text style={{ color: "#212121", opacity: ".6" }}>
                {product.tagline}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};

export default Slide;
