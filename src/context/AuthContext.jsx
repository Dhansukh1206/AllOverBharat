import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("alloverbharat_auth_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authCallback, setAuthCallback] = useState(null);

  const loginWithMobile = (phone, name = "") => {
    const cleanPhone = phone.trim();
    const formattedPhone = cleanPhone.startsWith("+91")
      ? cleanPhone
      : `+91 ${cleanPhone.replace(/^0+/, "")}`;

    const userName = name.trim() || "Traveler";
    const nameParts = userName.split(" ");
    const firstName = nameParts[0] || "Traveler";
    const lastName = nameParts.slice(1).join(" ") || "";

    const userData = {
      phone: formattedPhone,
      name: userName,
      firstName,
      lastName,
      email: `${firstName.toLowerCase()}@luxurybharat.in`,
      membershipTier: "Club Bharat Connoisseur",
      memberSince: new Date().getFullYear().toString(),
      isLoggedIn: true,
    };

    setUser(userData);
    try {
      localStorage.setItem("alloverbharat_auth_user", JSON.stringify(userData));
      const existingProfile = localStorage.getItem("alloverbharat_user_profile");
      if (!existingProfile) {
        localStorage.setItem("alloverbharat_user_profile", JSON.stringify(userData));
      }
    } catch (err) {
      console.error(err);
    }

    if (authCallback) {
      authCallback(userData);
      setAuthCallback(null);
    }
    setAuthModalOpen(false);
    return userData;
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem("alloverbharat_auth_user");
    } catch (err) {
      console.error(err);
    }
  };

  const updateUser = (updates) => {
    setUser((prev) => {
      const updated = { ...prev, ...updates };
      try {
        localStorage.setItem("alloverbharat_auth_user", JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
      return updated;
    });
  };

  const requireAuth = (callback) => {
    if (user && user.isLoggedIn) {
      if (callback) callback(user);
      return true;
    }
    if (callback) {
      setAuthCallback(() => callback);
    }
    setAuthModalOpen(true);
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user?.isLoggedIn,
        loginWithMobile,
        logout,
        updateUser,
        requireAuth,
        authModalOpen,
        setAuthModalOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

