/**
 * Os assets (imagens/vídeo) são servidos pelo CDN da Lovable em caminhos
 * relativos (/__l5e/assets-v1/...). Esses caminhos só resolvem no hosting da
 * Lovable — em hosts externos (ex: Vercel) dariam 404. Convertemos para URL
 * absoluta para funcionarem em qualquer deploy.
 */
const ASSET_ORIGIN = "https://siliconeempo-ao.lovable.app";

export function assetUrl(url: string): string {
  return url.startsWith("/__l5e/") ? `${ASSET_ORIGIN}${url}` : url;
}
