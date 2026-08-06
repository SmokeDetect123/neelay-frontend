"use client";

interface DetailFieldProps {
  label: string;
  value?: string | number | null;
}

export default function DetailField({
  label,
  value,
}: DetailFieldProps) {
  return (
    <div className="space-y-1">
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </p>

      <p className="text-sm font-medium break-words">
        {value ?? "-"}
      </p>
    </div>
  );
}