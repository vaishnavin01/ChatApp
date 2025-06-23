import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "/api/user/register";
      const { data: res } = await axios.post(url, data);
      console.log(res.message);
      toast.success(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 300 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg shadow border border-gray-700 p-6 bg-gray-800">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-white mb-6">
          Create an account
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Your email
            </label>
            <input
              onChange={handleChange}
              value={data.email}
              type="email"
              name="email"
              id="email"
              placeholder="name@company.com"
              className="w-full p-2 border rounded-lg bg-gray-700 text-white placeholder-gray-400"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                First Name
              </label>
              <input
                onChange={handleChange}
                value={data.firstName}
                type="text"
                name="firstName"
                id="firstName"
                placeholder="John"
                className="w-full p-2 border rounded-lg bg-gray-700 text-white placeholder-gray-400"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Last Name
              </label>
              <input
                onChange={handleChange}
                value={data.lastName}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Doe"
                className="w-full p-2 border rounded-lg bg-gray-700 text-white placeholder-gray-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Password
            </label>
            <input
              onChange={handleChange}
              value={data.password}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="w-full p-2 border rounded-lg bg-gray-700 text-white placeholder-gray-400"
              required
            />
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 border bg-gray-700"
                required
              />
            </div>
            <div className="ml-3 text-sm text-gray-300">
              <label htmlFor="terms">
                I accept the{" "}
                <a href="#" className="text-indigo-400 hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg px-5 py-2.5 text-center"
          >
            Create an account
          </button>

          <p className="text-sm font-light text-gray-400">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="font-medium text-indigo-400 hover:underline"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
