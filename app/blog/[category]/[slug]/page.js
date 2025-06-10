import { getPostBySlug } from "@/lib/posts";
import Link from "next/link";

export const dynamic = "force-static";

export default async function PostPage({ params }) {
  const { category, slug } = params;
  const post = await getPostBySlug(category, slug);

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-blue-600 hover:underline">
        &larr; Back to Blog
      </Link>

      <h1 className="mt-4 text-4xl font-bold">{post.title}</h1>
      <p className="text-gray-500 text-sm mt-1">{new Date(post.date).toLocaleDateString()}</p>

      <div
        className="mt-6 prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
