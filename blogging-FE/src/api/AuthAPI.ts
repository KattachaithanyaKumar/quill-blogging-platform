const URL = "http://localhost:5000/api/auth";

export const registerUser = async (email: string, password: string) => {
  const res = await fetch(`${URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: email,
      email,
      password,
    }),
  });

  if (!res.ok) {
    throw new Error("Registration failed");
  }

  return res.json();
};

export const loginUser = async (email: string, password: string) => {
  console.log(email, password);
  const res = await fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  return res.json();
};
