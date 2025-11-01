"use client"

import Link from "next/link"
import { ArrowRight, Code, Download, ExternalLink, Instagram, Mail, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BackgroundAnimation } from "@/components/background-animation"
import { MobileMenu } from "@/components/mobile-menu"
import { StructuredData } from "@/components/structured-data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LanguageDropdown } from "@/components/language-dropdown"
import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex min-h-screen flex-col items-center">
      <StructuredData />
      <BackgroundAnimation />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center">
        <div className="container px-3 sm:px-4 md:px-6 flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Abdulaziz-dev</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.about}
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.skills}
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.projects}
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.contact}
            </Link>
          </nav>
          <div className="flex items-center gap-3 sm:gap-4">
            <LanguageDropdown wrapperClassName="hidden sm:block" triggerClassName="w-[120px] lg:w-[140px]" />
            <ThemeToggle />
            <Button asChild className="hidden md:flex">
              <Link href="#contact">{t.nav.contactCta}</Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-24 md:py-32 lg:py-40">
          <div className="container px-3 sm:px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl">
                  {t.hero.titleStart}{" "}
                  <span className="text-primary">{t.hero.highlightedName}</span>{" "}
                  {t.hero.titleEnd}
                </h1>
                <p className="mx-auto max-w-[640px] text-muted-foreground text-base sm:text-lg md:text-xl">
                  {t.hero.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="https://github.com/AbdulazizbekAbdusodiqov" target="_blank">
                    {t.hero.ctaGithub}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://t.me/dev_abu" target="_blank">
                    {t.hero.ctaTelegram}
                    <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/resume/Abdulazizbek_Abdusodiqov_Resume.pdf" download>
                    {t.hero.ctaResume}
                    <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className="container px-3 sm:px-4 md:px-6 flex items-center justify-center">
            <div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t.about.badge}</div>
                {t.about.paragraphs.map((paragraph, index) => (
                  <p
                    key={`about-paragraph-${index}`}
                    className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">{t.about.languagesTitle}</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    {t.about.languageSkills.map((skill, index) => (
                      <li key={`language-skill-${index}`}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-xl">
                  <img
                    alt="O'zbek, Ozbek, Uzbek FullStack Developer - Abdulazizbek Abdusodiqov (abu-dev, abudev, abu dev)"
                    className="aspect-square h-auto w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] object-cover object-center"
                    height="400"
                    src="/image.jpg"
                    width="400"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="py-12 md:py-16 lg:py-20">
          <div className="container px-3 sm:px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t.skills.badge}</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.skills.heading}</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.skills.subtitle}
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t.skills.frontendTitle}</h3>
                  <p className="text-muted-foreground">{t.skills.frontendDescription}</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t.skills.backendTitle}</h3>
                  <p className="text-muted-foreground">{t.skills.backendDescription}</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{t.skills.otherTitle}</h3>
                  <p className="text-muted-foreground">{t.skills.otherDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className="container px-3 sm:px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t.projects.badge}</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.projects.heading}</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">{t.projects.subtitle}</p>
              </div>
              <div className="mx-auto max-w-6xl">
                <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* <Card className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        alt="Phone-Tech.uz - Telefon va texnika e'lonlari sayti | O'zbek, Ozbek, Uzbek FullStack Developer (abu-dev, abudev, abu dev)"
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        src="/phono-tech.png"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">Phone-Tech.uz</CardTitle>
                        <Badge variant="secondary">{t.projects.phoneTech.badge}</Badge>
                      </div>
                      <CardDescription>{t.projects.phoneTech.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">Next.js</Badge>
                        <Badge variant="outline">SCSS</Badge>
                        <Badge variant="outline">NestJS</Badge>
                        <Badge variant="outline">PostgreSQL</Badge>
                        <Badge variant="outline">Prisma</Badge>
                        <Badge variant="outline">JWT Auth</Badge>
                        <Badge variant="outline">REST API</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button asChild size="sm">
                        <Link href="https://www.phone-tech.uz" target="_blank">
                          {t.projects.viewSite}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card> */}

                  <Card className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        alt="Firewise.uz - Yong'in xavfsizligi tizimlari | O'zbek, Ozbek, Uzbek FullStack Developer (abu-dev, abudev, abu dev)"
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        src="/firewise.png"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">Firewise.uz</CardTitle>
                        <Badge variant="secondary">{t.projects.firewise.badge}</Badge>
                      </div>
                      <CardDescription>{t.projects.firewise.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">NestJS</Badge>
                        <Badge variant="outline">MongoDB</Badge>
                        <Badge variant="outline">Mongoose</Badge>
                        <Badge variant="outline">JWT Auth</Badge>
                        <Badge variant="outline">REST API</Badge>
                        <Badge variant="outline">Admin Panel</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button asChild size="sm">
                        <Link href="https://firewise.uz" target="_blank">
                          {t.projects.viewSite}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        alt="TuronDrain corporate website preview"
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        src="/turondrain-cover.png"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">TuronDrain.uz</CardTitle>
                        <Badge variant="secondary">{t.projects.turonDrain.badge}</Badge>
                      </div>
                      <CardDescription>{t.projects.turonDrain.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Next.js</Badge>
                        <Badge variant="outline">Tailwind CSS</Badge>
                        <Badge variant="outline">NestJS</Badge>
                        <Badge variant="outline">MongoDB</Badge>
                        <Badge variant="outline">Mongoose</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button asChild size="sm">
                        <Link href="https://turondrain.uz" target="_blank">
                          {t.projects.viewSite}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        alt="SBM Food e-commerce platform preview"
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        src="/sbmfood-cover.png"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">SBMFood.uz</CardTitle>
                        <Badge variant="secondary">{t.projects.sbmFood.badge}</Badge>
                      </div>
                      <CardDescription>{t.projects.sbmFood.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Next.js</Badge>
                        <Badge variant="outline">MongoDB</Badge>
                        <Badge variant="outline">Mongoose</Badge>
                        <Badge variant="outline">JWT</Badge>
                        <Badge variant="outline">Payme</Badge>
                        <Badge variant="outline">Click</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button asChild size="sm">
                        <Link href="https://sbmfood.uz" target="_blank">
                          {t.projects.viewSite}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="overflow-hidden border-dashed border-2 flex items-center justify-center min-h-[400px]">
                    <div className="text-center space-y-4">
                      <div className="rounded-full bg-muted p-6 mx-auto w-fit">
                        <Code className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{t.projects.upcoming.title}</h3>
                        <p className="text-muted-foreground">{t.projects.upcoming.description}</p>
                      </div>
                      <Button asChild variant="outline">
                        <Link href="https://github.com/abudev0" target="_blank">
                          {t.projects.viewGithub}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <Button asChild size="lg" variant="outline" className="whitespace-normal break-words text-sm sm:text-base">
                    <Link href="https://github.com/abudev0" target="_blank">
                      {t.projects.viewAll}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 md:py-16 lg:py-20">
          <div className="container px-3 sm:px-4 md:px-0">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t.contact.badge}</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.contact.heading}</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.contact.subtitle}
                </p>
              </div>
              <div className="mx-auto container max-w-md space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                    <Mail className="h-10 w-10 text-primary" />
                    <h3 className="text-xl font-bold">{t.contact.emailCardTitle}</h3>
                    <Button asChild variant="outline">
                      <Link href="mailto:abdulazizbekabdusodiqov@gmail.com">{t.contact.emailButton}</Link>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                    <Instagram className="h-10 w-10 text-primary" />
                    <h3 className="text-xl font-bold">{t.contact.instagramCardTitle}</h3>
                    <p className="text-muted-foreground">{t.contact.instagramHandle}</p>
                    <Button asChild variant="outline">
                      <Link href="https://www.instagram.com/abu_dev0" target="_blank">
                        {t.contact.instagramButton}
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                    <h3 className="text-xl font-bold">{t.contact.telegramCardTitle}</h3>
                    <p className="text-muted-foreground">{t.contact.telegramHandle}</p>
                    <Button asChild variant="outline">
                      <Link href="https://t.me/dev_abu0" target="_blank">
                        {t.contact.telegramButton}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} {t.footer.rights}
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/abudev0"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              {t.footer.github}
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              {t.footer.linkedin}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
