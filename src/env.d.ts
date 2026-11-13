/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_ADSENSE_CLIENT?: string;
  readonly PUBLIC_ADSENSE_SLOT_AFTER_PLAYER?: string;
  readonly PUBLIC_ADSENSE_SLOT_AFTER_NOTE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
