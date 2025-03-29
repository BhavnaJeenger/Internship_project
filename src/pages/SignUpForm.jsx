import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema for validation
const schema = z.object({
  // email: z.string().email("Please enter a valid email address."),
  email: z
    .string()
    .email("Invalid email address")
    .regex(/\.(in|com)$/, "Email must be from '.in' or '.com' domain"), // Only .in or .com domains allowed
  username: z.string().min(3, "Username must be at least 3 characters"),
  name: z.string().min(5, "Name must be at least 5 characters"),
  password: z.string().min(6, "Password must be at least 6 characters long.").max(12, "Password must not be more than 12 characters"), // Maximum password length,
  /* confirmPassword: z
  .string()
  .min(6, "Password must be at least 6 characters")
  .superRefine(({ confirmPassword }, ctx) => {
    const { password } = ctx.parent;
    // Check if passwords match
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: "Passwords don't match",
        path: ['confirmPassword'],
      });
    }
  }), */

  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .max(15, "Mobile number must not exceed 15 digits"),
  city: z.string().min(5, "City must be at least 5 characters"),
  state: z.string().min(5, "State must be at least 5characters"),
});


// SignUp Page component
const SignUpForm = () => {
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
      <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white-700"
          >
            Full Name
          </label>
          <input
            id="name"
            {...register("name")}
            type="text"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Username */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-white-700"
          >
            Username
          </label>
          <input
            id="username"
            {...register("username")}
            type="text"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white-700"
          >
            Email
          </label>
          <input
            id="email"
            {...register("email")}
            type="email"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white-700"
          >
            Password
          </label>
          <input
            id="password"
            {...register("password")}
            type="password"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>


        {/* Mobile */}
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-medium text-white-700">
            Mobile Number
          </label>
          <input
            id="mobile"
            {...register("mobile")}
            type="text"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
        </div>

        {/* City */}
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-white-700">
            City
          </label>
          <input
            id="city"
            {...register("city")}
            type="text"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
        </div>

        {/* State */}
        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium text-white-700">
            State
          </label>
          <input
            id="state"
            {...register("state")}
            type="text"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
        </div>


        <button
          type="submit"
          className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Sign Up
        </button>

        {/* Sign In Text */}
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/signin"
            className=" py-2 px-3 border rounded-md text-gray-700 hover:text-orange-500 font-semibold"
          >
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};
  
export default SignUpForm;