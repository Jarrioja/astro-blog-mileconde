interface ImportMetaEnv {
  readonly WP_URL: string;
  readonly SPOTIFY_CLIENT_ID: string;
  readonly SPOTIFY_CLIENT_SECRET: string;
  readonly SITE: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
