"use client";

import Link from "next/link";

import type { LucideIcon } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeaderProps {
  title: string;

  description?: string;

  icon?: LucideIcon;

  breadcrumbs?: BreadcrumbItem[];

  actions?: React.ReactNode;

  className?: string;
}

 function PageHeader({
  title,
  description,
  icon: Icon,
  breadcrumbs = [],
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div className={className}>
      {breadcrumbs.length > 0 && (
        <nav className="mb-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {breadcrumbs.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}

              {index < breadcrumbs.length - 1 && (
                <span>/</span>
              )}
            </div>
          ))}
        </nav>
      )}

      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-3">
          {Icon && (
            <div className="rounded-lg border bg-muted p-2">
              <Icon className="h-5 w-5" />
            </div>
          )}

          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {title}
            </h1>

            {description && (
              <p className="mt-1 text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </div>

        {actions && (
          <div className="flex items-center gap-2">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
export {PageHeader};
export default PageHeader;