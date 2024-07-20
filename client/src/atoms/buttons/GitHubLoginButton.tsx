import { styled } from "@stitches/react";
import { Primitive } from "@radix-ui/react-primitive";
import { Avatar, Text } from "@radix-ui/themes";

// Define a styled button using Radix
const GitHubButton = styled(Primitive.button, {
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px 20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",

  "&:hover": {
    backgroundColor: "#555",
  },
});

const GitHubLogin = () => {
  const handleLogin = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    window.location.href = `${backendUrl}/auth/github`;
  };

  return (
    <GitHubButton onClick={handleLogin}>
      <Avatar
        size='3'
        src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
        radius='full'
        fallback='T'
      />
      <Text as='div' size='4' color='yellow' weight='bold'>
        Login with GitHub
      </Text>
    </GitHubButton>
  );
};

export default GitHubLogin;
