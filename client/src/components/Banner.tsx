import Image from "next/image";
import { Box, Grid, Link, Paper, Typography } from "@mui/material";

export default function Banner() {
  const post = {
    title: "π₯μ¨μ  μ€μ λ½λ°΄λ λμλ¦¬ νλ €ν νν΅",
    description:
      "πΈ1975λλΆν° μ§κΈκΉμ§ μ­ μ΄μ΄μ¨ μ±κ· κ΄λλ₯Ό λννλ μ€μ λ½λ°΄λ νλ €ννν΅μ λ½, λ©νμ μ€μ¬μΌλ‘ μ΄μΏ μ€ν±, ν λ± λ€μν μ₯λ₯΄μ μμμ νλ λμλ¦¬μ΄λ©° μμμ μ’μνμλ λΆλ€μ λκ΅¬λ νμν©λλ€!",
    image: "/assets/images/image_bloodline.jpg",
    imageText: "main image description",
    linkText: "μμΈν λ³΄κΈ°",
  };

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${post.image})`,
      }}
    >
      <Image
        src={post.image}
        alt={post.imageText}
        width={500}
        height={500}
        style={{
          display: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid
          item
          md={6}
        >
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component='h1'
              variant='h3'
              color='inherit'
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography
              variant='h5'
              color='inherit'
              paragraph
            >
              {post.description}
            </Typography>
            <Link
              variant='subtitle1'
              href='#'
            >
              {post.linkText}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
