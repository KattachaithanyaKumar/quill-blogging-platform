import React, { useState } from "react";
import Modal from "./Modal";
import Input from "../formComponents/Input";
import { loginUser, registerUser } from "../api/AuthAPI";

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
    try {
      setIsLoading(true);
      const res = await loginUser(email, password);

      console.log(res);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async () => {
    try {
      setIsLoading(true);

      if (password !== confirmPassword) {
        console.warn("password dont match");
        return;
      }

      const res = await registerUser(email, password);
      console.log(res);
    } catch (err) {
      console.error(err);
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
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            rightLabel={
              isLogin ? (
                <button className="hover:text-[#1a1a1a] transition-colors">
                  Forgot password?
                </button>
              ) : null
            }
          />

          {!isLogin && (
            <Input
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              rightLabel={
                isLogin ? (
                  <button className="hover:text-[#1a1a1a] transition-colors">
                    Forgot password?
                  </button>
                ) : null
              }
            />
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
