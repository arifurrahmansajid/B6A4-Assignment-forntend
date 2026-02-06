"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { useForm } from "@tanstack/react-form";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { toast } from "sonner";
import * as z from "zod";

const LoginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: { onSubmit: LoginFormSchema },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Logging in...");
      try {
        const { error, data } = await authClient.signIn.email(value);
        if (error) {
          toast.error(error.message, { id: toastId });
          return;
        }
        toast.success("Logged in successfully!", {
          id: toastId,
        });
        router.push("/");
      } catch (error) {
        toast.error("An unexpected error occurred. Please try again.", {
          id: toastId,
        });
      }
    },
  });

  const handleGoogleLogin = async () => {
    // const data = await authClient.signIn.social({
    //   provider: "google",
    //   callbackURL: "http://localhost:3000",
    // });
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden border-none shadow-2xl ring-1 ring-border/50 bg-card/80 backdrop-blur-xl">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form
            className="p-8 md:p-12 flex flex-col justify-center animate-fade-up"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <div className="mb-8 text-center md:text-left">
              <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Welcome Back</h1>
              <p className="text-muted-foreground">Enter your credentials to access your account</p>
            </div>

            <FieldGroup className="gap-5">
              <form.Field
                name="email"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field className="animate-fade-up stagger-1">
                      <FieldLabel htmlFor={field.name} className="text-sm font-semibold text-foreground/80">Email Address</FieldLabel>
                      <Input
                        type="email"
                        id={field.name}
                        name={field.name}
                        value={field.state.value ?? ""}
                        placeholder="name@example.com"
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="h-12 bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />

              <form.Field
                name="password"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field className="animate-fade-up stagger-2">
                      <div className="flex items-center justify-between">
                        <FieldLabel htmlFor={field.name} className="text-sm font-semibold text-foreground/80">Password</FieldLabel>
                        <Link href="#" className="text-xs text-primary hover:underline font-medium">Forgot password?</Link>
                      </div>
                      <div className="relative group">
                        <Input
                          type={showPassword ? "text" : "password"}
                          id={field.name}
                          name={field.name}
                          value={field.state.value ?? ""}
                          placeholder="••••••••"
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="pr-12 h-12 bg-background/50 border-border/50 focus:border-primary/50 transition-all duration-300"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 hover:text-foreground transition-colors duration-200"
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />

              <Button type="submit" className="w-full h-12 text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 animate-fade-up stagger-3">
                Sign In
              </Button>

              <div className="relative my-4 animate-fade-up stagger-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border/50"></span>
                </div>
                {/* <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-3 text-muted-foreground font-medium">Or continue with</span>
                </div> */}
              </div>

              {/* <div className="grid grid-cols-1 gap-4 animate-fade-up stagger-4">
                <Button variant="outline" type="button" onClick={handleGoogleLogin} className="h-11 bg-background/50 hover:bg-accent border-border/50 transition-all duration-300 flex items-center justify-center gap-2">
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </Button>
              </div> */}

              <FieldDescription className="text-center text-sm mt-4 animate-fade-up stagger-4">
                New to FoodieHub?{" "}
                <Link href="/register" className="text-primary font-bold hover:underline">
                  Create an account
                </Link>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-black/60 z-10" />
            <Image
              width={800}
              height={800}
              src="/hero-food.jpg"
              alt="Delicious Food"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-10000 hover:scale-110"
              priority
            />
            <div className="absolute bottom-12 left-12 right-12 z-20 text-white animate-fade-up">
              <h2 className="text-3xl font-bold mb-4">Taste the excellence in every bite.</h2>
              <p className="text-white/80 text-lg leading-relaxed">Join thousands of food lovers and enjoy the best culinary experiences delivered right to your door.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}