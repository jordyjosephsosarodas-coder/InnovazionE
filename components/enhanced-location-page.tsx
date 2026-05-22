import { notFound } from "next/navigation"
import { getDepartment } from "@/lib/departments"
import { getDepartmentRichContent } from "@/lib/department-rich-content"
import { EnhancedLocationPageView } from "@/components/enhanced-location-page-view"

type EnhancedLocationPageProps = {
  slug: string
}

export default function EnhancedLocationPage({ slug }: EnhancedLocationPageProps) {
  const department = getDepartment(slug)
  const rich = getDepartmentRichContent(slug)
  if (!department || !rich) {
    notFound()
  }

  return <EnhancedLocationPageView department={department} rich={rich} />
}
