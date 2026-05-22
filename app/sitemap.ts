import type { MetadataRoute } from "next"
import { departments } from "@/lib/departments"
import { isEnhancedDepartment } from "@/lib/department-rich-content"
import { SITE_URL } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/location`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/warehouse-design`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services/architecture-hydrology-sanitary-geotechnical`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services/structural-reinforcement`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  const departmentRoutes: MetadataRoute.Sitemap = departments.map((dept) => ({
    url: `${SITE_URL}/location/${dept.slug}`,
    lastModified,
    changeFrequency: isEnhancedDepartment(dept.slug) ? ("weekly" as const) : ("monthly" as const),
    priority: isEnhancedDepartment(dept.slug) ? 0.92 : 0.85,
  }))

  return [...staticRoutes, ...departmentRoutes]
}
