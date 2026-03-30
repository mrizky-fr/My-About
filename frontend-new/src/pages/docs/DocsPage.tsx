import type { ReactNode } from 'react';
import { Terminal } from 'lucide-react';
import PublicSiteFrame from '../../components/layout/PublicSiteFrame';
import PublicStructuredPage from '../../components/layout/PublicStructuredPage';
import {
  AVAILABLE_LAYOUTS,
  AVAILABLE_UI_ELEMENTS,
  DOCS_PAGE_COPY,
  PUBLIC_PAGE_BADGES,
} from '../../content/publicSiteContent';
import { usePublicSiteLanguage } from '../../context/PublicSiteLanguageContext';

const CodeBlock = ({ code }: { code: string }) => (
  <div className="overflow-hidden rounded border border-[#334a34]/10 bg-[#1f2a1f] shadow-[0_12px_30px_rgba(31,42,31,0.16)]">
    <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-white/60">
        <Terminal className="h-4 w-4" />
        Bash
      </div>
    </div>
    <pre className="overflow-x-auto px-4 py-4 text-sm leading-6 text-white/90">
      <code>{code}</code>
    </pre>
  </div>
);

const SectionCard = ({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
}) => (
  <section
    id={id}
    className="scroll-mt-28 rounded border border-gray-200 bg-white/90 p-6 shadow-[0_12px_30px_rgba(51,74,52,0.05)] backdrop-blur sm:p-8"
  >
    <div className="max-w-3xl">
      <h2 className="text-base font-semibold tracking-normal text-[#1f2a1f] sm:text-lg">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-5 text-gray-500 sm:text-[15px] sm:leading-6">{description}</p>
    </div>
    <div className="mt-4 space-y-4">{children}</div>
  </section>
);

const DocsPage = () => {
  const { language } = usePublicSiteLanguage();
  const docsBadge = PUBLIC_PAGE_BADGES.docs;
  const docsPage = DOCS_PAGE_COPY[language];

  return (
    <PublicSiteFrame activeNav="docs">
      <PublicStructuredPage
        badgeIcon={docsBadge.icon}
        badgeText={docsPage.badgeText}
        title={docsPage.title}
        description={docsPage.description}
        sectionTitle={docsPage.sectionTitle}
        sections={docsPage.sections}
        badgeClassName="px-4 py-2 text-[12px] sm:text-[13px]"
        titleSpacingClassName="mt-4"
        descriptionSpacingClassName="mt-1"
        titleClassName="text-base font-semibold leading-6 tracking-normal sm:text-lg"
        descriptionClassName="max-w-3xl text-xs leading-5 tracking-normal text-gray-400 sm:text-xs"
      >
        <SectionCard
          id="overview"
          title={docsPage.overview.title}
          description={docsPage.overview.description}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {docsPage.highlights.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded border border-gray-200 bg-[#fafaf8] p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded bg-[#334a34]/10 text-[#334a34]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#1f2a1f]">{title}</h3>
                <p className="mt-2 text-sm leading-5 tracking-normal text-gray-500 sm:leading-6">{description}</p>
              </article>
            ))}
          </div>

          <div className="rounded border border-[#334a34]/10 bg-[#334a34]/[0.03] p-5">
            <p className="text-sm leading-5 tracking-normal text-gray-600 sm:leading-6">{docsPage.overview.coreLabel}</p>
            <ul className="mt-3 space-y-2 text-sm leading-5 tracking-normal text-gray-600 sm:leading-6">
              {docsPage.overview.coreItems.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </SectionCard>

        <SectionCard
          id="install-starter"
          title={docsPage.installStarter.title}
          description={docsPage.installStarter.description}
        >
          <CodeBlock code={`npx dealtech-ui install my-admin-app`} />

          <div className="rounded border border-gray-200 bg-[#fafaf8] p-5">
            <p className="text-sm font-semibold text-[#1f2a1f]">{docsPage.installStarter.commandSummaryTitle}</p>
            <ol className="mt-3 space-y-2 text-sm leading-5 tracking-normal text-gray-600 sm:leading-6">
              {docsPage.installStarter.steps.map((step, index) => (
                <li key={step}>{index + 1}. {step}</li>
              ))}
            </ol>
          </div>

          <CodeBlock
            code={`cd my-admin-app\nnpm run dev`}
          />
        </SectionCard>

        <SectionCard
          id="add-ui"
          title={docsPage.addUi.title}
          description={docsPage.addUi.description}
        >
          <CodeBlock code={`npx dealtech-ui add button badge modal`} />

          <p className="text-sm leading-5 tracking-normal text-gray-600 sm:leading-6">
            {docsPage.addUi.fileCopyDescription}
          </p>

          <CodeBlock code={`npx dealtech-ui add tabledata-v2`} />

          <div className="rounded border border-[#334a34]/10 bg-[#334a34]/[0.03] p-5 text-sm leading-5 tracking-normal text-gray-600 sm:leading-6">
            {docsPage.addUi.tableDataNote}
          </div>
        </SectionCard>

        <SectionCard
          id="add-layout"
          title={docsPage.addLayout.title}
          description={docsPage.addLayout.description}
        >
          <CodeBlock code={`npx dealtech-ui add-layout admin-layout`} />

          <div className="rounded border border-gray-200 bg-[#fafaf8] p-5">
            <p className="text-sm font-semibold text-[#1f2a1f]">{docsPage.addLayout.copyTitle}</p>
            <ul className="mt-3 space-y-2 text-sm leading-5 tracking-normal text-gray-600 sm:leading-6">
              {docsPage.addLayout.copiedFiles.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </SectionCard>

        <SectionCard
          id="add-page"
          title={docsPage.addPage.title}
          description={docsPage.addPage.description}
        >
          <CodeBlock code={`npx dealtech-ui add-page reports`} />

          <div className="rounded border border-gray-200 bg-[#fafaf8] p-5">
            <p className="text-sm font-semibold text-[#1f2a1f]">{docsPage.addPage.commandSummaryTitle}</p>
            <ul className="mt-3 space-y-2 text-sm leading-5 tracking-normal text-gray-600 sm:leading-6">
              {docsPage.addPage.generatedItems.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </SectionCard>

        <SectionCard
          id="flags"
          title={docsPage.flags.title}
          description={docsPage.flags.description}
        >
          <CodeBlock
            code={`npx dealtech-ui install my-admin-app --no-install\nnpx dealtech-ui install my-admin-app --force\nnpx dealtech-ui add button --force\nnpx dealtech-ui add-layout admin-layout --force`}
          />

          <ul className="space-y-2 text-sm leading-5 tracking-normal text-gray-600 sm:leading-6">
            {docsPage.flags.items.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard
          id="available-ui"
          title={docsPage.availableUi.title}
          description={docsPage.availableUi.description}
        >
          <div className="flex flex-wrap gap-2">
            {AVAILABLE_UI_ELEMENTS.map((item) => (
              <span
                key={item}
                className="rounded border border-gray-200 bg-[#fafaf8] px-3 py-2 text-sm text-gray-600"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="rounded border border-[#334a34]/10 bg-[#334a34]/[0.03] p-5 text-sm leading-5 tracking-normal text-gray-600 sm:leading-6">
            {docsPage.availableUi.aliasesText}
          </div>
        </SectionCard>

        <SectionCard
          id="available-layout"
          title={docsPage.availableLayout.title}
          description={docsPage.availableLayout.description}
        >
          <div className="flex flex-wrap gap-2">
            {AVAILABLE_LAYOUTS.map((item) => (
              <span
                key={item}
                className="rounded border border-gray-200 bg-[#fafaf8] px-3 py-2 text-sm text-gray-600"
              >
                {item}
              </span>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          id="local-development"
          title={docsPage.localDevelopment.title}
          description={docsPage.localDevelopment.description}
        >
          <CodeBlock code={`git clone <this-repo>\ncd dealtech-ui\nnpm link`} />
          <CodeBlock
            code={`dealtech-ui install demo-app\ndealtech-ui add badge\ndealtech-ui add-layout admin-layout`}
          />
        </SectionCard>
      </PublicStructuredPage>
    </PublicSiteFrame>
  );
};

export default DocsPage;
