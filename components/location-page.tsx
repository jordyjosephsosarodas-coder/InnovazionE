import Link from "next/link"
import { notFound } from "next/navigation"
import { getDepartment } from "@/lib/departments"
import { LocationPageView } from "@/components/location-page-view"

type LocationPageProps = {
  slug: string
}

export default function LocationPage({ slug }: LocationPageProps) {
  const department = getDepartment(slug)
  if (!department) {
    notFound()
  }

  return <LocationPageView department={department} />
}
