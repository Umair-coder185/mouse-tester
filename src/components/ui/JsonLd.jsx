import { SITE_CONFIG } from "../../lib/site";

export function JsonLd({ type, data }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
    />
  );
}

export function BreadcrumbLd({ items }) {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_CONFIG.url}${item.path}`,
  }));

  return <JsonLd type="BreadcrumbList" data={{ itemListElement }} />;
}
