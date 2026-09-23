import { Head } from '@inertiajs/react';
import {
    Download,
    Eye,
    Gauge,
    Globe,
    Handshake,
    HardHat,
    Layers,
    Leaf,
    MapPin,
    Mountain,
    ShieldCheck,
    Sprout,
    Target,
    Truck,
    Users,
    Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from '@/components/site/reveal';
import SiteHeader from '@/components/site/site-header';
import WhatsAppButton from '@/components/site/whatsapp-button';

const companyProfileUrl = encodeURI(
    '/NEW MOJALEFA COMPANY PROFILE PRESENTATION ZIMBABWE .pdf',
);

const heroLines = ['Moving earth.', 'Extracting value.', 'Restoring land.'];

const highlights = [
    { value: '40+', label: 'Years of experience' },
    { value: 'Full cycle', label: 'From planning to closure' },
    { value: 'Own fleet', label: 'Maintained in-house' },
    { value: 'Harare', label: 'Head office, Zimbabwe' },
];

const values: { name: string; icon: LucideIcon }[] = [
    { name: 'Safety first', icon: ShieldCheck },
    { name: 'Operational excellence', icon: Gauge },
    { name: 'Environmental stewardship', icon: Leaf },
    { name: 'Partnership', icon: Handshake },
];

const services: { title: string; description: string; icon: LucideIcon }[] = [
    {
        title: 'Overburden removal',
        description:
            'Drill-and-blast, stripping and load-and-haul to expose the ore body safely, plus crushing and screening of ore.',
        icon: Mountain,
    },
    {
        title: 'Ore extraction & haulage',
        description:
            'Selective mining, grade control and high-volume haulage that keeps the plant fed.',
        icon: Truck,
    },
    {
        title: 'Fleet & equipment',
        description:
            'An owned, well-maintained fleet with real-time monitoring to maximise availability.',
        icon: Wrench,
    },
    {
        title: 'Rehabilitation & closure',
        description:
            'Progressive backfilling, reshaping and replanting, integrated into the mine plan.',
        icon: Sprout,
    },
];

const skillsCommitments = [
    {
        title: 'Commitment to skills development',
        description:
            'Continuous training and professional development for every employee.',
    },
    {
        title: 'Knowledge transfer',
        description:
            'Technical, operational, safety and leadership skills shared across the workforce.',
    },
    {
        title: 'Community empowerment',
        description:
            'Training, mentorship, apprenticeships and practical work experience for local communities.',
    },
    {
        title: 'Local employment',
        description:
            'Developing local talent to create jobs and reduce reliance on external skills.',
    },
    {
        title: 'Sustainable growth',
        description:
            'A skilled workforce that supports long-term success and a lasting, positive impact where we operate.',
    },
];

const rehabilitationSteps = [
    {
        title: 'Progressive backfilling',
        description: 'Mined-out areas are filled as the pit advances.',
    },
    {
        title: 'Landform reshaping',
        description: 'Slopes are shaped to stable, natural contours.',
    },
    {
        title: 'Topsoil replacement',
        description: 'Stored topsoil goes back to give growth a start.',
    },
    {
        title: 'Native replanting',
        description: 'Indigenous vegetation returns the land to use.',
    },
];

const partnershipReasons: {
    title: string;
    description: string;
    icon: LucideIcon;
}[] = [
    {
        title: 'Predictable delivery',
        description:
            'Fixed-plan production with transparent reporting. You know what moves, and when.',
        icon: Layers,
    },
    {
        title: 'Owned fleet, high uptime',
        description:
            'We invest in and maintain our own equipment, so availability isn’t a problem.',
        icon: Truck,
    },
    {
        title: 'Safety-led culture',
        description:
            'A single, audited safety system applied identically across every operation.',
        icon: HardHat,
    },
    {
        title: 'Closure built in',
        description:
            'Rehabilitation runs alongside mining, reducing your long-term liability.',
        icon: Leaf,
    },
];

const directors = [
    {
        name: 'Jan Britz',
        role: 'Plant Director',
        photo: '/images/jan-britz.jpg',
    },
    {
        name: 'Jacqueline Mususa',
        role: 'Marketing Director',
        photo: '/images/jacqueline-mususa.jpg',
    },
    {
        name: 'Callie Britz',
        role: 'Operations & Commercial Director',
        photo: '/images/callie-britz.jpg',
    },
];

const focusRing =
    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold';

function SectionHeading({
    kicker,
    title,
    description,
    centered = false,
}: {
    kicker: string;
    title: string;
    description?: string;
    centered?: boolean;
}) {
    return (
        <Reveal className={centered ? 'mx-auto max-w-3xl text-center' : ''}>
            <p className="text-sm font-semibold text-gold">{kicker}</p>
            <h2 className="mt-5 font-display text-4xl leading-tight font-semibold text-sand sm:text-5xl">
                {title}
            </h2>
            {description && (
                <p className="mt-5 text-lg leading-relaxed text-stone">
                    {description}
                </p>
            )}
        </Reveal>
    );
}

export default function Welcome({
    whatsappNumber,
}: {
    whatsappNumber: string | null;
}) {
    return (
        <>
            <Head title="Surface mining contractors in Zimbabwe">
                <meta
                    name="description"
                    content="Mojalefa Mining is a surface-mining contractor in Harare, Zimbabwe, delivering the full open-pit cycle: overburden removal, ore extraction and haulage, fleet and land rehabilitation."
                />
                <meta name="color-scheme" content="dark" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..800&family=Manrope:wght@400..700&display=swap"
                />
            </Head>

            <div className="site-root min-h-screen overflow-x-clip bg-ink font-body text-sand antialiased selection:bg-gold selection:text-ink">
                <SiteHeader />
                <WhatsAppButton number={whatsappNumber} />

                <main>
                    <section
                        id="top"
                        className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pt-28"
                    >
                        <img
                            src="/images/open-pit.jpg"
                            alt="Haul trucks and excavators working the benches of an open pit"
                            className="absolute inset-0 -z-20 size-full object-cover"
                        />
                        <div className="absolute inset-0 -z-10 bg-ink/75" />

                        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-12">
                            <div className="lg:col-span-8">
                                <p className="rise-in text-sm font-semibold text-gold">
                                    Surface mining contractors in Zimbabwe
                                </p>
                                <h1 className="mt-6 font-display text-[clamp(2.2rem,4.2vw,3.75rem)] leading-[1.1] font-semibold">
                                    {heroLines.map((line, index) => (
                                        <span
                                            key={line}
                                            className="rise-in block text-gold"
                                            style={{
                                                animationDelay: `${150 + index * 150}ms`,
                                            }}
                                        >
                                            {line}
                                        </span>
                                    ))}
                                </h1>
                                <p
                                    className="rise-in mt-7 max-w-xl text-lg leading-relaxed text-sand/80"
                                    style={{ animationDelay: '650ms' }}
                                >
                                    Mojalefa Mining delivers the complete
                                    open-pit cycle, from planning and overburden
                                    removal to ore extraction, haulage and
                                    progressive land rehabilitation, with our
                                    own fleet and people on site.
                                </p>
                                <div
                                    className="rise-in mt-10 flex flex-wrap gap-4"
                                    style={{ animationDelay: '800ms' }}
                                >
                                    <a
                                        href="#contact"
                                        className={`rounded-md bg-gold px-8 py-4 font-semibold text-ink transition-colors hover:bg-gold-light ${focusRing}`}
                                    >
                                        Partner with us
                                    </a>
                                    <a
                                        href="#services"
                                        className={`rounded-md border border-sand/30 px-8 py-4 font-semibold text-sand transition-colors hover:border-gold hover:text-gold-light ${focusRing}`}
                                    >
                                        Explore our services
                                    </a>
                                </div>
                            </div>

                            <div
                                className="rise-in hidden lg:col-span-4 lg:block"
                                style={{ animationDelay: '400ms' }}
                            >
                                <img
                                    src="/logo.jpeg"
                                    alt="Mojalefa Mining logo"
                                    className="mx-auto w-full max-w-sm rounded-md"
                                />
                            </div>
                        </div>

                        <div className="mx-auto mt-16 w-full max-w-7xl px-5 pb-10 sm:px-8">
                            <dl className="grid grid-cols-2 overflow-hidden rounded-md border border-gold/20 bg-ink lg:grid-cols-4">
                                {highlights.map((highlight, index) => (
                                    <div
                                        key={highlight.label}
                                        className={`px-5 py-5 sm:px-8 sm:py-6 ${index % 2 === 1 ? 'border-l border-gold/15' : ''} ${index >= 2 ? 'border-t border-gold/15 lg:border-t-0' : ''} ${index === 2 ? 'lg:border-l' : ''}`}
                                    >
                                        <dt className="text-xs text-stone sm:text-sm">
                                            {highlight.label}
                                        </dt>
                                        <dd className="mt-1 font-display text-lg font-semibold whitespace-nowrap text-gold sm:text-2xl lg:text-3xl">
                                            {highlight.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </section>

                    <section id="about" className="bg-coal py-24 sm:py-32">
                        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
                            <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
                                <div className="absolute -top-5 -left-5 h-full w-full rounded-md border border-gold/40" />
                                <img
                                    src="/images/engineer.jpg"
                                    alt="A Mojalefa site engineer in a hard hat and high-visibility vest at an open pit"
                                    className="relative aspect-[4/5] w-full rounded-md object-cover object-top"
                                    loading="lazy"
                                />
                                <div className="absolute bottom-5 left-5 rounded-md border border-gold/25 bg-ink px-6 py-4 sm:bottom-8 sm:left-8 sm:px-7 sm:py-5">
                                    <p className="font-display text-4xl font-bold text-gold sm:text-5xl">
                                        40+
                                    </p>
                                    <p className="mt-1 text-sm text-stone">
                                        Years of experience
                                    </p>
                                </div>
                            </Reveal>

                            <div>
                                <SectionHeading
                                    kicker="Who we are"
                                    title="A full-cycle surface mining partner"
                                    description="We are a specialist surface-mining contractor delivering the complete open-pit cycle. We operate our own fleet and embed our teams alongside our clients to run safe, productive and predictable operations."
                                />

                                <Reveal
                                    delay={100}
                                    className="mt-10 grid gap-5 sm:grid-cols-2"
                                >
                                    <div className="rounded-md border border-gold/15 bg-char/60 p-6">
                                        <Eye className="size-6 text-gold" />
                                        <h3 className="mt-4 font-display text-xl font-semibold text-sand">
                                            Vision
                                        </h3>
                                        <p className="mt-2 leading-relaxed text-stone">
                                            To be the surface-mining partner of
                                            choice, recognised for safety,
                                            reliability and leaving land better
                                            than we found it.
                                        </p>
                                    </div>
                                    <div className="rounded-md border border-gold/15 bg-char/60 p-6">
                                        <Target className="size-6 text-gold" />
                                        <h3 className="mt-4 font-display text-xl font-semibold text-sand">
                                            Mission
                                        </h3>
                                        <p className="mt-2 leading-relaxed text-stone">
                                            To move earth efficiently and
                                            responsibly, delivering ore on plan
                                            while protecting our people and the
                                            environment.
                                        </p>
                                    </div>
                                </Reveal>

                                <Reveal delay={200} className="mt-8">
                                    <ul className="flex flex-wrap gap-3">
                                        {values.map((value) => (
                                            <li
                                                key={value.name}
                                                className="flex items-center gap-2 rounded-full border border-gold/25 px-4 py-2 text-sm text-sand/90"
                                            >
                                                <value.icon className="size-4 text-gold" />
                                                {value.name}
                                            </li>
                                        ))}
                                    </ul>
                                </Reveal>
                            </div>
                        </div>
                    </section>

                    <section
                        id="services"
                        className="relative isolate overflow-hidden py-24 sm:py-32"
                    >
                        <div
                            className="absolute inset-0 -z-20 bg-cover bg-center"
                            style={{
                                backgroundImage: 'url(/images/excavator.jpg)',
                            }}
                        />
                        <div className="absolute inset-0 -z-10 bg-ink/85" />

                        <div className="mx-auto max-w-7xl px-5 sm:px-8">
                            <SectionHeading
                                centered
                                kicker="Capabilities"
                                title="What we do"
                                description="Every stage of the open pit, run by one accountable team."
                            />

                            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                {services.map((service, index) => (
                                    <Reveal
                                        key={service.title}
                                        delay={index * 100}
                                    >
                                        <article className="group h-full rounded-md border border-gold/15 bg-coal/70 p-8">
                                            <span className="flex size-14 items-center justify-center rounded-md bg-gold text-ink">
                                                <service.icon className="size-7" />
                                            </span>
                                            <h3 className="mt-7 font-display text-xl leading-snug font-semibold text-sand">
                                                {service.title}
                                            </h3>
                                            <p className="mt-3 leading-relaxed text-stone">
                                                {service.description}
                                            </p>
                                        </article>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="safety" className="bg-ink py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-5 sm:px-8">
                            <Reveal className="mx-auto max-w-4xl text-center">
                                <HardHat className="mx-auto size-10 text-gold" />
                                <h2 className="mt-6 font-display text-4xl leading-tight font-semibold text-gold sm:text-6xl">
                                    Everyone home, every shift
                                </h2>
                                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone">
                                    Safety is our licence to operate. A
                                    standardised management system, visible
                                    leadership and continuous training keep our
                                    people and communities protected across
                                    every site.
                                </p>
                            </Reveal>

                            <div className="mt-20 grid gap-12 rounded-md border border-gold/15 bg-coal p-8 sm:p-12 lg:grid-cols-12">
                                <Reveal className="lg:col-span-4">
                                    <Users className="size-8 text-gold" />
                                    <h3 className="mt-5 font-display text-3xl font-semibold text-sand">
                                        Skills development
                                    </h3>
                                    <p className="mt-4 leading-relaxed text-stone">
                                        We build the workforce we need from the
                                        communities where we mine.
                                    </p>
                                </Reveal>
                                <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8">
                                    {skillsCommitments.map(
                                        (commitment, index) => (
                                            <li key={commitment.title}>
                                                <Reveal
                                                    delay={index * 80}
                                                    className="flex gap-4"
                                                >
                                                    <ShieldCheck className="mt-0.5 size-5 shrink-0 text-gold" />
                                                    <div>
                                                        <p className="font-semibold text-sand">
                                                            {commitment.title}
                                                        </p>
                                                        <p className="mt-1 leading-relaxed text-stone">
                                                            {
                                                                commitment.description
                                                            }
                                                        </p>
                                                    </div>
                                                </Reveal>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section
                        id="sustainability"
                        className="bg-coal py-24 sm:py-32"
                    >
                        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
                            <div className="order-2 lg:order-1">
                                <SectionHeading
                                    kicker="Sustainability"
                                    title="Restoring land as we mine it"
                                    description="Rehabilitation is built into the mine plan from day one. It runs in parallel with extraction, not after it."
                                />
                                <ol className="relative mt-12 space-y-8 border-l border-gold/30 pl-8">
                                    {rehabilitationSteps.map((step, index) => (
                                        <li
                                            key={step.title}
                                            className="relative"
                                        >
                                            <span className="absolute top-1.5 -left-[39px] size-3.5 rounded-full bg-gold ring-4 ring-coal" />
                                            <Reveal delay={index * 100}>
                                                <p className="font-display text-lg font-semibold text-sand">
                                                    {step.title}
                                                </p>
                                                <p className="mt-1 text-stone">
                                                    {step.description}
                                                </p>
                                            </Reveal>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            <Reveal className="relative order-1 lg:order-2">
                                <img
                                    src="/images/rehabilitation.jpg"
                                    alt="A benched quarry wall with forest regrowing along its rim"
                                    className="aspect-[4/5] w-full rounded-md object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-md border border-gold/20 bg-ink/80 px-5 py-4">
                                    <Sprout className="size-5 text-gold" />
                                    <span className="text-sm font-semibold text-sand">
                                        Rehabilitation in progress
                                    </span>
                                </div>
                            </Reveal>
                        </div>
                    </section>

                    <section id="why-us" className="bg-ink py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-5 sm:px-8">
                            <SectionHeading
                                centered
                                kicker="The Mojalefa advantage"
                                title="Why partner with us"
                            />
                            <div className="mt-16 grid overflow-hidden rounded-md border border-gold/15 md:grid-cols-2">
                                {partnershipReasons.map((reason, index) => (
                                    <div
                                        key={reason.title}
                                        className={`p-8 sm:p-12 ${index > 0 ? 'border-t border-gold/15' : ''} ${index === 1 ? 'md:border-t-0 md:border-l' : ''} ${index === 3 ? 'md:border-l' : ''}`}
                                    >
                                        <Reveal delay={index * 80}>
                                            <reason.icon className="size-8 text-gold" />
                                            <h3 className="mt-6 font-display text-2xl font-semibold text-sand">
                                                {reason.title}
                                            </h3>
                                            <p className="mt-3 max-w-md text-lg leading-relaxed text-stone">
                                                {reason.description}
                                            </p>
                                        </Reveal>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="leadership" className="bg-coal py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-5 sm:px-8">
                            <SectionHeading
                                centered
                                kicker="Leadership"
                                title="Board of directors"
                                description="The people steering our surface-mining operations and long-term strategy."
                            />
                            <ul className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {directors.map((director, index) => (
                                    <li key={director.name}>
                                        <Reveal
                                            delay={index * 100}
                                            className="overflow-hidden rounded-md border border-gold/15 bg-char"
                                        >
                                            <img
                                                src={director.photo}
                                                alt={`Portrait of ${director.name}`}
                                                className="aspect-[5/6] w-full object-cover object-top"
                                                loading="lazy"
                                            />
                                            <div className="border-t border-gold/15 px-6 py-5">
                                                <p className="font-display text-xl font-semibold text-sand">
                                                    {director.name}
                                                </p>
                                                <p className="mt-1 text-sm font-semibold text-gold">
                                                    {director.role}
                                                </p>
                                            </div>
                                        </Reveal>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section
                        id="contact"
                        className="relative isolate overflow-hidden py-24 sm:py-32"
                    >
                        <img
                            src="/images/open-pit.jpg"
                            alt=""
                            className="absolute inset-0 -z-20 size-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 -z-10 bg-ink/90" />

                        <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-8">
                            <img
                                src="/logo.jpeg"
                                alt=""
                                className="mx-auto w-40 rounded-md sm:w-52"
                                loading="lazy"
                            />
                            <h2 className="mt-6 font-display text-4xl leading-tight font-semibold text-gold sm:text-6xl">
                                Partner with Mojalefa Mining
                            </h2>
                            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone">
                                Tell us about your deposit and we’ll show you
                                how we would mine it, and how we’d leave the
                                land after.
                            </p>
                            <div className="mt-10 flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://mojalefazim.co.zw"
                                    className={`inline-flex items-center gap-3 rounded-md bg-gold px-8 py-4 font-semibold text-ink transition-colors hover:bg-gold-light ${focusRing}`}
                                >
                                    <Globe className="size-5" />
                                    mojalefazim.co.zw
                                </a>
                                <a
                                    href={companyProfileUrl}
                                    download
                                    className={`inline-flex items-center gap-3 rounded-md border border-sand/30 px-8 py-4 font-semibold transition-colors hover:border-gold hover:text-gold-light ${focusRing}`}
                                >
                                    <Download className="size-5" />
                                    Company profile (PDF)
                                </a>
                            </div>
                            <p className="mt-10 flex items-center justify-center gap-2 text-stone">
                                <MapPin className="size-4 text-gold" />
                                Head office in Harare, Zimbabwe
                            </p>
                        </Reveal>
                    </section>
                </main>

                <footer className="border-t border-gold/15 bg-ink">
                    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                        <div className="flex items-center gap-3">
                            <img
                                src="/images/logo-mark.png"
                                alt=""
                                className="h-10 w-auto"
                            />
                            <span className="font-display font-semibold tracking-[0.08em] text-gold">
                                MOJALEFA MINING
                            </span>
                        </div>
                        <div className="text-sm text-stone sm:text-right">
                            <p>
                                © {new Date().getFullYear()} Mojalefa Mining.
                                Surface mining contractors, Harare, Zimbabwe.
                            </p>
                            <p className="mt-1">
                                Developed and designed by{' '}
                                <a
                                    href="https://leadingdigital.africa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-gold hover:text-gold-light ${focusRing}`}
                                >
                                    Leading Digital
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
