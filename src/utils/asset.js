// src/utils/asset.js
// Tüm görselleri (png,jpg,jpeg,gif,svg,webp) build anında toplar ve URL'e çevirir.
const modules = import.meta.glob('../assets/**/*.{png,jpg,jpeg,gif,svg,webp}', {
    eager: true,
    as: 'url',
  });
  
  // "src/assets/..." ve "/src/assets/..." gibi yazımları normalize eder
  const normalize = (p) => (p || '')
    .replace(/^\/+/, '')         // baştaki / işaretlerini sil
    .replace(/^src\/assets\//, ''); // "src/assets/" önekini sil
  
  /**
   * Kullanım örnekleri:
   *  asset('poster.jpg')
   *  asset('posters/poster.jpg')
   *  asset('src/assets/posters/poster.jpg')
   *  asset('/src/assets/posters/poster.jpg')
   */
  export function asset(relPath) {
    const r = normalize(relPath);
    const exactKey = `../assets/${r}`;
    if (modules[exactKey]) return modules[exactKey];
  
    // Son kısımdan eşleşme (alt yolun tamamı veya sadece dosya adı)
    const entry = Object.entries(modules).find(([k]) => k.endsWith(`/${r}`));
    if (entry) return entry[1];
  
    console.warn('[asset] NOT FOUND:', relPath);
    return '';
  }
  