import LocationPage from "@/components/location-page"
import { departments } from "@/lib/departments"

type LocationPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return departments.map((department) => ({ slug: department.slug }))
}

export default function Page({ params }: LocationPageProps) {
  return <LocationPage slug={params.slug} />
}
