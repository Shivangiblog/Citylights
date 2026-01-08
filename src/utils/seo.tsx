// Utility for setting dynamic SEO meta tags in React (Vite/SPA)
import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export function useSEO({ title, description, keywords, image }: SEOProps) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
    if (keywords) {
      let tag = document.querySelector('meta[name="keywords"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'keywords');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', keywords);
    }
    if (image) {
      let tag = document.querySelector('meta[property="og:image"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', 'og:image');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', image);
    }
  }, [title, description, keywords, image]);
}
