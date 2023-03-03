import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

export default function Header() {
  const title = "🔥 화려한 혈통 🔥";
  const sections = [
    { title: "About 혈통", url: "#" },
    { title: "역대 공연 리스트", url: "#" },
    { title: "역대 노래 리스트", url: "#" },
    { title: "역대 팀 리스트", url: "#" },
    { title: "가입 문의", url: "#" },
  ];

  return (
    <>
      <header>
        <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Typography
            component='h2'
            variant='h5'
            color='inherit'
            align='center'
            noWrap
            sx={{ flex: 1 }}
          >
            {title}
          </Typography>
        </Toolbar>
        <Toolbar
          component='nav'
          variant='dense'
          sx={{ justifyContent: "space-between", overflowX: "auto" }}
        >
          {sections.map((section) => (
            <Link
              color='inherit'
              noWrap
              key={section.title}
              variant='body2'
              href={section.url}
              sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </header>
    </>
  );
}
