import { siteUrl } from "@/lib/constants"

export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nature by Nurtura",
    url: siteUrl,
    logo: `${siteUrl}/logo 7.png`,
    description:
      "Premium herbal wellness products crafted with intention. Potent, precise, and pure herbal supplements for energy, immunity, balance, and vitality.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "Naturebynurtura@gmail.com",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.instagram.com/naturebynurtura",
    ],
    areaServed: ["GH", "NG"], // Ghana and Nigeria
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nature by Nurtura",
    url: siteUrl,
    description:
      "Premium herbal wellness products crafted with intention. Potent, precise, and pure.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/products?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function ProductStructuredData({
  name,
  description,
  image,
  price,
  priceCurrency = "GHS",
  availability = "https://schema.org/InStock",
  sku,
}: {
  name: string
  description: string
  image: string
  price: string
  priceCurrency?: string
  availability?: string
  sku?: string
}) {
  const priceValue = parseFloat(price.replace(/[^0-9.]/g, ""))

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `${siteUrl}${image}`,
    brand: {
      "@type": "Brand",
      name: "Nature by Nurtura",
    },
    offers: {
      "@type": "Offer",
      price: priceValue,
      priceCurrency,
      availability,
      url: `${siteUrl}/products`,
      seller: {
        "@type": "Organization",
        name: "Nature by Nurtura",
      },
    },
    ...(sku && { sku }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: Array<{ name: string; url: string }>
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

