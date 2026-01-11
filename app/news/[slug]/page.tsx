import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import { newsArticles } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = newsArticles.find((a) => a.slug === params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default function NewsArticlePage({ params }: Props) {
  const article = newsArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // Get related articles (exclude current article)
  const relatedArticles = newsArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <Link href="/news">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to News
            </Button>
          </Link>
          <div className="max-w-3xl mx-auto">
            <div className="mb-4">
              <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                {article.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{formatDate(article.date)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="text-gray-600 leading-relaxed space-y-6">
                <p className="text-xl font-medium text-gray-800 mb-6">
                  {article.excerpt}
                </p>
                
                <p>
                  At Riara Schools, we are committed to providing excellence in education 
                  and fostering holistic development in our students. This article highlights 
                  recent achievements, events, or initiatives that demonstrate our commitment 
                  to educational excellence.
                </p>

                <p>
                  Our dedicated team of educators, administrators, and support staff work 
                  tirelessly to create an environment where students can thrive academically, 
                  socially, and emotionally. Through innovative teaching methods, comprehensive 
                  programs, and a supportive community, we prepare students for success in 
                  higher education and beyond.
                </p>

                <p>
                  We believe that education extends beyond the classroom, and our students 
                  actively participate in co-curricular activities, community service, and 
                  leadership opportunities that shape their character and worldview.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Impact and Future Plans
                </h2>

                <p>
                  This achievement represents another milestone in our journey towards 
                  educational excellence. We remain committed to continuous improvement 
                  and innovation in all aspects of education.
                </p>

                <p>
                  Looking ahead, we will continue to invest in our facilities, programs, 
                  and staff development to ensure that Riara Schools remains at the 
                  forefront of educational excellence in Kenya and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/news/${relatedArticle.slug}`}
                  className="block group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 w-full">
                      <Image
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs text-primary-600 font-medium mb-2 block">
                        {relatedArticle.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}


