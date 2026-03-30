import PublicSiteFrame from '../../components/layout/PublicSiteFrame';
import PublicStructuredPage from '../../components/layout/PublicStructuredPage';
import {
  type PageNavItem,
  CHANGELOG_PAGE_COPY,
  PUBLIC_PAGE_BADGES,
} from '../../content/publicSiteContent';
import { usePublicSiteLanguage } from '../../context/PublicSiteLanguageContext';
import { getChangelogData } from '../../lib/changelogData';

const ChangelogPage = () => {
  const { language } = usePublicSiteLanguage();
  const changelogBadge = PUBLIC_PAGE_BADGES.changelog;
  const changelogPage = CHANGELOG_PAGE_COPY[language];
  const changelogEntries = getChangelogData()[language];
  const changelogSections: PageNavItem[] = changelogEntries.map((entry) => ({
    id: entry.id,
    label: entry.version,
    description: entry.date,
  }));

  return (
    <PublicSiteFrame activeNav="changelog">
      <PublicStructuredPage
        badgeIcon={changelogBadge.icon}
        badgeText={changelogPage.badgeText}
        title={changelogPage.title}
        description={changelogPage.description}
        sectionTitle={changelogPage.sectionTitle}
        sections={changelogSections}
        badgeClassName="px-4 py-2 text-[12px] sm:text-[13px]"
        titleSpacingClassName="mt-4"
        descriptionSpacingClassName="mt-1"
        titleClassName="text-base font-semibold leading-6 tracking-normal sm:text-lg"
        descriptionClassName="max-w-3xl text-xs leading-5 tracking-normal text-gray-400 sm:text-xs"
      >
        {changelogEntries.map((entry) => (
          <section
            key={entry.id}
            id={entry.id}
            className="scroll-mt-28 rounded border border-gray-200 bg-white/90 p-6 shadow-[0_12px_30px_rgba(51,74,52,0.05)] backdrop-blur sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-normal text-[#334a34]">
                  {changelogPage.releaseLabel}
                </p>
                <h2 className="mt-2 text-[24px] font-semibold tracking-normal text-[#1f2a1f] sm:text-[30px]">
                  {entry.version}
                </h2>
              </div>
              <p className="text-sm text-gray-500">{entry.date}</p>
            </div>

            <p className="mt-5 text-[15px] leading-5 tracking-normal text-gray-500 sm:leading-6">{entry.summary}</p>

            <div className="mt-6 rounded border border-[#334a34]/10 bg-[#334a34]/[0.03] p-5">
              <p className="text-sm font-semibold text-[#1f2a1f]">{changelogPage.mainChangesTitle}</p>
              <ul className="mt-3 space-y-2 text-sm leading-5 tracking-normal text-gray-600 sm:leading-6">
                {entry.changes.map((change) => (
                  <li key={change}>- {change}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </PublicStructuredPage>
    </PublicSiteFrame>
  );
};

export default ChangelogPage;
