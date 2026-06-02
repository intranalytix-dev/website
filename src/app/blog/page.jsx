import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '../../../lib/contentful';

export const revalidate = 60; // ISR: refresh every 60s

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <section style={{ padding: 24, maxWidth: 1100, margin: '0 auto' }}>
      <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 16 }}>Blog</h1>

      <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))' }}>
        {posts.map((p) => {
          const f = p.fields;
          const img = f.featuredImage?.fields?.file;
          const url = img ? `https:${img.url}` : null;

          return (
            <Link
              key={p.sys.id}
              href={`/blog/${f.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
              prefetch
            >
              <article style={{ border: '1px solid #eee', borderRadius: 12, overflow: 'hidden' }}>
                {url && (
                  <Image
                    src={url}
                    alt={f.title}
                    width={img.details.image.width}
                    height={img.details.image.height}
                    style={{ width: '100%', height: 180, objectFit: 'cover' }}
                  />
                )}
                <div style={{ padding: 14 }}>
                  <h2 style={{ fontSize: 18, fontWeight: 600 }}>{f.title}</h2>
                  {f.publishedDate && (
                    <p style={{ fontSize: 12, color: '#666', marginTop: 6 }}>
                      {new Date(f.publishedDate).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
