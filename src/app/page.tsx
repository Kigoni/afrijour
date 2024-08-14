"use client";
import Image from "next/image";
import JOS from "jos-animation";
import {
  BadgeCheck,
  ChevronDown,
  Facebook,
  Github,
  Instagram,
  Star,
  Twitter,
} from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const initJOS = () => {
      const options = {
        debugMode: true,
        animation: "flip",
        duration: 0.7,
        rootMargin: "0% 0% 0% 0%",
      };
      JOS.init(options);
    };

    initJOS();
    JOS.refresh();

    return () => {
      // Clean up JOS if necessary
    };
  }, []);
  return (
    <div className="page-wrapper relative z-[1] bg-white">
      {/*...::: Header Start :::... */}
      <header
        className="site-header site-header--absolute is--white py-3"
        id="sticky-menu"
      >
        <div className="container-default">
          <div className="flex items-center justify-between gap-x-8">
            {/* Header Logo */}
            <Link className="" href="/">
              <h1 className="text-4xl">AfriJour</h1>
              {/* <Image
                src="assets/img/logo-violet-dark.png"
                alt="Masco"
                width={109}
                height={24}
              /> */}
            </Link>
            {/* Header Logo */}
            {/* Header Navigation */}
            <div className="menu-block-wrapper">
              <div className="menu-overlay" />
              <nav className="menu-block" id="append-menu-header">
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <i className="fa-solid fa-angle-left" />
                  </div>
                  <div className="current-menu-title" />
                  <div className="mobile-menu-close">×</div>
                </div>
                <ul className="site-menu-main">
                  <li className="nav-item">
                    <Link className="nav-link-item" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link-item" href="#features">
                      Features
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link-item" href="#about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link-item" href="#journals">
                      Journals
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link-item" href="#testimonials">
                      Testimonials
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link-item" href="#faq">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Header Navigation */}
            {/* Header User Event */}
            <div className="flex items-center gap-6">
              {/* <Link
                className="btn-text hidden hover:text-ColorViolet sm:inline-block"
                href="/login"
              >
                Login
              </Link> */}
              <Link
                className="group relative hidden sm:inline-block"
                href="/signup"
              >
                <div className="btn is-rounded is-violet">Dashboard</div>
                <div className="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0" />
              </Link>
              {/* Responsive Offcanvas Menu Button */}
              <div className="block lg:hidden">
                <button
                  id="openBtn"
                  className="hamburger-menu mobile-menu-trigger"
                >
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            </div>
            {/* Header User Event */}
          </div>
        </div>
      </header>
      {/*...::: Header End :::... */}
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Hero Section Start :::... */}
        <section className="section-hero">
          <div className="relative z-10">
            {/* Hero Space */}
            <div className="pb-20 pt-[100px] md:pt-[120px] lg:pb-[110px] lg:pt-[190px]">
              {/* Section Container */}
              <div className="container-default">
                {/* Hero Area Block */}
                <div className="grid items-center gap-x-[60px] gap-y-12 lg:grid-cols-[1fr_0.8fr] xl:gap-x-[100px]">
                  {/* Hero Content Block */}
                  <div className="mx-auto max-w-[580px] text-center lg:max-w-none lg:text-left">
                    <h1 className="mb-6 font-DmSans text-[32px] font-bold leading-[1.04] -tracking-[1px] sm:text-5xl lg:text-[65px] xl:text-[78px] xxl:text-[90px]">
                      Spotlighting African Journals
                    </h1>
                    <p className="mb-8 lg:mb-[50px]">
                      Welcome to AfriJour, your gateway to the rich and diverse
                      world of African scholarship. We are dedicated to
                      amplifying the voices of African journals, offering a
                      platform where their unique narratives and perspectives
                      can shine brightly.
                    </p>
                    <Link href="#" className="group relative inline-block">
                      <div className="btn is-large is-rounded is-violet">
                        Get Started Now
                      </div>
                      <div className="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0" />
                    </Link>
                  </div>
                  {/* Hero Content Block */}
                  {/* Hero Image Block */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="relative inline-block">
                      <Image
                        src="/assets/img/content/hero1.jpeg"
                        alt="hero-img"
                        width={600}
                        height={600}
                        className="max-w-full rounded-full"
                      />
                      {/* Hero Image Shape */}
                      <div className="absolute right-0 top-1 flex h-[150px] w-[150px] items-center justify-center text-center xl:left-[320px]">
                        <Image
                          src="assets/img/elements/hero-4-start-shape-1.svg"
                          alt="hero-4-start-shape-1"
                          width={150}
                          height={150}
                          className="rotate-360"
                        />
                        <span className="absolute inline-block max-w-[100px] text-base font-bold text-ColorBlack">
                          Latest Journals are available
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Hero Image Block */}
                </div>
                {/* Hero Area Block */}
              </div>
              {/* Section Container */}
            </div>
            {/* Hero Space */}
            {/* Hero Background Shape */}
            <Image
              src="assets/img/elements/hero-4-bg-shape.svg"
              alt="hero-4-bg-shape"
              height={1038}
              width={1038}
              className="absolute right-0 top-0 -z-10"
            />
            {/* Background Divider Shape */}
            <div className="min-h-[65px] w-full bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-contain bg-[center_bottom] bg-repeat-x" />
          </div>
        </section>
        {/*...::: Hero Section End :::... */}
        {/*...::: Features Section Start :::... */}
        <section className="section-features" id="features">
          {/* Section Background */}
          <div className="relative z-10 bg-[#F5EFEB]">
            {/* Section Space */}
            <div className="section-space">
              {/* Section Container */}
              <div className="container-default">
                {/* Section Content Wrapper */}
                <div
                  className="mb-[60px] xl:mb-20 jos"
                  data-jos_once={1}
                  data-jos_animation="fade-up"
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  {/* Section Content Block */}
                  <div className="mx-auto max-w-[636px]">
                    <h2 className="text-center font-DmSans -tracking-[1px]">
                      Special features that make AfriJour the best
                    </h2>
                  </div>
                  {/* Section Content Block */}
                </div>
                {/* Section Content Wrapper */}
                {/* Feature List */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {/* Features Item */}
                  <div
                    className="jos"
                    data-jos_animation="fade-right"
                    data-jos_delay={0}
                    data-jos_once={1}
                    data-jos_timingfunction="ease"
                    data-jos_duration="0.7"
                    data-jos_counter={1}
                  >
                    <div className="h-full rounded-[10px] border-2 border-ColorBlack p-[30px] transition-all duration-300 hover:-rotate-3 hover:bg-white">
                      <Image
                        src="assets/img/icons/icon-violet-feature-1.svg"
                        alt="icon-violet-feature-1"
                        width={57}
                        height={69}
                        className="mb-[30px] h-[70px] w-auto"
                      />
                      <div className="mb-4 text-2xl font-semibold -tracking-[0.5px] text-ColorBlack">
                        Journals
                      </div>
                      <p className="line-clamp-3">
                        A diverse collection of African journals from various
                        disciplines, hosted on our platform.
                      </p>
                    </div>
                  </div>
                  {/* Features Item */}
                  {/* Features Item */}
                  <div
                    className="jos"
                    data-jos_animation="fade-right"
                    data-jos_delay="0.3"
                    data-jos_once={1}
                    data-jos_timingfunction="ease"
                    data-jos_duration="0.7"
                    data-jos_counter={1}
                  >
                    <div className="h-full rounded-[10px] border-2 border-ColorBlack p-[30px] transition-all duration-300 hover:-rotate-3 hover:bg-white">
                      <Image
                        src="assets/img/icons/icon-violet-feature-2.svg"
                        alt="icon-violet-feature-2"
                        width={57}
                        height={69}
                        className="mb-[30px] h-[70px] w-auto"
                      />
                      <div className="mb-4 text-2xl font-semibold -tracking-[0.5px] text-ColorBlack">
                        Repositories
                      </div>
                      <p className="line-clamp-3">
                        Secure and stable platforms for hosting journals,
                        ensuring their long-term preservation and accessibility.
                      </p>
                    </div>
                  </div>
                  {/* Features Item */}
                  {/* Features Item */}
                  <div
                    className="jos"
                    data-jos_animation="fade-right"
                    data-jos_delay="0.6"
                    data-jos_once={1}
                    data-jos_timingfunction="ease"
                    data-jos_duration="0.7"
                    data-jos_counter={1}
                  >
                    <div className="h-full rounded-[10px] border-2 border-ColorBlack p-[30px] transition-all duration-300 hover:-rotate-3 hover:bg-white">
                      <Image
                        src="assets/img/icons/icon-violet-feature-3.svg"
                        alt="icon-violet-feature-3"
                        width={57}
                        height={69}
                        className="mb-[30px] h-[70px] w-auto"
                      />
                      <div className="mb-4 text-2xl font-semibold -tracking-[0.5px] text-ColorBlack">
                        Indexes
                      </div>
                      <p className="line-clamp-3">
                        African Journals Indexers that increase visibility and
                        accessibility of African journals in the global
                        scholarly community.
                      </p>
                    </div>
                  </div>
                  {/* Features Item */}
                  {/* Features Item */}
                  <div
                    className="jos"
                    data-jos_animation="fade-right"
                    data-jos_delay="0.9"
                    data-jos_once={1}
                    data-jos_timingfunction="ease"
                    data-jos_duration="0.7"
                    data-jos_counter={1}
                  >
                    <div className="h-full rounded-[10px] border-2 border-ColorBlack p-[30px] transition-all duration-300 hover:-rotate-3 hover:bg-white">
                      <Image
                        src="assets/img/icons/icon-violet-feature-4.svg"
                        alt="icon-violet-feature-4"
                        width={57}
                        height={69}
                        className="mb-[30px] h-[70px] w-auto"
                      />
                      <div className="mb-4 text-2xl font-semibold -tracking-[0.5px] text-ColorBlack">
                        Reviewers
                      </div>
                      <p className="line-clamp-3">
                        African scholars who contribute to the peer review
                        process, ensuring high-quality standards and rigorous
                        academic discourse.
                      </p>
                    </div>
                  </div>
                  {/* Features Item */}
                </div>
                {/* Feature List */}
              </div>
              {/* Section Container */}
            </div>
            {/* Section Space */}
            {/* Feature Element - 1 */}
            <Image
              src="assets/img/elements/home-4-features-element.svg"
              alt="home-4-features-element"
              width={220}
              height={180}
              className="absolute left-[164px] top-[35px] -z-10"
            />
          </div>
          {/* Section Background */}
          {/* Background Divider Shape */}
          <div className="min-h-[65px] w-full rotate-180 bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-contain bg-[center_bottom] bg-repeat-x" />
        </section>
        {/*...::: Features Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <section className="section-content" id="about">
          {/* Section Space */}
          <div className="section-space">
            {/* Section Container */}
            <div className="container-default">
              {/* Content Area */}
              <div className="grid items-center gap-x-[60px] gap-y-10 md:grid-cols-[0.8fr_minmax(0,_1fr)] lg:gap-x-20 xl:gap-x-[110px]">
                {/* Content Block */}
                <div
                  className="order-2 jos"
                  data-jos_animation="fade-right"
                  data-jos_once={1}
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  {/* Section Wrapper */}
                  <div>
                    {/* Section Block */}
                    <div className="mb-5">
                      <h2 className="font-DmSans -tracking-[1px]">
                        Discover the Vibrant Tapestry of African Knowledge
                      </h2>
                    </div>
                    {/* Section Block */}
                  </div>
                  {/* Section Wrapper */}
                  <p>
                    At AfriJour, we believe that African scholarship deserves a
                    prominent place on the global stage. Our platform is
                    committed to showcasing the intellectual richness and
                    diversity emanating from the African continent. Through
                    innovative analytics and dedicated curation, we empower
                    African scholars and researchers, fostering global
                    collaboration and knowledge exchange.
                  </p>
                  <p>
                    Our innovative indexing system ensures that the wealth of
                    African academic work is organized and easily searchable,
                    facilitating efficient discovery of relevant content. To
                    uphold the integrity and quality of the research we feature,
                    AfriJour relies on a dedicated team of Reviewers who
                    meticulously evaluate each submission.
                  </p>
                  <div className="mt-[50px]">
                    <Link href="#" className="group relative z-10 inline-block">
                      <div className="btn is-large is-rounded is-violet">
                        Explore more
                      </div>
                      <div className="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0" />
                    </Link>
                  </div>
                </div>
                {/* Content Block */}
                {/* Content Image Block */}
                <div
                  className="order-1 flex justify-center jos"
                  data-jos_animation="fade-left"
                  data-jos_once={1}
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  <Image
                    className="rounded-xl"
                    src="/assets/img/content/content-img-1.jpeg"
                    alt="content-img-1"
                    width={600}
                    height={600}
                  />
                </div>
                {/* Content Image Block */}
              </div>
              {/* Content Area */}

              {/* Content Area */}
              <div className="mt-24 grid items-center gap-x-[60px] gap-y-10 md:grid-cols-[0.8fr_minmax(0,_1fr)] lg:gap-x-20 xl:gap-x-[110px]">
                {/* Content Block */}
                <div
                  className="order-1 jos"
                  data-jos_animation="fade-right"
                  data-jos_once={1}
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  {/* Section Wrapper */}
                  <div>
                    {/* Section Block */}
                    <div className="mb-5">
                      <h2 className="font-DmSans -tracking-[1px]">
                        Empowering African Scholars, Researchers and Professors.
                      </h2>
                    </div>
                    {/* Section Block */}
                  </div>
                  {/* Section Wrapper */}
                  <p>
                    At AfriJour, our mission is to elevate and support African
                    scholars, researchers, and professors by providing a
                    platform that amplifies their contributions and enhances
                    their global impact. We offer extensive access to a wide
                    range of African journals and research publications,
                    ensuring that their work gains the visibility it deserves.
                  </p>
                  <p>
                    In addition to visibility and access, AfriJour fosters
                    collaboration and networking opportunities within the
                    academic community. Our innovative indexing system and
                    rigorous peer review process create an environment where
                    quality research is highlighted and scholarly dialogue is
                    encouraged.
                  </p>
                  <div className="mt-[50px]">
                    <Link href="#" className="group relative z-10 inline-block">
                      <div className="btn is-large is-rounded is-violet">
                        Explore more
                      </div>
                      <div className="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0" />
                    </Link>
                  </div>
                </div>
                {/* Content Block */}
                {/* Content Image Block */}
                <div
                  className="order-2 flex justify-center jos"
                  data-jos_animation="fade-left"
                  data-jos_once={1}
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  <Image
                    className="rounded-xl"
                    src="/assets/img/content/content-img-2.jpeg"
                    alt="content-img-1"
                    width={600}
                    height={600}
                  />
                </div>
                {/* Content Image Block */}
              </div>
              {/* Content Area */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Space */}
        </section>
        {/*...::: Content Section End :::... */}
        {/*...::: Ticket Slider Section Start :::... */}
        <div className="section-topic">
          <div className="relative">
            {/* Section Space */}
            <div className="section-space-bottom">
              {/* Section Container */}
              <div className="container-default">
                {/* Section Content Wrapper */}
                <div
                  className="mb-[60px] xl:mb-20 jos"
                  data-jos_once={1}
                  data-jos_animation="fade-up"
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  {/* Section Content Block */}
                  <div className="mx-auto max-w-[636px]">
                    <h2 className="text-center font-DmSans -tracking-[1px]">
                      Here are numerous topics that will enhance your research
                    </h2>
                  </div>
                  {/* Section Content Block */}
                </div>
                {/* Section Content Wrapper */}
              </div>
              {/* Section Container */}
              {/* Ticket Slider Area */}
              <div>
                {/* Ticket Wrapper */}
                <div className="flex flex-row flex-nowrap py-5">
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Computer Science
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Art &amp; Music
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Information Technology
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Digital Marketing
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Lifestyle
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Healthcare
                    </div>
                    {/* Ticket Tag */}

                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Time Management
                    </div>
                    {/* Ticket Tag */}

                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Computer Science
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Art &amp; Music
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Information Technology
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Digital Marketing
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Lifestyle
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Healthcare
                    </div>
                    {/* Ticket Tag */}

                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Time Management
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Computer Science
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Art &amp; Music
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Information Technology
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Digital Marketing
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Lifestyle
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Healthcare
                    </div>
                    {/* Ticket Tag */}

                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Time Management
                    </div>
                    {/* Ticket Tag */}

                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                </div>
                {/* Ticket Wrapper */}
                {/* Ticket Wrapper */}
                <div className="flex flex-row flex-nowrap py-5">
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Computer Science
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Art &amp; Music
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Information Technology
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Web Development
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Digital Marketing
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Lifestyle
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Healthcare
                    </div>
                    {/* Ticket Tag */}

                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Time Management
                    </div>
                    {/* Ticket Tag */}

                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Computer Science
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Art &amp; Music
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Information Technology
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Digital Marketing
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Lifestyle
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Healthcare
                    </div>
                    {/* Ticket Tag */}

                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Time Management
                    </div>
                    {/* Ticket Tag */}

                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Computer Science
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Art &amp; Music
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Information Technology
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                  {/* Ticket Content */}
                  <div className="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Digital Marketing
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Lifestyle
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Healthcare
                    </div>
                    {/* Ticket Tag */}

                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Time Management
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      iOS Development
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Leadership Skills
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Business
                    </div>
                    {/* Ticket Tag */}
                    {/* Ticket Tag */}
                    <div className="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                      Photography
                    </div>
                    {/* Ticket Tag */}
                  </div>
                  {/* Ticket Content */}
                </div>
                {/* Ticket Wrapper */}
              </div>
              {/* Ticket Slider Area */}
            </div>
            {/* Section Space */}
          </div>
        </div>
        {/*...::: Ticket Slider Section End :::... */}
        {/*...::: Course Section Start :::... */}
        <section className="course-section" id="journals">
          <div className="relative">
            {/* Section Background */}
            <div className="bg-[#F5EFEB]">
              {/* Section Space */}
              <div className="section-space">
                {/* Section Container */}
                <div className="container-default">
                  {/* Section Content Wrapper */}
                  <div
                    className="mx-auto mb-[60px] grid items-center justify-between gap-5 text-center md:grid-cols-[1fr_minmax(0,_0.85fr)] md:gap-[60px] md:text-left xl:mb-20 xl:gap-28 xxl:gap-[244px] jos"
                    data-jos_once={1}
                    data-jos_animation="fade-up"
                    data-jos_timingfunction="ease"
                    data-jos_duration="0.7"
                    data-jos_delay="0.5"
                    data-jos_counter={1}
                  >
                    {/* Section Content Block */}
                    <div>
                      <h2 className="font-DmSans -tracking-[1px]">
                        Browse our journals that are just right for you
                      </h2>
                    </div>
                    {/* Section Content Block */}
                    {/* Section Text */}
                    <p>
                      Choose from over 20,700 journals and learning paths, with
                      dozens added every week. Top it off with courses that
                      round out your skills and enrich your day-to-day.
                    </p>
                    {/* Section Text */}
                  </div>
                  {/* Section Content Wrapper */}
                  {/* Course List */}
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {/* Course Item */}
                    <div
                      className="jos"
                      data-jos_delay={0}
                      data-jos_once={1}
                      data-jos_animation="fade-up"
                      data-jos_timingfunction="ease"
                      data-jos_duration="0.7"
                      data-jos_counter={1}
                    >
                      <div className="group flex flex-col gap-y-6 rounded-[10px] bg-white p-6 lg:p-[30px]">
                        <div className="overflow-hidden rounded-[10px]">
                          <Image
                            src="/assets/img/content/course-img-1.jpeg"
                            alt="course-img-1"
                            width={356}
                            height={250}
                            className="h-auto w-full transition-all duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-wrap justify-between gap-4 text-sm font-semibold">
                          <ul className="flex items-center gap-x-[22px]">
                            <li className="relative after:absolute after:left-[calc(100%+_10px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-ColorBlack/80 last:after:hidden">
                              <Link href="#" className="hover:text-ColorViolet">
                                Technology
                              </Link>
                            </li>
                            <li className="relative after:absolute after:left-[calc(100%+_10px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-ColorBlack/80 last:after:hidden">
                              <span>942 Reviewers</span>
                            </li>
                          </ul>
                          <div className="inline-flex">
                            <span className="text-ColorYellow">
                              <Star fill="orange" strokeWidth={0} />
                            </span>
                            4.8
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="line-clamp-2 text-xl font-bold leading-[1.25] text-ColorBlack group-hover:text-ColorViolet lg:text-2xl"
                        >
                          African Computer and Information Technology
                        </Link>
                        <button className="btn is-large is-rounded mt-auto border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] text-ColorBlack hover:bg-ColorViolet hover:text-white">
                          View Journal
                        </button>
                      </div>
                    </div>
                    {/* Course Item */}
                    {/* Course Item */}
                    <div
                      className="jos"
                      data-jos_delay="0.3"
                      data-jos_once={1}
                      data-jos_animation="fade-up"
                      data-jos_timingfunction="ease"
                      data-jos_duration="0.7"
                      data-jos_counter={1}
                    >
                      <div className="group flex flex-col gap-y-6 rounded-[10px] bg-white p-6 lg:p-[30px]">
                        <div className="overflow-hidden rounded-[10px]">
                          <Image
                            src="/assets/img/content/course-img-2.jpeg"
                            alt="course-img-2"
                            width={356}
                            height={250}
                            className="h-auto w-full transition-all duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-wrap justify-between gap-4 text-sm font-semibold">
                          <ul className="flex items-center gap-x-[22px]">
                            <li className="relative after:absolute after:left-[calc(100%+_10px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-ColorBlack/80 last:after:hidden">
                              <Link href="#" className="hover:text-ColorViolet">
                                Science
                              </Link>
                            </li>
                            <li className="relative after:absolute after:left-[calc(100%+_10px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-ColorBlack/80 last:after:hidden">
                              <span>124 Reviewers</span>
                            </li>
                          </ul>
                          <div className="inline-flex">
                            <span className="text-ColorYellow">
                              <Star fill="orange" strokeWidth={0} />
                            </span>
                            3.5
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="line-clamp-2 text-xl font-bold leading-[1.25] text-ColorBlack group-hover:text-ColorViolet lg:text-2xl"
                        >
                          Social Sciences and Humanities
                        </Link>
                        <button className="btn is-large is-rounded mt-auto border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] text-ColorBlack hover:bg-ColorViolet hover:text-white">
                          View Journal
                        </button>
                      </div>
                    </div>
                    {/* Course Item */}
                    {/* Course Item */}
                    <div
                      className="jos"
                      data-jos_delay="0.6"
                      data-jos_once={1}
                      data-jos_animation="fade-up"
                      data-jos_timingfunction="ease"
                      data-jos_duration="0.7"
                      data-jos_counter={1}
                    >
                      <div className="group flex flex-col gap-y-6 rounded-[10px] bg-white p-6 lg:p-[30px]">
                        <div className="overflow-hidden rounded-[10px]">
                          <Image
                            src="/assets/img/content/course-img-3.jpeg"
                            alt="course-img-3"
                            width={356}
                            height={250}
                            className="h-auto w-full transition-all duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-wrap justify-between gap-4 text-sm font-semibold">
                          <ul className="flex items-center gap-x-[22px]">
                            <li className="relative after:absolute after:left-[calc(100%+_10px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-ColorBlack/80 last:after:hidden">
                              <Link href="#" className="hover:text-ColorViolet">
                                Medicine and Health
                              </Link>
                            </li>
                            <li className="relative after:absolute after:left-[calc(100%+_10px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-ColorBlack/80 last:after:hidden">
                              <span>22 Reviewers</span>
                            </li>
                          </ul>
                          <div className="inline-flex">
                            <span className="text-ColorYellow">
                              <Star fill="orange" strokeWidth={0} />
                            </span>
                            5.0
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="line-clamp-2 text-xl font-bold leading-[1.25] text-ColorBlack group-hover:text-ColorViolet lg:text-2xl"
                        >
                          Journal of Medicine and Health Sciences
                        </Link>
                        <button className="btn is-large is-rounded mt-auto border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] text-ColorBlack hover:bg-ColorViolet hover:text-white">
                          View Journal
                        </button>
                      </div>
                    </div>
                    {/* Course Item */}
                  </div>
                  {/* Course List */}
                </div>
                {/* Section Container */}
              </div>
              {/* Section Space */}
            </div>
            {/* Background Divider Shape */}
            <div className="absolute top-0 min-h-[65px] w-full bg-[url('/assets/img/elements/home-4-divider-shape-3.svg')] bg-contain bg-[center_top] bg-repeat-x" />
            {/* Background Divider Shape */}
            <div className="-mt-px min-h-[65px] w-full bg-[url('/assets/img/elements/home-4-divider-shape-4.svg')] bg-contain bg-[center_top] bg-repeat-x" />
            {/* Section Background */}
          </div>
        </section>
        {/*...::: Course Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <section className="section-content">
          {/* Section Space */}
          <div className="section-space">
            {/* Section Container */}
            <div className="container-default">
              {/* Content Area */}
              <div className="grid items-center gap-x-[60px] gap-y-10 md:grid-cols-[1fr_minmax(0,_0.8fr)] lg:gap-x-20 xl:gap-x-[110px]">
                {/* Content Block */}
                <div
                  className="order-1 jos"
                  data-jos_animation="fade-right"
                  data-jos_once={1}
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  {/* Section Wrapper */}
                  <div>
                    {/* Section Block */}
                    <div className="mb-5">
                      <h2 className="font-DmSans -tracking-[1px]">
                        Share your knowledge &amp; experience with others
                      </h2>
                    </div>
                    {/* Section Block */}
                  </div>
                  {/* Section Wrapper */}
                  <p>
                    We envision AfriJour as the premier gateway to African
                    journals, fostering a vibrant ecosystem of scholarly
                    exchange and discovery. We aspire to be a catalyst for the
                    global recognition and appreciation of African scholarship,
                    inspiring and empowering the next generation of African
                    scholars and thought leaders.
                  </p>
                  <ul className="flex flex-col gap-5 font-semibold text-ColorBlack">
                    <li>
                      <span className="mr-3 inline-block text-xl">
                        <BadgeCheck />
                      </span>
                      Comprehensive African Journals Directory
                    </li>
                    <li>
                      <span className="mr-3 inline-block text-xl">
                        <BadgeCheck />
                      </span>
                      Innovative Analytics and Insights
                    </li>
                    <li>
                      <span className="mr-3 inline-block text-xl">
                        <BadgeCheck />
                      </span>
                      Access to African Journals Repositories
                    </li>
                  </ul>
                  <div className="mt-[50px]">
                    <Link href="#" className="group relative z-10 inline-block">
                      <div className="btn is-large is-rounded is-violet">
                        Go to Dashboard
                      </div>
                      <div className="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0" />
                    </Link>
                  </div>
                </div>
                {/* Content Block */}
                {/* Content Image Block */}
                <div
                  className="order-2 flex justify-center jos"
                  data-jos_animation="fade-left"
                  data-jos_once={1}
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  <Image
                    className="rounded-xl"
                    src="/assets/img/content/content-img-3.jpeg"
                    alt="content-img-3"
                    width={600}
                    height={600}
                  />
                </div>
                {/* Content Image Block */}
              </div>
              {/* Content Area */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Space */}
        </section>
        {/*...::: Content Section End :::... */}
        {/*...::: Testimonial Section Start :::... */}
        <section className="section-testimonial" id="testimonials">
          <div className="relative">
            {/* Section Container */}
            <div className="container-default">
              {/* Section Content Wrapper */}
              <div
                className="mb-[60px] xl:mb-20 jos"
                data-jos_once={1}
                data-jos_animation="fade-up"
                data-jos_timingfunction="ease"
                data-jos_duration="0.7"
                data-jos_delay="0.5"
                data-jos_counter={1}
              >
                {/* Section Content Block */}
                <div className="mx-auto max-w-[670px]">
                  <h2 className="text-center font-DmSans -tracking-[1px]">
                    Researchers like you achieve their goals through our
                    journals
                  </h2>
                </div>
                {/* Section Content Block */}
                {/* Testimonial Area */}
                <div className="grid gap-x-6 md:grid-cols-2">
                  {/* Testimonial Item  */}
                  <div className="flex flex-col gap-y-6 rounded-[10px] p-[30px]">
                    <div className="flex gap-x-2 text-3xl text-ColorYellow">
                      <Star fill="orange" strokeWidth={0} className="size-8" />
                      <Star fill="orange" strokeWidth={0} className="size-8" />
                      <Star fill="orange" strokeWidth={0} className="size-8" />
                      <Star fill="orange" strokeWidth={0} className="size-8" />
                      <Star fill="orange" strokeWidth={0} className="size-8" />
                    </div>
                    <p className="mb-0 text-ColorBlack">
                      &quot;The online jornals were truly a lifesaver. Without
                      their expertise and kind help I could not have achieved
                      the best results in my class. I followed what they said
                      and they helped me get the best grades.&quot;
                    </p>
                    <div className="flex items-center gap-[10px]">
                      <Image
                        src="/assets/img/testimonial-avatar-1.png"
                        alt="testimonial-avatar-1"
                        width={69}
                        height={60}
                      />
                      <div>
                        <span className="block font-semibold text-ColorBlack">
                          Kristin Watson
                        </span>
                        <span className="text-sm leading-[1.42]">
                          Student of Cambridge University, UK
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Item  */}
                  {/* Testimonial Item  */}
                  <div className="flex flex-col gap-y-6 rounded-[10px] p-[30px]">
                    <div className="flex gap-x-2 text-3xl text-ColorYellow">
                      <Star fill="orange" strokeWidth={0} className="size-8" />
                      <Star fill="orange" strokeWidth={0} className="size-8" />
                      <Star fill="orange" strokeWidth={0} className="size-8" />
                      <Star fill="orange" strokeWidth={0} className="size-8" />
                      <Star fill="orange" strokeWidth={0} className="size-8" />
                    </div>
                    <p className="mb-0 text-ColorBlack">
                      &quot;I actually wanted to learn more than what was
                      taught. I knew I couldn&apos;t be a student, but I wanted
                      to at least understand some of the basics. Then I bought
                      african journal &amp; completed the whole course now I am
                      a professor.&quot;
                    </p>
                    <div className="flex items-center gap-[10px]">
                      <Image
                        src="/assets/img/testimonial-avatar-2.png"
                        alt="testimonial-avatar-2"
                        width={69}
                        height={60}
                      />
                      <div>
                        <span className="block font-semibold text-ColorBlack">
                          Kristin Watson
                        </span>
                        <span className="text-sm leading-[1.42]">
                          Student of Cambridge University, UK
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Item  */}
                </div>
                {/* Testimonial Area */}
              </div>
              {/* Section Content Wrapper */}
            </div>
            {/* Section Container */}
            {/* Background Divider Shape */}
            <div className="min-h-[65px] w-full bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-contain bg-[center_bottom] bg-repeat-x" />
          </div>
        </section>
        {/*...::: Testimonial Section End :::... */}
        {/*...::: FAQ Section Start :::... */}
        <section className="section-FAQ" id="faq">
          <div className="realative">
            {/* Section Background */}
            <div className="bg-[#F5EFEB]">
              {/* Section Space */}
              <div className="section-space">
                {/* Section Container */}
                <div className="container-default">
                  {/* FAQ Area */}
                  <div className="grid items-center gap-x-6 gap-y-10 md:grid-cols-2">
                    {/* Content Block */}
                    <div
                      className="jos"
                      data-jos_animation="fade-right"
                      data-jos_once={1}
                      data-jos_timingfunction="ease"
                      data-jos_duration="0.7"
                      data-jos_delay="0.5"
                      data-jos_counter={1}
                    >
                      {/* Section Wrapper */}
                      <div>
                        {/* Section Block */}
                        <div className="mb-5">
                          <h2 className="font-DmSans -tracking-[1px]">
                            Frequently asked questions about our Afrijour
                          </h2>
                        </div>
                        {/* Section Block */}
                      </div>
                      {/* Section Wrapper */}
                      <p>
                        We encourage our students , researchers, Professors to
                        ask us any questions regarding our journals. Our skilled
                        mentors are ready to answer all your questions 24/7.
                      </p>
                    </div>
                    {/* Content Block */}
                    {/* FAQ Block */}
                    <div
                      className="flex justify-center jos"
                      data-jos_animation="fade-left"
                      data-jos_once={1}
                      data-jos_timingfunction="ease"
                      data-jos_duration="0.7"
                      data-jos_delay="0.5"
                      data-jos_counter={1}
                    >
                      {/* Accordion List */}
                      <ul className="mx-auto max-w-[1076px] rounded-[10px] border-4 border-ColorBlack">
                        {/* Accordion Item */}
                        <li className="accordion-item active last:border-2-0 overflow-hidden border-b-4 border-ColorBlack p-[30px]">
                          {/* Accordion Header */}
                          <div className="accordion-header relative pr-8 text-xl font-semibold text-ColorBlack">
                            <button className="flex-1 text-left">
                              Q. Explore a Wide Range of African Journals
                            </button>
                            <div className="accordion-icon-2 absolute right-0 top-0">
                              <ChevronDown />
                            </div>
                          </div>
                          {/* Accordion Header */}
                          {/* Accordion Body */}
                          <div className="accordion-body max-w-[826px] opacity-80">
                            <p className="pt-5">
                              You can access African journals through our
                              extensive Journal Directory. Simply search by
                              discipline or browse through our categories to
                              find the journals relevant to your field of
                              interest. Our platform is designed to make finding
                              and accessing research publications easy and
                              intuitive.
                            </p>
                          </div>
                          {/* Accordion Body */}
                        </li>
                        {/* Accordion Item */}
                        {/* Accordion Item */}
                        <li className="accordion-item overflow-hidden border-b-4 border-ColorBlack p-[30px] last:border-b-0">
                          {/* Accordion Header */}
                          <div className="accordion-header relative pr-8 text-xl font-semibold text-ColorBlack">
                            <button className="flex-1 text-left">
                              Q. What are Partner Repositories, and how do they
                              work?
                            </button>
                            <div className="accordion-icon-2 absolute right-0 top-0">
                              <ChevronDown />
                            </div>
                          </div>
                          {/* Accordion Header */}
                          {/* Accordion Body */}
                          <div className="accordion-body max-w-[826px] opacity-80">
                            <p className="pt-5">
                              Partner Repositories are collaborative platforms
                              that host a wide range of African research
                              publications. AfriJour partners with these
                              repositories to ensure comprehensive access to
                              scholarly articles and papers from across the
                              continent. Through our platform, you can
                              seamlessly access research hosted on these partner
                              repositories.
                            </p>
                          </div>
                          {/* Accordion Body */}
                        </li>
                        {/* Accordion Item */}
                        {/* Accordion Item */}
                        <li className="accordion-item overflow-hidden border-b-4 border-ColorBlack p-[30px] last:border-b-0">
                          {/* Accordion Header */}
                          <div className="accordion-header relative pr-8 text-xl font-semibold text-ColorBlack">
                            <button className="flex-1 text-left">
                              Q. How does AfriJour&apos;s indexing system
                              benefit researchers?
                            </button>
                            <div className="accordion-icon-2 absolute right-0 top-0">
                              <ChevronDown />
                            </div>
                          </div>
                          {/* Accordion Header */}
                          {/* Accordion Body */}
                          <div className="accordion-body max-w-[826px] opacity-80">
                            <p className="pt-5">
                              Our indexing system categorizes and organizes
                              journals and articles, making it easier for
                              researchers to find relevant content quickly. By
                              improving the discoverability of African research,
                              our indexing system helps users efficiently access
                              the information they need for their studies and
                              academic work.
                            </p>
                          </div>
                          {/* Accordion Body */}
                        </li>
                        {/* Accordion Item */}
                        {/* Accordion Item */}
                        <li className="accordion-item overflow-hidden border-b-4 border-ColorBlack p-[30px] last:border-b-0">
                          {/* Accordion Header */}
                          <div className="accordion-header relative pr-8 text-xl font-semibold text-ColorBlack">
                            <button className="flex-1 text-left">
                              Q. What role do Reviewers play on AfriJour?
                            </button>
                            <div className="accordion-icon-2 absolute right-0 top-0">
                              <ChevronDown />
                            </div>
                          </div>
                          {/* Accordion Header */}
                          {/* Accordion Body */}
                          <div className="accordion-body max-w-[826px] opacity-80">
                            <p className="pt-5">
                              Reviewers are integral to maintaining the quality
                              and credibility of the research featured on
                              AfriJour. They are experts in their fields who
                              conduct rigorous peer reviews to ensure that the
                              academic content meets the highest standards of
                              excellence before it is published on our platform.
                            </p>
                          </div>
                          {/* Accordion Body */}
                        </li>
                        {/* Accordion Item */}
                      </ul>
                      {/* Accordion List */}
                    </div>
                    {/* FAQ Block */}
                  </div>
                  {/* FAQ Area */}
                </div>
                {/* Section Container */}
              </div>
              {/* Section Space */}
            </div>
            {/* Section Background */}
            {/* Background Divider Shape */}
            <div className="min-h-[65px] w-full rotate-180 bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-contain bg-[center_bottom] bg-repeat-x" />
          </div>
        </section>
        {/*...::: FAQ Section End :::... */}
        {/*...::: Newsletter Section Start :::... */}
        <section className="section-newsletter">
          <div className="relative">
            {/* Section Space */}
            <div className="section-space">
              {/* Section Container */}
              <div className="container-default">
                {/* Newsletter Area */}
                <div
                  className="mx-auto flex max-w-[720px] flex-col justify-center text-center jos"
                  data-jos_once={1}
                  data-jos_animation="fade-up"
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  <h2 className="mb-5 font-DmSans -tracking-[1px]">
                    Start learning today and expand your knowledge at any level
                  </h2>
                  <p className="mb-[50px]">
                    We have easily downloadable learning app on any device and
                    anywhere to experience an exclusive e-learning platform for
                    world-class education.
                  </p>
                </div>
                {/* Newsletter Area */}
              </div>
              {/* Section Container */}
            </div>
            {/* Section Space */}
            {/* Background Divider Shape */}
            <div className="absolute bottom-0 left-0 -mb-px h-10 w-full bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-cover bg-[center_top] bg-repeat-x xxl:h-14" />
          </div>
        </section>
        {/*...::: Newsletter Section End :::... */}
      </main>
      {/*...::: Footer Section Start :::... */}
      <footer className="section-footer">
        <div className="bg-[#F5EFEB]">
          {/* Footer Area Center */}
          <div className="text-ColorBlack">
            {/* Footer Center Spacing */}
            <div className="py-[60px] lg:py-20 xl:py-[100px]">
              {/* Section Container */}
              <div className="container-default">
                {/* Footer Widget List */}
                <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_repeat(3,_auto)] xl:gap-x-24 xxl:gap-x-[134px]">
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-7 md:col-span-3 lg:col-span-1">
                    {/* Footer Logo */}
                    {/* <Link href="/">
                      <Image
                        src="assets/img/logo-violet-dark.png"
                        alt="Masco"
                        width={109}
                        height={24}
                      />
                    </Link> */}
                    <h1 className="text-5xl">AfriJour</h1>
                    {/* Footer Content */}
                    <div>
                      {/* Footer About Text */}
                      <div className="lg:max-w-[416px]">
                        Spotlight and elevate African journals. We aim to foster
                        a global appreciation for the intellectual richness and
                        diversity that Africa has to offer.
                      </div>
                      {/* Footer Mail */}
                      <Link
                        href="mailto:info@afrijour.com"
                        className="my-6 block underline-offset-4 transition-all duration-300 hover:underline"
                      >
                        info@afrijour.com
                      </Link>
                      {/* Footer Social Link */}
                      <div className="flex flex-wrap gap-5">
                        <Link
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-ColorBlack/10 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorViolet hover:text-white"
                          aria-label="twitter"
                        >
                          <Twitter />
                        </Link>
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-ColorBlack/10 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorViolet hover:text-white"
                          aria-label="facebook"
                        >
                          <Facebook />
                        </Link>
                        <Link
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-ColorBlack/10 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorViolet hover:text-white"
                          aria-label="instagram"
                        >
                          <Instagram />
                        </Link>
                        <Link
                          href="https://www.github.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-ColorBlack/10 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorViolet hover:text-white"
                          aria-label="github"
                        >
                          <Github />
                        </Link>
                      </div>
                    </div>
                    {/* Footer Content */}
                  </div>
                  {/* Footer Widget Item */}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-7 md:col-span-1 lg:col-span-1">
                    {/* Footer Widget Title */}
                    <div className="text-xl font-semibold capitalize">
                      Primary Pages
                    </div>
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <Link
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/about"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/services"
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/pricing"
                        >
                          pricing
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/contact"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item */}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                    {/* Footer Title */}
                    <div className="text-xl font-semibold capitalize">
                      Utility pages
                    </div>
                    {/* Footer Title */}
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <Link
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/signup"
                        >
                          Signup
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/login"
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/error-404"
                        >
                          404 Not found
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/reset-password"
                        >
                          Password Reset
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item*/}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                    {/* Footer Title */}
                    <div className="text-xl font-semibold capitalize">
                      Resources
                    </div>
                    {/* Footer Title */}
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <Link
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Support
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Privacy policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Terms &amp; Conditions
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Strategic finance
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Video guide
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item */}
                </div>
                {/* Footer Widget List */}
              </div>
              {/* Section Container */}
            </div>
            {/* Footer Center Spacing */}
          </div>
          {/* Footer Area Center */}
          <div className="horizontal-line bg-ColorBlack" />
          {/* Footer Bottom */}
          <div>
            {/* Footer Bottom Spacing */}
            <div className="py-[18px]">
              {/* Section Container */}
              <div className="container-default">
                <div className="text-center">
                  © Copyright 2024, All Rights Reserved
                </div>
              </div>
              {/* Section Container */}
            </div>
            {/* Footer Bottom Spacing */}
          </div>
          {/* Footer Bottom */}
        </div>
      </footer>
      {/*...::: Footer Section End :::... */}
    </div>
  );
}
