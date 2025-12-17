import LoginForm from "components/templates/loginFrom/loginForm";

function LoginPage() {
  return (
    <div className="w-screen h-screen flex">
        <LoginForm />
      <div className="w-1/2 h-full bg-primary"></div>
    </div>
  )
}

export default LoginPage