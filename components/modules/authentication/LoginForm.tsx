"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { useForm } from "@tanstack/react-form";
import { Eye, EyeOff, Github, Chrome } from "lucide-react";
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

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="backdrop-blur-xl bg-card/60 border border-border/50 rounded-3xl shadow-2xl p-8 md:p-10 transition-all">
        <div className="flex flex-col items-center gap-2 mb-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-xl shadow-primary/30 rotate-3 mb-4">
            <span className="text-primary-foreground font-black text-3xl -rotate-3">F</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Welcome Back</h1>
          <p className="text-sm text-muted-foreground max-w-[240px]">
            Ready to explore the best food in town? Log in to continue.
          </p>
        </div>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup className="space-y-5">
            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field className="space-y-2">
                    <FieldLabel htmlFor={field.name} className="text-sm font-semibold ml-1">Email Address</FieldLabel>
                    <Input
                      type="email"
                      id={field.name}
                      name={field.name}
                      value={field.state.value ?? ""}
                      placeholder="name@example.com"
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="bg-background/50 border-border/50 backdrop-blur-sm h-12 focus:ring-2 focus:ring-primary/20 transition-all rounded-xl"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} className="text-destructive text-xs mt-1 ml-1" />
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
                  <Field className="space-y-2">
                    <div className="flex items-center justify-between px-1">
                      <FieldLabel htmlFor={field.name} className="text-sm font-semibold">Password</FieldLabel>
                      <Link href="#" className="text-xs text-primary hover:underline font-medium transition-colors">Forgot password?</Link>
                    </div>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        id={field.name}
                        name={field.name}
                        value={field.state.value ?? ""}
                        placeholder="••••••••"
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="pr-12 bg-background/50 border-border/50 backdrop-blur-sm h-12 focus:ring-2 focus:ring-primary/20 transition-all rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} className="text-destructive text-xs mt-1 ml-1" />
                    )}
                  </Field>
                );
              }}
            />

            <Button type="submit" className="w-full h-12 text-base font-bold shadow-lg shadow-primary/20 rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] mt-2">
              Sign In
            </Button>
          </FieldGroup>
        </form>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border/50" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card/60 backdrop-blur-xl px-4 text-muted-foreground font-bold">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-12 border-border/50 bg-background/30 hover:bg-background/50 rounded-xl font-semibold transition-all" type="button">
            <Chrome className="mr-2 h-5 w-5" />
            Google
          </Button>
          <Button variant="outline" className="h-12 border-border/50 bg-background/30 hover:bg-background/50 rounded-xl font-semibold transition-all" type="button">
            <Github className="mr-2 h-5 w-5" />
            Github
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          New to FoodieHub?{" "}
          <Link href="/register" className="text-primary font-bold hover:underline transition-colors dark:text-primary">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
