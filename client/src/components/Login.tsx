import GithubLoginButton from "../atoms/buttons/GitHubLoginButton";
import { styled } from "@stitches/react";
import MenuCard from "../atoms/cards/MenuCard";
import { Heading } from "@radix-ui/themes";

// Define a styled container for centering with column direction
const CenteredContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
  gap: "150px", // Optional: Add some space between the heading and the card
});

const Login = () => {
  return (
    <CenteredContainer>
      <Heading color='yellow' as='h1'>
        Bastion Bridge
      </Heading>
      <MenuCard>
        <GithubLoginButton />
      </MenuCard>
    </CenteredContainer>
  );
};

export default Login;
