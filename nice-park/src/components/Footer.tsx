import { Phone, Send } from "lucide-react";
import { site } from "@/config/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 pb-28 pt-10 md:pb-10">
      <div className="container-x flex flex-col gap-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <Logo />
          <span>
            {site.name}, {site.city} · {site.slogan}
          </span>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          {site.contacts.telegram && (
            <a href={site.contacts.telegramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-taxi">
              <Send className="h-4 w-4" aria-hidden /> Telegram: {site.contacts.telegram}
            </a>
          )}
          <a href={site.contacts.phoneHref} className="-my-2 inline-flex items-center gap-2 py-3 text-base font-semibold text-white transition hover:text-taxi">
            <Phone className="h-4 w-4" aria-hidden /> {site.contacts.phone}
          </a>
        </div>
        <span>© {site.year} {site.name}</span>
      </div>
    </footer>
  );
}
