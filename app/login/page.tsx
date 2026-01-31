import { Metadata } from "next";
import LoginForm from "@/components/login/login-form";

export const metadata: Metadata = {
    title: "Portal Login",
    description: "Secure access for Konexa staff and administrators.",
};

export default function LoginPage() {
    return <LoginForm />;
}
