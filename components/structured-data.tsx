export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdulazizbek Abdusodiqov",
    alternateName: [
      "Abdulaziz-dev",
      "abu-dev",
      "abudev",
      "abu dev",
      "abdulazizdev",
      "abdusodiqov",
      "O'zbek FullStack Developer",
      "Ozbek FullStack Developer",
      "Uzbek FullStack Developer",
      "FullStack Developer",
      "Full Stack Developer",
      "Full-Stack Developer"
    ],
    jobTitle: "O'zbek, Ozbek, Uzbek FullStack Developer (full stack, full-stack)",
    description: "O'zbek, Ozbek, Uzbek fullstack (full stack, full-stack) dasturchi. Abdulazizbek Abdusodiqov (abu-dev, abudev, abu dev) — zamonaviy veb va backend dasturchi. Next.js, React, Node.js, NestJS va boshqa texnologiyalar.",
    keywords: [
      "O'zbek",
      "Ozbek",
      "Uzbek",
      "FullStack Developer",
      "Full Stack Developer",
      "Full-Stack Developer",
      "fullstack",
      "full stack",
      "full-stack",
      "Abdulazizbek Abdusodiqov",
      "Abdusodiqov",
      "Abdulaziz-dev",
      "abu-dev",
      "abu dev",
      "abudev",
      "abdulazizdev",
      "abdulaziz dev",
      "abdulaziz",
      "dev",
      "JavaScript Developer",
      "React Developer",
      "Next.js Developer",
      "Node.js Developer"
    ],
    url: "https://abdulazizdev.uz",
    sameAs: [
      "https://github.com/abudev0",
      "https://t.me/dev_abu"
    ],
    knowsAbout: [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Sequelize",
      "Prisma",
      "HTML",
      "CSS",
      "SCSS",
      "Tailwind CSS"
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
