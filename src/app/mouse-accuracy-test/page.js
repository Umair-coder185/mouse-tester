import { Container } from "../../components/layout/Container";
import { AccuracyTester } from "../../components/tools/AccuracyTester";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { JsonLd } from "../../components/ui/JsonLd";
import { SeoContent } from "../../components/mouse-accuracy-test-seo/SeoContent";

export default function MouseAccuracyTestPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a good mouse accuracy score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Accuracy above 85% with low average error is considered strong. Under 70% usually signals a setup or consistency issue worth fixing."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I test my mouse accuracy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Weekly is enough for most players, and always after changing hardware, DPI, or drivers."
        }
      },
      {
        "@type": "Question",
        "name": "Does wireless affect accuracy in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Modern wireless mice with good polling rates match wired performance closely, though battery level and interference can still cause minor lag."
        }
      },
      {
        "@type": "Question",
        "name": "What DPI should most players use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most competitive players land between 400 and 1600 DPI — the 'best' number depends on grip and arm vs wrist aiming, not a universal figure."
        }
      },
      {
        "@type": "Question",
        "name": "Can this test replace in-game aim training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. It's a precise way to measure raw tracking and click precision, but in-game practice adds movement, recoil, and decision-making the test doesn't cover."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if my mouse sensor is bad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Inconsistent tracking, jitter at low speeds, or skipping on a clean, well-lit mousepad are the usual signs of a failing or low-quality sensor."
        }
      }
    ]
  };

  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <>
      <JsonLd 
        type="WebPage" 
        data={{ 
          name: "Mouse Accuracy Test 2026: What It Is, How to Use It & How to Improve",
          description: "Mouse Accuracy Test lets you check mouse precision, click accuracy, and aim speed online for free. Test your skills and improve accuracy.",
          url: "https://mousetester.com/mouse-accuracy-test"
        }} 
      />
      <JsonLd type="FAQPage" data={faqSchema} />

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background border-b border-border py-12 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Breadcrumb items={[
              { name: 'Home', path: '/' },
              { name: 'All Tests', path: '/all-tests' },
              { name: 'Accuracy Test', path: '/mouse-accuracy-test' }
            ]} />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mt-6 mb-4">
              Mouse Accuracy Test 2026: What It Is, How to Use It & How to Improve
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Last updated: {currentDate}
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Your aim can feel amazing one match and sloppy the next, and it's rarely just "bad luck." A mouse accuracy test strips away the guesswork by measuring exactly how close your clicks land to real targets. You'll get hard numbers instead of a gut feeling. This free mouse accuracy test helps you spot weak points in your mouse precision, tracking accuracy, and click timing.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Tool Section */}
      <section className="py-12 bg-background relative" id="accuracy-test-tool">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl shadow-lg border border-border p-4 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
              
              <AccuracyTester />
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section Component */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <Container>
          <SeoContent />
        </Container>
      </section>
    </>
  );
}
