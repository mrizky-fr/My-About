import type { ReactNode } from 'react';
import Badge from '../ui/badge/Badge';
import type { PageNavItem } from '../../content/publicSiteContent';
import type { LucideIcon } from 'lucide-react';

interface PublicStructuredPageProps {
  badgeIcon: LucideIcon;
  badgeText: string;
  title: string;
  description: string;
  sectionTitle: string;
  sections: PageNavItem[];
  children: ReactNode;
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  titleSpacingClassName?: string;
  descriptionSpacingClassName?: string;
}

const PublicStructuredPage = ({
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  description,
  sectionTitle,
  sections,
  children,
  badgeClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  titleSpacingClassName = 'mt-8',
  descriptionSpacingClassName = 'mt-6',
}: PublicStructuredPageProps) => {
  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="w-full">
        <Badge
          variant="promo"
          className={`px-5 py-2.5 text-[13px] sm:text-sm ${badgeClassName}`}
        >
          <BadgeIcon className="h-4 w-4" />
          <span>{badgeText}</span>
        </Badge>

        <h1
          className={`${titleSpacingClassName} text-[34px] font-semibold leading-tight tracking-normal text-[#1f2a1f] ${titleClassName}`}
        >
          {title}
        </h1>
        <p
          className={`${descriptionSpacingClassName} max-w-4xl text-[15px] leading-5 tracking-normal text-gray-500 sm:text-[17px] sm:leading-6 ${descriptionClassName}`}
        >
          {description}
        </p>
      </div>

      <div className="mt-6 lg:hidden">
        <div className="rounded border border-gray-200 bg-white p-4 shadow-[0_8px_24px_rgba(51,74,52,0.05)]">
          <p className="text-xs font-semibold uppercase tracking-normal text-[#334a34]">
            {sectionTitle}
          </p>
          <nav className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="shrink-0 rounded border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600 transition-colors hover:border-[#334a34]/30 hover:text-[#334a34]"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded border border-gray-200 bg-white/85 p-4 shadow-[0_12px_30px_rgba(51,74,52,0.05)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-normal text-[#334a34]">
              {sectionTitle}
            </p>
            <nav className="mt-4 space-y-1.5">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block rounded px-3 py-2 text-sm text-gray-500 transition-colors hover:bg-[#334a34]/5 hover:text-[#334a34]"
                >
                  <span className="block font-medium">{section.label}</span>
                  {section.description ? (
                    <span className="mt-1 block text-xs text-gray-400">
                      {section.description}
                    </span>
                  ) : null}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <article className="min-w-0 space-y-6">{children}</article>
      </div>
    </section>
  );
};

export default PublicStructuredPage;
