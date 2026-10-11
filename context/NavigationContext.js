import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const NavigationContext = createContext(null);

const VIEW_TO_QUERY = {
  about: 'about',
  services: 'services',
  skills: 'skills',
  contact: 'contact',
  projects: 'projects',
  'project-detail': 'project',
  graphics: 'graphics',
};
const QUERY_TO_VIEW = Object.fromEntries(Object.entries(VIEW_TO_QUERY).map(([k, v]) => [v, k]));

export function NavigationProvider({ children }) {
  const router = useRouter();
  const [stack, setStack] = useState([]);
  const isProgrammatic = useRef(false);

  // Sync stack from URL on mount and browser nav
  useEffect(() => {
    if (isProgrammatic.current) { isProgrammatic.current = false; return; }
    const { view, id } = router.query;
    if (view && QUERY_TO_VIEW[view]) {
      setStack([{ view: QUERY_TO_VIEW[view], params: id ? { projectId: id } : {} }]);
    } else {
      setStack([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  // Body scroll lock
  useEffect(() => {
    if (stack.length > 0) document.body.classList.add('overlay-open');
    else document.body.classList.remove('overlay-open');
    return () => document.body.classList.remove('overlay-open');
  }, [stack.length]);

  // Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && stack.length > 0) pop(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stack]);

  const push = useCallback((view, params = {}) => {
    setStack((prev) => {
      const top = prev[prev.length - 1];
      if (top && top.view === view && JSON.stringify(top.params) === JSON.stringify(params)) return prev;
      return [...prev, { view, params }];
    });
    const q = VIEW_TO_QUERY[view];
    if (q) {
      isProgrammatic.current = true;
      const query = { view: q };
      if (params.projectId) query.id = params.projectId;
      router.push({ pathname: '/', query }, undefined, { shallow: true });
    }
  }, [router]);

  const pop = useCallback(() => {
    setStack((prev) => {
      if (prev.length === 0) return prev;
      const next = prev.slice(0, -1);
      isProgrammatic.current = true;
      if (next.length === 0) {
        router.push('/', undefined, { shallow: true });
      } else {
        const top = next[next.length - 1];
        const q = VIEW_TO_QUERY[top.view];
        const query = { view: q };
        if (top.params?.projectId) query.id = top.params.projectId;
        router.push({ pathname: '/', query }, undefined, { shallow: true });
      }
      return next;
    });
  }, [router]);

  const closeAll = useCallback(() => {
    setStack([]);
    isProgrammatic.current = true;
    router.push('/', undefined, { shallow: true });
  }, [router]);

  const currentView = stack.length > 0 ? stack[stack.length - 1] : null;
  const previousView = stack.length > 1 ? stack[stack.length - 2] : null;

  return (
    <NavigationContext.Provider value={{ stack, push, pop, closeAll, currentView, previousView }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error('useNavigation must be used within NavigationProvider');
  return ctx;
}
