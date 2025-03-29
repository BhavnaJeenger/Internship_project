import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema for validation
const schema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
});

// SignIn Page component
const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Sign In
        </button>

        {/* Sign Up Text */}
        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href="/signup"
            className=" py-2 px-3 border rounded-md text-gray-700 hover:text-orange-500 font-semibold"
          >
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
