export type SubLinkType = {
  title: string;
  href: string;
  isComingSoon?: boolean;
};

export interface QuickLinkType {
  title: string;
  subLinks: SubLinkType[];
};

export interface SocialLink {
    title: string;
    href: string;
    icon: JSX.Element;
}
