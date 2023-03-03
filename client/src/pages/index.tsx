import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Post from "@/components/Post";
import { PostProps } from "@/interfaces";

interface HomeProps {
  concerts: PostProps[];
}

export default function Home({ concerts }: HomeProps) {
  return (
    <Container maxWidth='lg'>
      <Header />
      <main>
        <Banner />
      </main>
      {concerts.map((concert) => {
        return (
          <Post
            key={concert.id}
            concert={concert}
          />
        );
      })}
    </Container>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://43.201.134.147:8080/api/concerts");
  const json = await res.json();
  const concerts = json.data;

  return {
    props: {
      concerts,
    },
    revalidate: 100,
  };
}
