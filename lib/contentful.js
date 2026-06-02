import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  environment: process.env.CONTENTFUL_ENV || 'master',
});

// Fetch all blog posts
export async function getAllPosts() {
  const res = await client.getEntries({
    content_type: 'pageBlogPost',
    order: ['-fields.publishedDate'], // newest first
  });
  return res.items;
}

// Fetch all slugs (for dynamic routes)
export async function getAllSlugs() {
  const res = await client.getEntries({
    content_type: 'pageBlogPost',
    select: 'fields.slug',
  });
  return res.items.map(i => i.fields.slug);
}

// Fetch a single post by slug
export async function getPostBySlug(slug) {
  const res = await client.getEntries({
    content_type: 'pageBlogPost',
    limit: 1,
    'fields.slug': slug,
  });
  return res.items?.[0] || null;
}