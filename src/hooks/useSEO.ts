import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  keywords?: string;
  locale?: "es" | "en";
  canonical?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = "https://www.arrowpointfinancial.com";

function upsertMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const sel = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.querySelector(sel) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (hreflang) el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: Record<string, unknown> | Record<string, unknown>[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export const useSEO = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  keywords,
  locale = "es",
  canonical,
  jsonLd,
}: SEOProps) => {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = locale;

    upsertMeta("description", "name", "description", description);
    if (keywords) upsertMeta("keywords", "name", "keywords", keywords);

    upsertMeta("og:title", "property", "og:title", ogTitle || title);
    upsertMeta("og:description", "property", "og:description", ogDescription || description);
    upsertMeta("og:locale", "property", "og:locale", locale === "en" ? "en_US" : "es_MX");
    if (ogImage) upsertMeta("og:image", "property", "og:image", ogImage);

    upsertMeta("twitter:title", "name", "twitter:title", ogTitle || title);
    upsertMeta("twitter:description", "name", "twitter:description", ogDescription || description);
    if (ogImage) upsertMeta("twitter:image", "name", "twitter:image", ogImage);

    const canon =
      canonical ||
      (typeof window !== "undefined"
        ? `${SITE_URL}${window.location.pathname}`
        : SITE_URL);
    upsertLink("canonical", canon);
    upsertLink("alternate", canon, "es");
    upsertLink("alternate", `${canon}${canon.includes("?") ? "&" : "?"}lang=en`, "en");
    upsertLink("alternate", canon, "x-default");

    if (jsonLd) {
      upsertJsonLd("page-jsonld", jsonLd);
    }
  }, [title, description, ogTitle, ogDescription, ogImage, keywords, locale, canonical, jsonLd]);
};
