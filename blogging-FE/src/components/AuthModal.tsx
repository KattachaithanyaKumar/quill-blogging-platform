import React, { useState } from "react";
import Modal from "./Modal";
import { loginUser, registerUser } from "../api/AuthAPI";
import { Input } from "antd";
import toast from "react-hot-toast";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => (isLogin ? handleLogin() : handleSignup());

  const handleLogin = async () => {
    const toastId = toast.loading("Logging in...");
    try {
      setIsLoading(true);
      const res = await loginUser(email, password);
      console.log(res);

      setEmail("");
      setPassword("");

      localStorage.setItem("token", res.token);

      toast.success("User successfully logged in!", { id: toastId });
    } catch (err) {
      console.error(err);
      toast.error("Login failed!", { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async () => {
    const toastId = toast.loading("Creating an account...");
    try {
      setIsLoading(true);
      if (password !== confirmPassword) {
        toast.error("Passwords don't match!", { id: toastId });
        return;
      }
      const res = await registerUser(email, password);
      console.log(res);

      setEmail("");
      setPassword("");
      setConfirmPassword("");

      toast.success("Account created!", { id: toastId });

      setIsLogin(true);
      toast("Login to continue");
    } catch (err) {
      console.error(err);
      toast.error("Account creation failed!", { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setIsLogin(true);
      }}
    >
      <div className="flex flex-col gap-6 pt-2">
        {/* Header */}
        <div className="flex flex-col items-center gap-1">
          <h1
            className="text-2xl font-bold tracking-[-0.5px]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Quill
          </h1>
          <p className="text-sm text-gray-500">
            Welcome back. Sign in to continue.
          </p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-3">
          <label className="flex flex-col gap-1">
            <span className="text-xs font-medium text-gray-600">
              Email address
            </span>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="large"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-xs font-medium text-gray-600">Password</span>
            <Input.Password
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="large"
            />
          </label>

          {!isLogin && (
            <label className="flex flex-col gap-1">
              <span className="text-xs font-medium text-gray-600">
                Confirm password
              </span>
              <Input.Password
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                size="large"
              />
            </label>
          )}
        </div>

        {/* CTA */}
        <button
          className="w-full bg-[#1a1a1a] text-white py-2.5 rounded-full text-sm font-medium hover:opacity-80 transition-opacity cursor-pointer"
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLogin ? "Sign in" : "Sign up"}
        </button>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-[#1a1a1a] font-medium hover:underline cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </Modal>
  );
};

export default AuthModal;
