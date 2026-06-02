import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { getAllSlugs, getPostBySlug } from '../../../../lib/contentful';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Post not found' };
  const f = post.fields;
  const img = f.featuredImage?.fields?.file;
  return {
    title: `${f.title} | Intra Analytics`,
    description: f.seoDescription || f.subtitle || '',
    openGraph: {
      title: f.title,
      description: f.seoDescription || f.subtitle || '',
      images: img ? [{ url: `https:${img.url}` }] : undefined,
      type: 'article',
    },
  };
}

const RICH_OPTS = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const file = node.data?.target?.fields?.file;
      if (!file?.url) return null;
      return (
        <Image
          src={`https:${file.url}`}
          alt={node.data?.target?.fields?.title || 'image'}
          width={file.details.image.width}
          height={file.details.image.height}
          style={{ borderRadius: 12, margin: '18px 0' }}
        />
      );
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} target="_blank" rel="noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
        {children}
      </a>
    ),
  },
};

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return <div style={{ padding: 24 }}>Post not found.</div>;
  const f = post.fields;
  const img = f.featuredImage?.fields?.file;

  // if your body field is called `body` instead of `content`, change here:
  const richContent = f.content || f.body;

  return (
    <section style={{ padding: 24, maxWidth: 840, margin: '0 auto' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>{f.title}</h1>
      <p style={{ fontSize: 13, color: '#666', marginTop: 8 }}>
        {f.publishedDate ? new Date(f.publishedDate).toLocaleDateString() : null}
        {f.author?.fields?.name ? ` • ${f.author.fields.name}` : null}
      </p>

      {img && (
        <div style={{ margin: '18px 0' }}>
          <Image
            src={`https:${img.url}`}
            alt={f.title}
            width={img.details.image.width}
            height={img.details.image.height}
            style={{ width: '100%', height: 'auto', borderRadius: 12 }}
            priority
          />
        </div>
      )}

      <article style={{ lineHeight: 1.7 }}>
        {documentToReactComponents(richContent, RICH_OPTS)}
      </article>
    </section>
  );
}
