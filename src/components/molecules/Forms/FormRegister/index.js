import React, { useState } from "react";
import { Gap } from "../../..";
import axios from "axios";
import { url } from "../../../../config/api";
import { useHistory } from "react-router";

const FormRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("User");
  const [hostName, setHostName] = useState("");

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      phone,
      addressDetail: address,
      role,
      hostName
    }

    axios.post(`${url.auth}/register`, data)
      .then(result => {
        alert(result.data.message);
        history.push("/login")
      })
      .catch(error => {
        alert("Bad Request");
        console.log(error);
      })
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 items-center">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Register your account
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="font-semibold">
                  Username
                </label>
                <input
                  id="username"
                  name="name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <Gap height={20} />
              <div className="mb-4">
                <label htmlFor="email-address" className="font-semibold">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <Gap height={20} />
              <div>
                <label htmlFor="password" className="font-semibold">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <Gap height={20} />
              <div>
                <label htmlFor="phone" className="font-semibold">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="e.g 08xx-xxxx-xxxx"
                />
              </div>
              <Gap height={20} />
              <div>
                <label htmlFor="address" className="font-semibold">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <Gap height={20} />
              <div>
                <label htmlFor="role" className="font-semibold">
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  className="appereance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  onClick={e => {
                    setRole(e.target.value);
                    setHostName("");
                  }}
                >
                  <option value="User">User</option>
                  <option value="Hosted">Hosted</option>
                </select>
              </div>

              {role !== "Hosted" ? '' : (
                <div>
                  <Gap height={20} />
                  <div className="mb-4">
                    <label htmlFor="host-name" className="font-semibold">
                      Host Name
                    </label>
                    <input
                      id="host-name"
                      name="host-name"
                      type="text"
                      value={hostName}
                      onChange={e => setHostName(e.target.value)}
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    />
                  </div>
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                onClick={onSubmit}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>
          <div className="my-0">
            <a href="/login">
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormRegister;
