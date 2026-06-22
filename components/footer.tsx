"use client"

import Link from "next/link"
import { Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { departments } from "@/lib/departments"
import { ENHANCED_DEPARTMENT_SLUGS } from "@/lib/department-rich-content"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export function Footer() {
  const { t } = useLanguage()

  const featured = departments.filter((d) => ENHANCED_DEPARTMENT_SLUGS.includes(d.slug))
  const rest = departments.filter((d) => !ENHANCED_DEPARTMENT_SLUGS.includes(d.slug))

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-4 lg:gap-10">
          <div className="xl:col-span-1">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              InnovazionE
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed hyphens-auto text-justify">
              {t.footer.tagline}
            </p>
            <div className="mt-6 space-y-3 text-sm text-primary-foreground/70">
              <p className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 shrink-0" />
                <span>{t.footer.address}</span>
              </p>
              <a
                href="https://wa.me/50235142383"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <WhatsAppIcon className="size-4 shrink-0" />
                <span>{t.footer.phone}</span>
              </a>
              <a
                href={`mailto:${t.footer.email}`}
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Mail className="size-4 shrink-0" />
                <span>{t.footer.email}</span>
              </a>
            </div>
          </div>

          <div className="xl:col-span-2">
            <h3 className="text-sm font-semibold mb-2">{t.footer.featuredDepartmentsTitle}</h3>
            <p className="mb-4 text-xs text-primary-foreground/60 leading-relaxed">
              {t.footer.featuredDepartmentsHint}
            </p>
            <ul className="mb-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              {featured.map((department) => (
                <li key={department.slug}>
                  <Link
                    href={`/location/${department.slug}`}
                    className="text-sm font-medium text-primary-foreground underline-offset-4 hover:underline"
                  >
                    {department.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {rest.map((department) => (
                <Link
                  key={department.slug}
                  href={`/location/${department.slug}`}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {department.name}
                </Link>
              ))}
            </div>
            <Link
              href="/location"
              className="mt-4 inline-block text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground underline-offset-4 hover:underline"
            >
              {t.footer.viewAllDepartments}
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Servicios</h3>
            <div className="space-y-2">
              <Link
                href="/services/warehouse-design"
                className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Diseño de Naves Industriales (Bodegas)
              </Link>
              <Link
                href="/services/infrastructure-design"
                className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Diseño de Todo Tipo de Infraestructura
              </Link>
              <Link
                href="/services/infrastructure-risk-management"
                className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Evaluación y Gestión de Riesgos de Infraestructura Civil
              </Link>
              <Link
                href="/services/architecture"
                className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Arquitectura
              </Link>
              <Link
                href="/services/hydrology"
                className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Hidrología
              </Link>
              <Link
                href="/services/sanitary-engineering"
                className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Ingeniería Sanitaria
              </Link>
              <Link
                href="/services/geotechnical"
                className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Ingeniería Geotécnica
              </Link>
              <Link
                href="/services/structural-reinforcement"
                className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Reforzamiento Estructural
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
