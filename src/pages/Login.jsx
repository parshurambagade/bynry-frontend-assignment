import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { signIn } from "../api/auth";
import { useNavigate } from "react-router-dom";

const auth = getAuth();

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", pass: ""});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
           [e.target.name]: e.target.value
        });
        console.log(credentials)
    }

    const handleLogin = async (e) => {
      e.preventDefault();
      try{
        await signIn(email, password);
        navigate('/admin')
      }catch(err){
        console.error(err)
      }
    }
    const {email, password} = credentials;

    
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 py-12 ">
      <div className="w-full max-w-md space-y-8">
        <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 ">
                Sign in to your account
            </h2>
           
        </div>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500"
              id="email"
              autoComplete="email"
              required={true}
              placeholder="admin@example.com"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500  "
              id="password"
              autoComplete="current-password"
              required={true}
              placeholder="pass123"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* <button
                type="button"
                role="checkbox"
                aria-checked="false"
                data-state="unchecked"
                value="on"
                className="peer h-4 w-4 shrink-0 rounded-sm border border-slate-800 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-800 data-[state=checked]:text-slate-800"
                id="remember-me"
              /> */}
              <input
                aria-hidden="true"
                tabIndex={-1}
                type="checkbox"
                defaultValue="on"
                style={{
                //   transform: "translateX(-100%)",
                //   position: "absolute",
                //   pointerEvents: "none",
                //   opacity: 0,
                  margin: "0 0 0 .5rem",
                }}
              />
              <label
                className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2 block text-sm text-gray-900 "
                htmlFor="remember-me"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                className="font-medium text-slate-600 hover:text-slate-500"
                href="#"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-800 text-gray-200 hover:bg-slate-800/90 h-10 px-4 py-2 w-full"
            type="submit"
            onClick={handleLogin}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
