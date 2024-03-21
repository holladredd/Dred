import { Masonry } from "@mui/lab";
import {
  Autocomplete,
  Box,
  Card,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import PageTransition from "./../components/PageTransition";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const graphics = [
  {
    id: 1,
    name: "birthday card",
    category: "card",
    src: "https://i.pinimg.com/564x/67/53/0d/67530df95a633ce513512487af25cd02.jpg",
    likes: "",
  },
  {
    id: 2,
    name: "",
    category: "banner",
    src: "https://i.pinimg.com/236x/b1/e4/b1/b1e4b112abd2f3c9497d593889666478.jpg",
    likes: "",
  },
  {
    id: 3,
    name: "",
    category: "flyer",
    src: "https://i.pinimg.com/236x/25/4f/05/254f05a15d7970d53acc528346ce6976.jpg",
    likes: "",
  },
  {
    id: 4,
    name: "",
    category: "artwork",
    src: "https://i.pinimg.com/236x/e0/45/7d/e0457db61202afdcd9b8dd228a18307a.jpg",
    likes: "",
  },
  {
    id: 5,
    name: "",
    category: "banner",
    src: "https://i.pinimg.com/564x/36/b7/96/36b7960658e2e1861b8456de8355cc8d.jpg",
    likes: "",
  },
  {
    id: 6,
    name: "",
    category: "banner",
    src: "https://i.pinimg.com/236x/55/66/3a/55663aaad682fe7f2d7db8efbf8848eb.jpg",
    likes: "",
  },
  {
    id: 7,
    name: "",
    category: "sticker",
    src: "https://i.pinimg.com/236x/50/89/83/508983b06533bddcc00f8559cf809d6d.jpg",
    likes: "",
  },
  {
    id: 8,
    name: "",
    category: "sticker",
    src: "https://i.pinimg.com/236x/05/da/06/05da06cdfa121b00a0a4c4c3760bccff.jpg",
    likes: "",
  },
  {
    id: 9,
    name: "",
    category: "Book Cover",
    src: "https://i.pinimg.com/236x/4c/f4/1e/4cf41e94030f267aebbb500ea5459a4e.jpg",
    likes: "",
  },
  {
    id: 10,
    name: "",
    category: "Book Cover",
    src: "https://i.pinimg.com/236x/54/e6/b5/54e6b59166c0db412e2ef66feda1001d.jpg",
    likes: "",
  },
  {
    id: 11,
    name: "",
    category: "Book Cover",
    src: "https://i.pinimg.com/236x/87/bb/36/87bb36c2dc2451c5601b69f6c64bf0e9.jpg",
    likes: "",
  },
  {
    id: 12,
    name: "",
    category: "Book Cover",
    src: "https://i.pinimg.com/236x/40/d2/06/40d20645a21a917b044d969b92a87f63.jpg",
    likes: "",
  },
  {
    id: 13,
    name: "",
    category: "Book Cover",
    src: "https://i.pinimg.com/236x/e0/7c/94/e07c9477ab2cd9e12fe9394832b249ea.jpg",
    likes: "",
  },
];

// const graphics = graphs.filter((graph) => graph.category === graphs);
const Graphics = () => {
  const subComponent = {
    hidden: {
      y: -50,
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      y: 0,
      scale: 1,

      borderLeft: "0px solid #c7d9f7fd",
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },
    visible2: {
      y: 20,
      scale: 1,
      border: "4px solid #c7d9f7fd",
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },
    visible3: {
      y: 0,
      scale: 1,
      transform: "rotate(-90deg)",
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },
    hover: {
      borderLeft: "6px solid #c7d9f7fd",
      color: "#009b4d",
      // borderRight: "5px solid #c7d9f7fd",
    },
    borderLeft: {
      borderLeft: "5px solid #c7d9f7fd",
      borderBottom: "5px solid #c7d9f7fd",
      color: "#0694c6",
    },
    scaleone: {
      scale: 0.9,
      rotate: 0.5,
      color: "#c5b206be",
      border: "6px solid #c7d9f7fd",
    },
    exit: {
      y: 20,
      opacity: 0,
    },
  };

  return (
    <PageTransition>
      <Box
        sx={{
          overflowY: "scroll",
          height: "90vh",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            color="#c7d9f7fd"
            variant="h3"
            component={motion.div}
            variants={subComponent}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            exit="exit"
            sx={{ width: "fit", fontFamily: "anta" }}
          >
            Graphics.
          </Typography>
        </Box>

        <Masonry
          columns={{ xs: 2, sm: 2, md: 4, lg: 5 }}
          spacing={2}
          sx={{ margin: 2, width: { xs: "90%", md: "95%" } }}
        >
          {graphics.map((graphic, id) => (
            <Card
              component={motion.div}
              variants={subComponent}
              initial="hidden"
              animate="visible2"
              whileHover="scaleone"
              exit="exit"
              key={id}
              sx={{
                border: "4px solid #c7d9f7fd",
                borderRadius: "20px",

                postion: "absolute",
                display: "block",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "inline-block",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <CardMedia
                  component="img"
                  alt={graphic.category}
                  sx={{
                    display: "block",
                    position: "relative",
                    Width: "100%",
                    height: "auto",
                  }}
                  image={graphic.src}
                />
                <Box
                  component={Link}
                  to={graphic.src}
                  sx={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    textDecoration: "none",
                    height: "100%",
                    opacity: 1,
                    "&:hover": {
                      mixBlendMode: "multiply",
                      backgroundColor: "#0003085e",
                    },
                  }}
                >
                  <Typography
                    variant={{ xs: "h5", md: "h3" }}
                    color="#c7d9f7fd"
                    sx={{
                      width: "100%",
                      padding: 2,
                      position: "absolute",
                      bottom: -10,
                      backgroundColor: "#00000063",
                      // boxShadow: "0px 0px 20px #00000063",
                      boxShadow: "0px 1px 5px #aeafb1, 0px -1px 5px #aeafb1",
                      fontFamily: "anta",
                      textTransform: "uppercase",
                      mixBlendMode: "subtract",
                    }}
                  >
                    {graphic.category}
                  </Typography>
                </Box>
              </div>
            </Card>
          ))}
        </Masonry>
      </Box>
    </PageTransition>
  );
};

export default Graphics;
