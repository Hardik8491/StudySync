import { redirect } from "next/navigation";
import userAuth from "./userAuth";
import { useSelector } from "react-redux";

interface AdminProtectedProps {
  children: React.ReactNode;
}

export default function AdminProtected({ children }: AdminProtectedProps) {
  const { user } = useSelector((state: any) => state.auth);
  if (user) {
    const isAdmin = user?.role == "admin";

    return isAdmin ? children : redirect("/");
  }
}
