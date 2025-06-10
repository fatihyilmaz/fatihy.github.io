import Image from 'next/image';

export default function HomePage() {
  return (
    <section className="text-center pt-24 pb-12 px-4">
      <Image
        src="/profile.jpg"
        alt="Fatih Yılmaz"
        width={160}
        height={160}
        className="rounded-full mx-auto border-4 border-gray-200 dark:border-gray-700"
      />
      <h1 className="mt-6 text-4xl font-bold">Fatih Yılmaz</h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
        Senior Software Project Manager • Agile Leader • Technical Strategist
      </p>
      <p className="mt-4 max-w-xl mx-auto">
        Hi there! I’m a senior software project manager based in Karlsruhe, Germany. Welcome to my personal corner of the web, where I share my background, experiments, and blog posts about software and life.
      </p>
    </section>
  );
}
