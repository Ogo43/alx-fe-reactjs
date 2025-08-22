import { useState } from "react";

export function useAuth() {
  // Simulate authentication (false means logged out)
  const [isAuthenticated] = useState(true); // Change to false to test redirect
  return { isAuthenticated };
}
