import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Coverage } from "@/components/site/Coverage";
import { Reviews } from "@/components/site/Reviews";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => {
    const title =
      "T1 Plumbing & Heating | Swadlincote & Derbyshire";
    const description =
      "Trusted plumbing & heating specialists in Swadlincote, Derbyshire. HMO conversions, bathrooms, boiler repairs & 24/7 emergency call-outs.";
    const url = "https://derby-plumb-pros.lovable.app/";
    const keywords =
      "plumber Swadlincote, plumber Derbyshire, heating engineer Derbyshire, boiler repair Swadlincote, HMO conversions Derbyshire, bathroom installation Derbyshire, emergency plumber Northwest Leicestershire, T1 Plumbing";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: keywords },
        { name: "robots", content: "index, follow" },
        { name: "geo.region", content: "GB-DBY" },
        { name: "geo.placename", content: "Swadlincote, Derbyshire" },
        { name: "geo.position", content: "52.7736;-1.5575" },
        { name: "ICBM", content: "52.7736, -1.5575" },

        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "T1 Plumbing & Heating Services Ltd" },
        { property: "og:locale", content: "en_GB" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "Plumber", "HVACBusiness"],
            "@id": "https://derby-plumb-pros.lovable.app/#business",
            name: "T1 Plumbing & Heating Services Ltd",
            url,
            telephone: "+447886157572",
            email: "t1plumbinghs@gmail.com",
            priceRange: "££",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Swadlincote",
              addressRegion: "Derbyshire",
              postalCode: "DE11 9PQ",
              addressCountry: "GB",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 52.7736,
              longitude: -1.5575,
            },
            areaServed: [
              { "@type": "AdministrativeArea", name: "Derbyshire" },
              { "@type": "AdministrativeArea", name: "Northwest Leicestershire" },
            ],
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday", "Tuesday", "Wednesday", "Thursday",
                "Friday", "Saturday", "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.7",
              reviewCount: "12",
              bestRating: "5",
            },
            makesOffer: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "HMO Conversions" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Installations" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Boiler Repair & Servicing" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Plumbing 24/7" } },
            ],
          }),
        },
      ],
    };
  },
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Coverage />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
