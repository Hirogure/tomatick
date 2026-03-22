import type { Metadata } from 'next'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const metadata: Metadata = {
  title: 'Blog | Tomatick',
  description: 'Productivity tips, Pomodoro guides, and focus strategies from the Tomatick team.',
  openGraph: {
    title: 'Blog | Tomatick',
    description: 'Productivity tips, Pomodoro guides, and focus strategies.',
    url: 'https://tomatick.app/blog',
    siteName: 'Tomatick',
    type: 'website',
  },
}

type PostMeta = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
}

function getPosts(): PostMeta[] {
  const contentDir = path.join(process.cwd(), 'content', 'blog')
  if (!fs.existsSync(contentDir)) return []

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8')
    const { data } = matter(raw)
    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? '',
      date: data.date ?? '',
      author: data.author ?? 'Tomatick Team',
      tags: data.tags ?? [],
    } as PostMeta
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export default function BlogPage() {
  const posts = getPosts()

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-white/60 text-lg">
            Productivity tips, Pomodoro guides, and focus strategies to help you do your best work.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-white/40">No posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-6 rounded-2xl bg-white/5 hover:bg-white/8 transition-colors group"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-xl font-semibold group-hover:text-red-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed">{post.description}</p>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
