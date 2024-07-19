import { styled } from "@stitches/react";
import { Primitive } from "@radix-ui/react-primitive";

// Define a styled button using Radix
const GitHubButton = styled(Primitive.button, {
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px 20px",
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
      <img
        src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
        alt='GitHub Logo'
        width='24'
        height='24'
      />
      Login with GitHub
    </GitHubButton>
  );
};

export default GitHubLogin;
