import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { isAdmin } from "../utils/user-utils";
import { useNavigate } from "react-router";

const pages = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Report",
    route: "/report",
    isAdminPage: true
  }
];

const Navbar = () => {
  const navigate = useNavigate();
  const isAdminUser = isAdmin();
  let links = pages;
  if (!isAdminUser) {
    links = links.filter(l => !l.isAdminPage);
  }

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: "flex" }}
          >
            CC
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {links.map((page) => (
              <Button
                key={page.title}
                onClick={() => navigate(page.route)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
