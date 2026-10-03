import { useState, useEffect, useCallback } from 'react';

export type PageRoute =
  | 'home'
  | 'products'
  | 'wholesale'
  | 'order'
  | 'about'
  | 'contact';

export function parseHash(): PageRoute {
  const hash = window.location.hash.replace('#/', '').replace('#', '');
  const valid: PageRoute[] = ['home', 'products', 'wholesale', 'order', 'about', 'contact'];
  if (valid.includes(hash as PageRoute)) {
    return hash as PageRoute;
  }
  return 'home';
}

export function useRouter() {
  const [route, setRoute] = useState<PageRoute>(parseHash());

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((to: PageRoute) => {
    window.location.hash = `/${to}`;
  }, []);

  return { route, navigate };
}
