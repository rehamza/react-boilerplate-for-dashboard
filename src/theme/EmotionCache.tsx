import * as React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider as DefaultCacheProvider } from '@emotion/react';
import type { Options as OptionsOfCreateCache } from '@emotion/cache';

export type EmotionCacheProviderProps = {
  /** Options passed to createCache() from 'import createCache from "@emotion/cache"' */
  options: OptionsOfCreateCache;
  children: React.ReactNode;
};

export default function EmotionCacheProvider({ options, children }: EmotionCacheProviderProps) {
  const cache = React.useMemo(() => createCache(options), [options]);

  return <DefaultCacheProvider value={cache}>{children}</DefaultCacheProvider>;
}
