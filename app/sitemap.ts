import { MetadataRoute } from "next"
import { siteUrl } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/products",
    "/contact",
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))
}

