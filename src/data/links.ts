import { Github, Linkedin, Mail, Twitter, type LucideIcon } from 'lucide-react';

export const EMAIL = 'aniketsingh12090@gmail.com';

/** Served from `public/` — anything there is copied to the site root as-is. */
export const RESUME_HREF = './aniket_singh_ai_engineer.pdf';

export type Social = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const SOCIALS: Social[] = [
  // URL taken from the GitHub profile's own website field — keep the two in sync.
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aniket-singh-954b721a3/',
    icon: Linkedin,
  },
  { label: 'GitHub', href: 'https://github.com/Aniketsingh12', icon: Github },
  { label: 'X', href: 'https://x.com/Stickysuraj', icon: Twitter },
  { label: 'Email', href: `mailto:${EMAIL}`, icon: Mail },
];
