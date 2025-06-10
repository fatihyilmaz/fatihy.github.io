import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

/**
 * Reads all Markdown files in a given category and returns front-matter + HTML content.
 * @param {string} category  "software" or "life"
 * @returns  Array of posts: [{ slug, title, date, description, contentHtml }]
 */
export async function getAllPostsByCategory(category) {
  const categoryDir = path.join(contentDirectory, category);
  const fileNames = fs.readdirSync(categoryDir);

  const allPosts = await Promise.all(
    fileNames.map(async (fileName) => {
      if (!fileName.endsWith(".md")) return null;
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(categoryDir, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // gray-matter for front-matter
      const { data, content } = matter(fileContents);

      // remark to convert Markdown to HTML
      const processedContent = await remark().use(html).process(content);
      const contentHtml = processedContent.toString();

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        contentHtml,
      };
    })
  );

  // Filter nulls and sort by date
  return allPosts
    .filter((post) => post)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Get all posts from both categories
 */
export async function getAllPosts() {
  const softwarePosts = await getAllPostsByCategory("software");
  const lifePosts = await getAllPostsByCategory("life");
  return [
    ...softwarePosts.map((p) => ({ ...p, category: "software" })),
    ...lifePosts.map((p) => ({ ...p, category: "life" })),
  ].sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Get a single post by category and slug
 */
export async function getPostBySlug(category, slug) {
  const fullPath = path.join(contentDirectory, category, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    contentHtml,
  };
}
