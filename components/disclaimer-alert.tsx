"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n-context";

interface DisclaimerAlertProps {
  variant?: "default" | "warning";
  title?: string;
  description?: string;
  className?: string;
}

export function DisclaimerAlert({
  variant = "default",
  title,
  description,
  className,
}: DisclaimerAlertProps) {
  const { t } = useI18n();
  const isWarning = variant === "warning";

  const displayTitle = title ?? t("disclaimer_alert_title");
  const displayDescription = description ?? t("disclaimer_alert_description");

  return (
    <Alert
      className={cn(
        isWarning
          ? "bg-amber-50 border-amber-200 text-amber-900"
          : "bg-slate-100 border-slate-200 text-slate-800",
        className
      )}
    >
      {isWarning ? (
        <AlertTriangle className="h-4 w-4 text-amber-600" />
      ) : (
        <Info className="h-4 w-4 text-slate-600" />
      )}
      <AlertTitle className="font-semibold">{displayTitle}</AlertTitle>
      <AlertDescription className="text-sm">
        {displayDescription}
      </AlertDescription>
    </Alert>
  );
}
