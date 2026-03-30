import defaultChangelogDataJson from '../data/changelogData.json';
import type { ChangelogEntry, PublicSiteLanguage } from '../content/publicSiteContent';

export type ChangelogDataByLanguage = Record<PublicSiteLanguage, ChangelogEntry[]>;

const defaultChangelogData = defaultChangelogDataJson as ChangelogDataByLanguage;

const cloneData = (
  value: ChangelogDataByLanguage
): ChangelogDataByLanguage => ({
  en: value.en.map((item) => ({ ...item, changes: [...item.changes] })),
  id: value.id.map((item) => ({ ...item, changes: [...item.changes] })),
});

export const getChangelogData = (): ChangelogDataByLanguage => cloneData(defaultChangelogData);
