/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type KVNamespace = import("@cloudflare/workers-types").KVNamespace;
type Fetcher = import("@cloudflare/workers-types").Fetcher;

type ENV = {
  ASTRO_BLOG_CACHE: KVNamespace;
  AI: Fetcher;
};

type Runtime = import("@astrojs/cloudflare").Runtime<ENV>;

declare namespace App {
  interface Locals extends Runtime {}
}
