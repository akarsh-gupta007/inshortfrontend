import { AppBar, Toolbar, styled } from "@mui/material";

import SideNavBar from "../Navbar/SideNavBar";

const StyledApp = styled(AppBar)`
  background: #fff;
  height: 70px;
`;



const Image = styled("img")({
  height: 55,
  margin: "auto",
  paddingRight: 70,
});

const Header = () => {
  const url =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";

  return (
    <StyledApp>
      <Toolbar>

        <SideNavBar />
        <Image src={url} alt="logo" />
      </Toolbar>
    </StyledApp>
  );
};

export default Header;
