import { ArrowRight, Code2, Github, Smartphone, Zap } from 'lucide-react';
import PublicSiteFrame from '../../components/layout/PublicSiteFrame';
import Badge from '../../components/ui/badge/Badge';
import { Button } from '../../components/ui/button/Button';

const LandingPage = () => {
  const previewImage =
    'https://raw.githubusercontent.com/mrizky-fr/News-Gallerys/refs/heads/main/fotos/Macbook-Air-localhost.webp';

  const handleSeeGithub = () => {
    window.open('https://github.com/mrizky-fr', '_blank', 'noopener,noreferrer');
  };

  const handleSeeDealTech = () => {
    window.open('https://tech.mudahdeal.com', '_blank', 'noopener,noreferrer');
  };

  const features = [
    {
      title: 'Clean Code',
      description:
        'Kode yang rapi, terstruktur, dan mudah dipahami. Selalu mengutamakan kualitas dan maintainability dalam setiap project.',
      icon: Code2,
    },
    {
      title: 'Modern Stack',
      description:
        'Menggunakan teknologi terkini seperti React, TypeScript, Tailwind CSS, dan tools modern lainnya untuk hasil yang optimal.',
      icon: Zap,
    },
    {
      title: 'Responsive Design',
      description:
        'Setiap project dirancang responsive dari awal, memastikan tampilan sempurna di semua ukuran layar.',
      icon: Smartphone,
    },
  ];

  return (
    <PublicSiteFrame activeNav="home" contentClassName="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-1 flex-col items-center justify-center py-14 text-center sm:py-20 lg:py-24"
      >
        <button type="button" onClick={handleSeeDealTech} className="mb-8">
          <Badge
            variant="promo"
            className="max-w-full flex-wrap justify-center px-4 py-2 text-center text-[12px] leading-6 sm:px-5 sm:py-2.5 sm:text-sm sm:leading-normal"
          >
            <span>Available for Freelance</span>
            <span className="text-[#1f2228]/60">Let's work together</span>
          </Badge>
        </button>

        <div className="max-w-4xl">
          <h1 className="text-[32px] font-[650] leading-tight tracking-normal text-white sm:text-[44px] lg:text-[58px]">
            <span className="block">Hallo Semuanya!</span>
            <span className="block">
              Nama Saya{' '}
              <span className="bg-[linear-gradient(90deg,#ffffff_0%,#a0a0a0_100%)] bg-clip-text text-transparent">
                Jason Jms
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-6 tracking-normal text-white/50 sm:text-[17px] sm:leading-7">
            Seorang developer yang passionate dalam membangun aplikasi web modern
            dengan perhatian tinggi pada detail, performa, dan pengalaman pengguna.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            type="button"
            variant="primary"
            size="lg"
            icon={Github}
            iconPosition="left"
            onClick={handleSeeGithub}
            className="min-w-[220px] !bg-white px-8 !text-[#1f2228] hover:!bg-white/90 focus:ring-white/40"
          >
            Lihat Github
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            onClick={handleSeeDealTech}
            className="min-w-[220px] border-white/20 px-8 text-white hover:bg-white/5 focus:ring-white/20"
          >
            Temui Saya Di DealTech
          </Button>
        </div>
      </section>

      {/* Preview Section */}
      <section id="preview" className="pb-10 sm:pb-14 lg:pb-16">
        <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-[0_12px_36px_rgba(0,0,0,0.3)] backdrop-blur">
          <img
            src={previewImage}
            alt="Project preview"
            loading="lazy"
            className="block h-auto w-full"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 sm:text-sm">
            What I Do
          </p>
          <h2 className="mt-4 text-[30px] font-[650] leading-tight tracking-normal text-white sm:text-[40px] lg:text-[56px]">
            Membangun{' '}
            <span className="bg-[linear-gradient(90deg,#ffffff_0%,#a0a0a0_100%)] bg-clip-text text-transparent">
              Pengalaman Digital
            </span>{' '}
            yang Berkesan
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-6 tracking-normal text-white/50 sm:text-[17px] sm:leading-7">
            Fokus pada pembuatan aplikasi web yang tidak hanya fungsional,
            tetapi juga memiliki tampilan yang menarik dan performa yang excellent.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-lg border border-white/10 bg-white/[0.03] p-6 text-left transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-normal text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 tracking-normal text-white/50">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PublicSiteFrame>
  );
};

export default LandingPage;
