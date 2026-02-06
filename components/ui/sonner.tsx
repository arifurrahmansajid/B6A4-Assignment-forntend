"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          title: "group-[.toast]:font-semibold",
          description: "group-[.toast]:opacity-90",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          error: "group-[.toast]:!text-destructive-foreground",
          success: "group-[.toast]:!text-success-foreground",
          warning: "group-[.toast]:!text-yellow-950",
          info: "group-[.toast]:!text-primary-foreground",
        },
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
          "--success-bg": "var(--success)",
          "--success-text": "var(--success-foreground)",
          "--error-bg": "var(--destructive)",
          "--error-text": "var(--destructive-foreground)",
          "--info-bg": "var(--primary)",
          "--info-text": "var(--primary-foreground)",
          "--warning-bg": "oklch(0.7 0.15 80)",
          "--warning-text": "oklch(0.15 0.05 160)",
          // Additional mappings for broader compatibility
          "--toast-success-bg": "var(--success)",
          "--toast-success-text": "var(--success-foreground)",
          "--toast-error-bg": "var(--destructive)",
          "--toast-error-text": "var(--destructive-foreground)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
