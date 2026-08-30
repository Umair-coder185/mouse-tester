import Link from "next/link";
import { BreadcrumbLd } from "./JsonLd";

export function Breadcrumb({ items }) {
  return (
    <>
      <BreadcrumbLd items={items} />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground/80 font-medium flex items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div key={item.path} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-foreground" aria-current="page">{item.name}</span>
              ) : (
                <>
                  <Link href={item.path} className="hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                  <span className="text-muted-foreground/40">/</span>
                </>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
