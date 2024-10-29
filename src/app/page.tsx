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
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import WorldMap from "@/components/WorldMap";
import { Toaster } from "react-hot-toast";
import Chatbot from "../components/Chatbot";
import { Language, translations } from "@/data/content";


export default function Home() {


    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [translation, setTranslation] = useState(translations.en);

  
    const handleLanguageChange = (languageCode: string) => {
      setSelectedLanguage(languageCode);
      setTranslation(translations[languageCode]);
    };
  
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
      <Navbar setSelectedLanguage={handleLanguageChange} translation={translation}  selectedLanguage={selectedLanguage}/>
      {/*...::: Header End :::... */}
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Hero Section Start :::... */}
        <section className="section-hero">
          <div className="relative z-10">
            <div className="bg-[#ccd6e8]">
            {/* Hero Space */}
            <div className="pb-20 pt-[100px] md:pt-[120px] lg:pb-[110px] lg:pt-[190px]">
              {/* Section Container */}
              <div className="container-default">
                {/* Hero Area Block */}
                <div className="grid items-center gap-x-[60px] gap-y-12 lg:grid-cols-[1fr_0.8fr] xl:gap-x-[100px]">
                  {/* Hero Content Block */}
                  <div className="mx-auto max-w-[580px] text-center lg:max-w-none lg:text-left">
                    <h1 className="mb-6 font-DmSans text-[32px] font-bold leading-[1.04] -tracking-[1px] sm:text-5xl lg:text-[65px] xl:text-[78px] xxl:text-[90px]">
                      {translation.hero.title}
                    </h1>
                    <p className="mb-8 lg:mb-[50px]">
                      {translation.hero.subtitle}
                    </p>
                    <Link
                      href="https://Afrika Journals-dashboard.vercel.app/"
                      className="group relative inline-block"
                    >
                      <div className="btn is-large is-rounded bg-yellow-500 hover:bg-yellow-600">
                        {translation.hero.cta}
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
                      <div className="absolute right-0 top-1 flex h-[180px] w-[180px] items-center justify-center text-center xl:left-[320px]">
                        <Image
                          src="assets/img/elements/hero-4-start-shape-1.svg"
                          alt="hero-4-start-shape-1"
                          width={180}
                          height={180}
                          className="rotate-360"
                        />
                        <span className="absolute inline-block max-w-[100px] text-base font-bold text-ColorBlack">
                         {translation.hero.promo}
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
            {/* <div className="min-h-[65px] w-full bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-contain bg-[#e5e7eb]  bg-[center_bottom] bg-repeat-x" /> */}
          </div>
        </section>
        {/*...::: Hero Section End :::... */}
        {/*...::: Features Section Start :::... */}
        <section className="section-features" id="features">
          {/* Section Background */}
          <div className="relative z-10 bg-[#e5e7eb]  text-black">
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
                    <h2 className="text-center text-yellow-600 font-DmSans -tracking-[1px]">
                      {translation.features.title}
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
                    <div className="h-full rounded-[10px] border-2 border-ColorBlack p-[30px] text-black  transition-all duration-300 hover:-rotate-3 hover:bg-yellow-500">
                      <Image
                        src="assets/img/icons/icon-violet-feature-1.svg"
                        alt="icon-violet-feature-1"
                        width={57}
                        height={69}
                        className="mb-[30px] h-[70px] w-auto"
                      />
                      <div className="mb-4 text-black text-2xl font-semibold -tracking-[0.5px] text-ColorBlack">
                        {translation.features.items[0].title}
                      </div>
                      <p className="line-clamp-3">
                      {translation.features.items[0].description}
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
                    <div className="h-full rounded-[10px] border-2 border-ColorBlack p-[30px] transition-all duration-300 hover:-rotate-3 hover:bg-yellow-500">
                      <Image
                        src="assets/img/icons/icon-violet-feature-2.svg"
                        alt="icon-violet-feature-2"
                        width={57}
                        height={69}
                        className="mb-[30px] h-[70px] w-auto"
                      />
                      <div className="mb-4 text-black text-2xl font-semibold -tracking-[0.5px] text-ColorBlack">
                      {translation.features.items[1].title}
                      </div>
                      <p className="line-clamp-3">
                      {translation.features.items[1].description}
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
                    <div className="h-full rounded-[10px] border-2 border-ColorBlack p-[30px] transition-all duration-300 hover:-rotate-3 hover:bg-yellow-500">
                      <Image
                        src="assets/img/icons/icon-violet-feature-3.svg"
                        alt="icon-violet-feature-3"
                        width={57}
                        height={69}
                        className="mb-[30px] h-[70px] w-auto"
                      />
                      <div className="mb-4 text-black text-2xl font-semibold -tracking-[0.5px] text-ColorBlack">
                      {translation.features.items[2].title}
                      </div>
                      <p className="line-clamp-3">
                      {translation.features.items[2].description}
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
                    <div className="h-full rounded-[10px] border-2 border-ColorBlack p-[30px] transition-all duration-300 hover:-rotate-3 hover:bg-yellow-500">
                      <Image
                        src="assets/img/icons/icon-violet-feature-4.svg"
                        alt="icon-violet-feature-4"
                        width={57}
                        height={69}
                        className="mb-[30px] h-[70px] w-auto"
                      />
                      <div className="mb-4 text-black text-2xl font-semibold -tracking-[0.5px] text-ColorBlack">
                      {translation.features.items[3].title}
                      </div>
                      <p className="line-clamp-3">
                          {translation.features.items[3].description}
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
          <div className="min-h-[65px] w-full rotate-180 bg-[#e5e7eb]  bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-contain bg-[center_bottom] bg-repeat-x" />
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
                        {translation.about.title}
                      </h2>
                    </div>
                    {/* Section Block */}
                  </div>
                  {/* Section Wrapper */}
                  <p>
                   {translation.about.description}
                  </p>
                  <p>
                   {translation.about.description2}
                  </p>
                  <div className="mt-[50px]">
                    <Link
                      href="https://Afrika Journals-dashboard.vercel.app/"
                      className="group relative z-10 inline-block"
                    >
                      <div className="btn is-large is-rounded bg-yellow-500 hover:bg-yellow-600">
                       {translation.about.cta}
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
                      {translation.about2.title}
                      </h2>
                    </div>
                    {/* Section Block */}
                  </div>
                  {/* Section Wrapper */}
                  <p>
                  {translation.about2.description}
                  </p>
                  <p>
                  {translation.about2.description2}
                  </p>
                  <div className="mt-[50px]">
                    <Link
                      href="https://Afrika Journals-dashboard.vercel.app/analytics"
                      className="group relative z-10 inline-block"
                    >
                      <div className="btn is-large is-rounded bg-yellow-500 hover:bg-yellow-600">
                      {translation.about2.cta}
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
          <div className="min-h-[65px] w-full rotate-180 bg-[#9ca3af] bg-[url('/assets/img/elements/home-4-divider-shape-4.svg')] bg-contain bg-[center_bottom] bg-repeat-x -mb-1" />
          {/* Section Space */}
        </section>
        {/*...::: Content Section End :::... */}
        {/*...::: Ticket Slider Section Start :::... */}
        <div className="section-topic bg-[#ccd6e8]  pt-10">
       
          <div className="relative">
            {/* Section Space */}
            <div className="section-space-bottom2">
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
                     {translation.blog.title}
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
            <div className="bg-[#ccd6e8] ">
              <div className="min-h-[65px] w-full bg-[url('/assets/img/elements/home-4-divider-shape-4.svg')] bg-contain bg-[center_bottom] bg-repeat-x" />
              {/* Section Space */}
              <div className="section-space " style={{ paddingTop: "0px" }}>
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
                        {translation.blog.subtitle}
                      </h2>
                    </div>
                    {/* Section Content Block */}
                    {/* Section Text */}
                    <p>
                   {translation.blog.description}
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
                      <div className="group flex flex-col gap-y-6 rounded-[10px] bg-[#ccd6e8]  p-6 lg:p-[30px]">
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
<Link href="#" className="hover:text-yellow-500">
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
                          className="line-clamp-2 text-xl font-bold leading-[1.25] text-ColorBlack group-hover:text-yellow-500 lg:text-2xl"
                        >
                          African Computer and Information Technology
                        </Link>
                        <button className="btn is-large is-rounded mt-auto border-2 border-b-[5px] border-ColorBlack bg-[#ffd372] text-ColorBlack hover:bg-yellow-500 hover:text-white">
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
                      <div className="group flex flex-col gap-y-6 rounded-[10px] bg-[#ccd6e8]  p-6 lg:p-[30px]">
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
                              <Link href="#" className="hover:text-yellow-500">
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
                          className="line-clamp-2 text-xl font-bold leading-[1.25] text-ColorBlack group-hover:text-yellow-500 lg:text-2xl"
                        >
                          Social Sciences and Humanities
                        </Link>
                        <button className="btn is-large is-rounded mt-auto border-2 border-b-[5px] border-ColorBlack bg-[#ffd372] text-ColorBlack hover:bg-yellow-500 hover:text-white">
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
                      <div className="group flex flex-col gap-y-6 rounded-[10px] bg-[#ccd6e8]  p-6 lg:p-[30px]">
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
                              <Link href="#" className="hover:text-yellow-500">
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
                          className="line-clamp-2 text-xl font-bold leading-[1.25] text-ColorBlack group-hover:text-yellow-500 lg:text-2xl"
                        >
                          Journal of Medicine and Health Sciences
                        </Link>
                        <button className="btn is-large is-rounded mt-auto border-2 border-b-[5px] border-ColorBlack bg-[#ffd372] text-ColorBlack hover:bg-yellow-500 hover:text-white">
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
                       {translation.testimonials.title}
                      </h2>
                    </div>
                    {/* Section Block */}
                  </div>
                  {/* Section Wrapper */}
                  <p>
                  {translation.testimonials.description}
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
                    <Link
                      href="https://Afrika Journals-dashboard.vercel.app/"
                      className="group relative z-10 inline-block"
                    >
                      <div className="btn is-large is-rounded bg-yellow-500 hover:bg-yellow-600">
                        {translation.journals.cta}
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
        <section className="section-testimonial bg-[#babec5] text-white pt-20" id="testimonials">
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
                  <h2 className="text-center font-DmSans text-yellow-750 -tracking-[1px]">
                    {translation.testimonials.title2}
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
                    <p className="mb-0">
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
                    <p className="mb-0 ">
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
            <div className="bg-[#ccd6e8] ">
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
                        {translation.faq.title}
                          </h2>
                        </div>
                        {/* Section Block */}
                      </div>
                      {/* Section Wrapper */}
                      <p>
                       {translation.faq.description}
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
                              publications. Afrika Journals partners with these
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
                              Q. How does Afrika Journals&apos;s indexing system
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
                              Q. What role do Reviewers play on Afrika Journals?
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
                              Afrika Journals. They are experts in their fields who
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
                   {translation.map.title}
                  </h2>
                  <p className="mb-[50px]">
                  {translation.map.description}
                  </p>
                </div>
                <div className="mb-80 mt-20">
                  <WorldMap />
                </div>
                {/* Newsletter Area */}
              </div>
              {/* Section Container */}
            </div>
            {/* Section Space */}
            {/* Background Divider Shape */}
            <div className="absolute bottom-0 left-0 -mb-px h-10 w-full background-color:#e5e7eb bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-cover bg-[center_top] bg-repeat-x xxl:h-14" />
            </div>
        </section>
        {/*...::: Newsletter Section End :::... */}
        <Chatbot
        title="Afrika Journals Assistant"
        subtitle="Online"
        botName="Afrika Journals"
        welcomeMessage="Hi, I'm Afrika Journals Chatbot. How can I help you today?"
      />
      <Toaster />
      </main>
       
      {/*...::: Footer Section Start :::... */}
      <footer className="section-footer">
        <div className="bg-[#ccd6e8] text-black">
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
                    <h1 className="text-5xl text-yellow-500">Afrika Journals</h1>
                    {/* Footer Content */}
                    <div className="text-yellow-100">
                      {/* Footer About Text */}
                      <div className="lg:max-w-[416px]">
                        {translation.footer.description}
                      </div>
                      {/* Footer Mail */}
                      <Link
                        href="mailto:info@Afrika Journals.com"
                        className="my-6 block underline-offset-4 transition-all duration-300 hover:underline"
                      >
                        info@Afrika Journals.com
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
                  <div className="flex flex-col gap-y-7 md:col-span-1 lg:col-span-1 ">
                    {/* Footer Widget Title */}
                    <div className="text-xl font-semibold capitalize text-yellow-500">
                      Pages
                    </div>
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <Link
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/"
                        >
                          {translation.navigation.home}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/about#"
                        >
                          {translation.navigation.about}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/features#"
                        >
                          {translation.navigation.features}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/journals#"
                        >
                          {translation.navigation.journals}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/faq#"
                        >
                          {translation.navigation.faq}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item */}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                    {/* Footer Title */}
                    <div className="text-xl font-semibold capitalize text-yellow-500">
                      Utility pages
                    </div>
                    {/* Footer Title */}
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <Link
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/signup"
                        >
                          Signup
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/login"
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                          href="/error-404"
                        >
                          404 Not found
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
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
                    <div className="text-xl font-semibold capitalize text-yellow-500">
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
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Support
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Privacy policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Terms &amp; Conditions
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
                        >
                          Strategic finance
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.example.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opcity-100 text-black underline-offset-4 transition-all duration-300 ease-linear hover:underline"
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
                 {translation.footer.copyright}
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
