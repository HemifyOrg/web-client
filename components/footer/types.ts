export type SubLinkType = {
  title: string;
  href: string;
  isComingSoon?: boolean;
};

export interface QuickLinkType {
  title: string;
  subLinks: SubLinkType[];
};
