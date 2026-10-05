import { describe, it, expect } from 'vitest';
import robots from '@/app/robots';
import { metadata } from '@/app/layout';
import nextConfig from '../next.config.mjs';

describe('Search Engine Crawlability Prevention', () => {
  it('disallows crawling for all user agents in app/robots.ts', () => {
    const robotsConfig = robots();
    expect(robotsConfig.rules).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          userAgent: '*',
          disallow: '/',
        }),
      ])
    );
  });

  it('sets noindex and nofollow in RootLayout metadata', () => {
    expect(metadata.robots).toEqual(
      expect.objectContaining({
        index: false,
        follow: false,
      })
    );
  });

  it('sets X-Robots-Tag header in next.config.mjs', async () => {
    expect(typeof nextConfig.headers).toBe('function');
    const headersConfig = await nextConfig.headers!();
    const globalHeader = headersConfig.find((h: { source: string }) => h.source === '/:path*');
    expect(globalHeader).toBeDefined();
    expect(globalHeader?.headers).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          key: 'X-Robots-Tag',
          value: 'noindex, nofollow',
        }),
      ])
    );
  });
});
