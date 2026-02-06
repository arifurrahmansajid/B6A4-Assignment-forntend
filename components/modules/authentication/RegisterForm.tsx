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
import { defaultValues, RegisterFormSchema } from "@/schema/registerSchema";
import { useForm } from "@tanstack/react-form";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { toast } from "sonner";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = React.useState(false);
  const pathname = "/become-provider";
  const path = usePathname();
  const router = useRouter();

  if (path === pathname) {
    defaultValues.role = "provider";
  } else {
    defaultValues.role = "customer";
  }

  const form = useForm({
    defaultValues: defaultValues,
    validators: { onSubmit: RegisterFormSchema },
    onSubmit: async ({ value }: { value: typeof defaultValues }) => {
      const toastId = toast.loading("Creating your account...");
      try {
        const { error } = await authClient.signUp.email(value);
        if (error) {
          toast.error(error.message, { id: toastId });
          return;
        }
        toast.success("Account created! Please Login.", {
          id: toastId,
        });
        router.push(`/login`);
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
          <h1 className="text-3xl font-extrabold tracking-tight">Join FoodieHub</h1>
          <p className="text-sm text-muted-foreground max-w-[280px]">
            {path === pathname
              ? "Become a provider and start growing your business today."
              : "Create an account to start ordering your favorite meals."}
          </p>
        </div>

        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup className="space-y-4">
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field className="space-y-2">
                    <FieldLabel htmlFor={field.name} className="text-sm font-semibold ml-1">Full Name</FieldLabel>
                    <div className="relative">
                      <Input
                        type="text"
                        id={field.name}
                        name={field.name}
                        value={field.state.value ?? ""}
                        placeholder="John Doe"
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="bg-background/50 border-border/50 backdrop-blur-sm h-12 focus:ring-2 focus:ring-primary/20 transition-all rounded-xl pl-10"
                      />
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} className="text-destructive text-xs mt-1 ml-1" />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field className="space-y-2">
                    <FieldLabel htmlFor={field.name} className="text-sm font-semibold ml-1">Email Address</FieldLabel>
                    <div className="relative">
                      <Input
                        type="email"
                        id={field.name}
                        name={field.name}
                        value={field.state.value ?? ""}
                        placeholder="name@example.com"
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="bg-background/50 border-border/50 backdrop-blur-sm h-12 focus:ring-2 focus:ring-primary/20 transition-all rounded-xl pl-10"
                      />
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
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
                    <FieldLabel htmlFor={field.name} className="text-sm font-semibold ml-1">Password</FieldLabel>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        id={field.name}
                        name={field.name}
                        value={field.state.value ?? ""}
                        placeholder="••••••••"
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="pl-10 pr-12 bg-background/50 border-border/50 backdrop-blur-sm h-12 focus:ring-2 focus:ring-primary/20 transition-all rounded-xl"
                      />
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
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

            <Button type="submit" className="w-full h-12 text-base font-bold shadow-lg shadow-primary/20 rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] mt-4">
              {path === pathname
                ? "Create Provider Account"
                : "Create Account"}
            </Button>
          </FieldGroup>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-bold hover:underline transition-colors">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}
