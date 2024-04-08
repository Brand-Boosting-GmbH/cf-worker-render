export const proxyFont = (src: string) => {
  console.log('proxyFont', `https://woff2-proxy.vercel.app/?src=${encodeURIComponent(src)}`)
  return `https://woff2-proxy.vercel.app/?src=${encodeURIComponent(src)}`
}