import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function Header() {
  const title = "SKKU BLOODLINE";
  const sections = [
    { title: "ABOUT", url: "/about" },
    { title: "EVENTS", url: "/events" },
    { title: "APPLY", url: "/apply" },
    { title: "FAQ", url: "/faq" },
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
