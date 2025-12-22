import LoginForm from "components/templates/loginFrom/loginForm";

function LoginPage() {
  return (
    <div className="w-screen h-screen p-6">
      <div className="border-2 border-background-thin rounded-2xl size-full p-6 flex">
        <LoginForm />
        <div className="w-1/2 h-full bg-background-thick rounded-2xl"></div>
      </div>
    </div>
  )
}

export default LoginPage