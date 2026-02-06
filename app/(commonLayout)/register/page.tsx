import { RegisterForm } from "@/components/modules/authentication/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="relative min-h-svh flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-primary/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[-5%] w-[35%] h-[35%] rounded-full bg-secondary/5 blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="w-full max-w-sm md:max-w-4xl relative z-10">
        <RegisterForm />
      </div>
    </div>
  );
}