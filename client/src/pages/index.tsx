import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

const sections = [
  { title: "About 혈통", url: "#" },
  { title: "역대 공연 리스트", url: "#" },
  { title: "역대 노래 리스트", url: "#" },
  { title: "역대 팀 리스트", url: "#" },
  { title: "가입 문의", url: "#" },
];

export default function Home() {
  return (
    <Container maxWidth='lg'>
      <Header
        title='🔥 화려한 혈통 🔥'
        sections={sections}
      />
      <main>
        <Banner />
      </main>
    </Container>
  );
}
