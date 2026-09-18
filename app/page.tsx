import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { wa } from "@/lib/wa";

const IG_URL = "https://www.instagram.com/lavanderiapassadoriajosysantos";

/* ------------------------------------------------------------------ HERO */
function Hero() {
  return (
    <section className="blob-bg relative">
      <div className="mx-auto max-w-container px-5 pt-14 pb-16 md:pt-20 md:pb-24 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-xs font-display font-extrabold uppercase tracking-[0.16em] text-aqua animate-rise">
            Lavanderia e Passadoria · Zona Norte
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-[54px] font-extrabold leading-[1.08] tracking-tight animate-rise [animation-delay:70ms]">
            Sua roupa limpa, passada e embalada —{" "}
            <span className="text-aqua">com cuidado de quem tem nome.</span>
          </h1>
          <p className="mt-5 text-lg text-muted max-w-lg animate-rise [animation-delay:140ms]">
            A Lavanderia e Passadoria <strong className="text-ink">Josy Santos</strong> cuida
            das suas roupas, edredons e malas em São Paulo, Zona Norte.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 animate-rise [animation-delay:210ms]">
            <a
              href={wa.geral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-btn bg-aqua px-7 font-display font-bold text-white transition-all hover:bg-aqua-dark hover:-translate-y-0.5"
            >
              <span aria-hidden>💬</span> Chamar no WhatsApp
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <a
              href="#servicos"
              className="inline-flex h-12 items-center rounded-btn border-2 border-aqua/40 px-7 font-display font-bold text-ink transition-colors hover:border-aqua"
            >
              Ver serviços e preços
            </a>
          </div>
          <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted animate-rise [animation-delay:280ms]">
            <span className="font-display font-extrabold text-ink">★ 5,0</span> no Google · 128 avaliações
            <span aria-hidden>·</span>
            <span>91,6 mil seguidores no Instagram</span>
          </p>
        </div>

        {/* A própria Josy — o rosto é o ativo da marca */}
        <div className="relative animate-rise [animation-delay:180ms]">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-card border-[6px] border-aqua/25 shadow-xl shadow-aqua/10">
            <Image
              src="/images/ig/post-10.jpg"
              alt="Josy Santos, dona da lavanderia, sorrindo com pacotes de toalhas e lençóis da marca"
              width={501}
              height={640}
              priority
              sizes="(min-width: 768px) 448px, 90vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-btn bg-white px-5 py-2 shadow-lg border border-line">
            <span className="font-display font-extrabold text-ink">
              Josy Santos{" "}
              <span className="text-aqua" aria-hidden>
                ♡
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- SERVIÇOS */
const servicos = [
  {
    t: "Lavanderia",
    d: "Roupas do dia a dia, cama e mesa — lavadas, secas e embaladas com cuidado.",
    ico: "🫧",
  },
  {
    t: "Passadoria",
    d: "Peças passadas a ferro com acabamento de qualidade, prontas para usar.",
    ico: "👔",
  },
  {
    t: "Edredons e Cobertores",
    d: "Aquelas peças grandes que não cabem em casa — e voltam como novas.",
    ico: "🛏️",
  },
  {
    t: "Malas e Ternos",
    d: "Higienização e cuidado especial para itens e peças especiais.",
    ico: "🧳",
  },
];

function Servicos() {
  return (
    <section id="servicos" className="mx-auto max-w-container px-5 py-16 md:py-24">
      <Reveal>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center">
          O que cuidamos para você
        </h2>
        <p className="mt-3 text-center text-muted max-w-xl mx-auto">
          Do uniforme de todo dia ao edredom guardado no armário — cada peça volta limpa,
          cheirosa e bem embalada.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {servicos.map((s, i) => (
          <Reveal key={s.t} delay={i * 70}>
            <article className="h-full rounded-card border border-line bg-surface p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-aqua/10">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-aqua/10 text-2xl" aria-hidden>
                {s.ico}
              </span>
              <h3 className="mt-4 font-display text-lg font-extrabold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted">{s.d}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- PACOTE HOTÉIS */
function Pacote() {
  return (
    <section className="mx-auto max-w-container px-5 py-6 md:py-10">
      <Reveal>
        <div className="overflow-hidden rounded-card grid md:grid-cols-2 bg-white border border-line shadow-xl shadow-aqua/5">
          <div className="price-tag p-8 md:p-10">
            <p className="text-xs font-display font-extrabold uppercase tracking-[0.16em] text-aqua">
              Para hotéis e pousadas
            </p>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-extrabold">
              Pacote mensal de roupa de cama
            </h2>
            <ul className="mt-6 space-y-2.5 text-white/85">
              {["Toalhas ensacadas", "Lençóis", "Cobre-leito", "Roupas de cama sempre limpas, cheirosas e bem cuidadas"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aqua text-xs text-white" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>
            <p className="mt-7 font-display text-4xl font-extrabold">
              R$ 120,00
              <span className="ml-2 align-middle text-sm font-bold text-white/70">
                / mês · 20 peças
              </span>
            </p>
            <a
              href={wa.hotel}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-12 items-center rounded-btn bg-aqua px-7 font-display font-bold text-white transition-all hover:bg-white hover:text-navy"
            >
              Quero o pacote para meu hotel
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>
          <div className="relative min-h-[280px]">
            <Image
              src="/images/ig/post-12.jpg"
              alt="Arte da Josy Santos mostrando pilhas de roupas de cama cuidadas e a dona com uniforme da marca"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* -------------------------------------------------------- TRABALHOS REAIS */
const fotos = [
  { src: "/images/ig/post-01.jpg", alt: "Josy Santos no atendimento da lavanderia" },
  { src: "/images/ig/post-05.jpg", alt: "Post da lavanderia Josy Santos no Instagram" },
  { src: "/images/ig/post-06.jpg", alt: "Trabalho da lavanderia mostrado no Instagram" },
  { src: "/images/ig/post-08.jpg", alt: "Serviço de lavanderia documentado pela Josy" },
  { src: "/images/ig/post-09.jpg", alt: "Peças cuidadas pela Lavanderia Josy Santos" },
  { src: "/images/ig/post-11.jpg", alt: "Resultado do serviço da lavanderia no Instagram" },
];

function Trabalhos() {
  return (
    <section className="mx-auto max-w-container px-5 py-16 md:py-24">
      <Reveal>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center">
          Direto do nosso Instagram
        </h2>
        <p className="mt-3 text-center text-muted">
          A Josy, as embalagens, o resultado — tudo como é de verdade.
        </p>
      </Reveal>
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
        {fotos.map((f, i) => (
          <Reveal key={f.src} delay={i * 50}>
            <figure className="overflow-hidden rounded-card border border-line bg-surface transition-transform hover:scale-[1.02]">
              <Image
                src={f.src}
                alt={f.alt}
                width={480}
                height={480}
                loading="lazy"
                sizes="(min-width: 768px) 33vw, 50vw"
                className="aspect-square h-auto w-full object-cover"
              />
            </figure>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-8 text-center">
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 max-w-full items-center justify-center rounded-btn border-2 border-aqua px-4 text-center font-display font-bold text-aqua transition-colors hover:bg-aqua hover:text-white sm:px-7"
          >
            <span className="sm:hidden">Seguir no Instagram ↗</span>
            <span className="hidden sm:inline">Seguir @lavanderiapassadoriajosysantos ↗</span>
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* --------------------------------------------------------- HORÁRIO/LOCAL */
const horarios = [
  { dia: "Segunda a quarta", hora: "8:30 às 17:30" },
  { dia: "Quinta", hora: "8:30 às 20:00" },
  { dia: "Sexta", hora: "8:30 às 17:30" },
  { dia: "Sábado, domingo e feriado", hora: "Fechado" },
];

function HorarioLocal() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-container px-5 py-16 md:py-20 grid gap-10 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold">Passe aqui — ou chame no WhatsApp</h2>
          <p className="mt-4 flex items-start gap-2 text-muted">
            <span aria-hidden>📍</span>
            <span>
              <strong className="text-ink">Rua do Engenho, 244</strong>
              <br />
              Zona Norte, São Paulo
            </span>
          </p>
          <a
            href={wa.edredom}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-12 items-center gap-2 rounded-btn bg-aqua px-7 font-display font-bold text-white transition-all hover:bg-aqua-dark"
          >
            <span aria-hidden>💬</span> Falar com a Josy
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-card border border-line bg-white p-6">
            <h3 className="font-display font-extrabold text-lg">Horário de atendimento</h3>
            <ul className="mt-4 divide-y divide-line">
              {horarios.map((h) => (
                <li key={h.dia} className="flex items-center justify-between py-2.5 text-sm">
                  <span className="text-muted">{h.dia}</span>
                  <span className="font-display font-bold text-ink">{h.hora}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- CTA FINAL */
function CtaFinal() {
  return (
    <section className="blob-bg">
      <div className="mx-auto max-w-container px-5 py-20 text-center">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold">
            Manda sua roupa que a gente cuida.{" "}
            <span className="text-aqua" aria-hidden>
              ♡
            </span>
          </h2>
          <p className="mt-3 text-muted max-w-md mx-auto">
            Chame no WhatsApp e combine a retirada ou a visita.
          </p>
          <a
            href={wa.geral}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-14 items-center gap-2 rounded-btn bg-aqua px-9 font-display text-lg font-bold text-white transition-all hover:bg-aqua-dark hover:-translate-y-0.5"
          >
            <span aria-hidden>💬</span> Chamar no WhatsApp
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- HEADER + FOOTER */
function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-5">
        <a href="#" className="font-display text-lg font-extrabold text-ink">
          Josy Santos <span className="text-aqua">lavanderia & passadoria</span>
        </a>
        <a
          href={wa.geral}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center rounded-btn bg-aqua px-5 text-sm font-display font-bold text-white transition-all hover:bg-aqua-dark"
        >
          Orçamento
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-container px-5 py-10 text-sm text-muted">
        <p className="font-display font-extrabold text-ink">
          Lavanderia e Passadoria Josy Santos
        </p>
        <p className="mt-2">
          Rua do Engenho, 244 — Zona Norte, São Paulo · Seg a Sex, quintas até 20h
        </p>
        <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          <a href={wa.geral} target="_blank" rel="noopener noreferrer" className="hover:text-aqua">
            WhatsApp (11) 93353-2444
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
          <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="hover:text-aqua">
            Instagram @lavanderiapassadoriajosysantos
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-white focus:px-4 focus:py-2 focus:font-display focus:font-bold focus:text-aqua focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Servicos />
        <Pacote />
        <Trabalhos />
        <HorarioLocal />
        <CtaFinal />
      </main>
      <Footer />
      <a
        href={wa.geral}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar no WhatsApp (abre em nova aba)"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-aqua text-2xl shadow-lg shadow-aqua/30 transition-transform hover:-translate-y-0.5"
      >
        <span aria-hidden>💬</span>
      </a>
    </>
  );
}
