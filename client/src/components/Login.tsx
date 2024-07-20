import GithubLoginButton from "../atoms/button/GitHubLogin";
import { styled } from "@stitches/react";
import MenuCard from "../atoms/card";

const CenteredContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
});

const Login = () => {
  return (
    <CenteredContainer>
      <MenuCard>
        <GithubLoginButton />
      </MenuCard>
    </CenteredContainer>
  );
};

export default Login;
