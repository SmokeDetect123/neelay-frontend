import AppLogo from "@/components/common/AppLogo";
import AuthLayout from "@/components/layout/AuthLayout";

import AuthCard from "../components/AuthCard";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
    return (
        <AuthLayout>
            <div className="space-y-8">
                <AppLogo />

                <AuthCard
                    title="Welcome Back"
                    description="Sign in to continue"
                >
                    <LoginForm />
                </AuthCard>
            </div>
        </AuthLayout>
    );
}   