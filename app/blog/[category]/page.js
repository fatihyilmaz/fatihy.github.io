import Link from "next/link";
import { getAllPostsByCategory } from "../../lib/posts";

export const dynamic = "force-static";

export default async function CategoryPage({ params }) {
  const { category } = params;
  const allPosts = await getAllPostsByCategory(category);

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold capitalize mb-6">{category} Posts</h2>
      <ul className="space-y-4">
        {allPosts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <Link href={`/blog/${category}/${post.slug}`}>
              <a className="text-2xl font-semibold hover:text-blue-600">
                {post.title}
              </a>
            </Link>
            <p className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString()}</p>
            <p className="mt-1 text-gray-700 dark:text-gray-300">{post.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
