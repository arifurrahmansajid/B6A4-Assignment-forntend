"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { defaultValues, RegisterFormSchema } from "@/schema/registerSchema";
import { useForm } from "@tanstack/react-form";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
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
        router.push(`/login`)
        // router.push(`/verify-request?email=${encodeURIComponent(value.email)}`);
      } catch (error) {
        toast.error("An unexpected error occurred. Please try again.", {
          id: toastId,
        });
      }
    },
  });
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
              <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
                {path === pathname ? "Join as Partner" : "Create Account"}
              </h1>
              <p className="text-muted-foreground">
                {path === pathname
                  ? "Grow your business with FoodieHub"
                  : "Join the FoodieHub community today"}
              </p>
            </div>

            <FieldGroup className="gap-5">
              <form.Field
                name="name"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field className="animate-fade-up stagger-1">
                      <FieldLabel htmlFor={field.name} className="text-sm font-semibold text-foreground/80">Full Name</FieldLabel>
                      <Input
                        type="text"
                        id={field.name}
                        name={field.name}
                        value={field.state.value ?? ""}
                        placeholder="John Doe"
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
                name="email"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field className="animate-fade-up stagger-2">
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
                    <Field className="animate-fade-up stagger-3">
                      <FieldLabel htmlFor={field.name} className="text-sm font-semibold text-foreground/80">Password</FieldLabel>
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

              <Button type="submit" className="w-full h-12 text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 animate-fade-up stagger-4 mt-2">
                {path === pathname
                  ? "Get Started as Provider"
                  : "Create Account"}
              </Button>

              <FieldDescription className="text-center text-sm mt-4 animate-fade-up stagger-4">
                Already have an account?{" "}
                <Link href="/login" className="text-primary font-bold hover:underline">
                  Log In
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
              <h2 className="text-3xl font-bold mb-4">Elevate your dining experience.</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Connect with the best restaurants and chefs in your area. Freshness and quality guaranteed.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}