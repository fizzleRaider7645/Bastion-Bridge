const Login = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  return (
    <div>
      <h1>Login</h1>
      <a href={`${backendUrl}/auth/github`}>Login with GitHub</a>
    </div>
  );
};

export default Login;
