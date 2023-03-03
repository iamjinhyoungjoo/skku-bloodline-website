import Image from "next/image";
import { Box, Grid, Link, Paper, Typography } from "@mui/material";

export default function Banner() {
  const post = {
    title: "🔥율전 중앙 락밴드 동아리 화려한 혈통",
    description:
      "🎸1975년부터 지금까지 쭉 이어온 성균관대를 대표하는 중앙 락밴드 화려한혈통은 락, 메탈을 중심으로 어쿠스틱, 팝 등 다양한 장르의 음악을 하는 동아리이며 음악을 좋아하시는 분들은 누구나 환영합니다!",
    image: "/assets/images/image_bloodline.jpg",
    imageText: "main image description",
    linkText: "자세히 보기",
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
