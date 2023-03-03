import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header({ sections, title }: HeaderProps) {
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
