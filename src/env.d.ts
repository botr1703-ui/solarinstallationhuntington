/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_BUSINESS_NAME: string;
  readonly PUBLIC_PHONE_DISPLAY: string;
  readonly PUBLIC_PHONE_TEL: string;
  readonly PUBLIC_CITY: string;
  readonly PUBLIC_STATE: string;
  readonly PUBLIC_FORM_ACTION: string;
  readonly PUBLIC_GA4_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
