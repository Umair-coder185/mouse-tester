import { Container } from "../../components/layout/Container";
import { SITE_CONFIG } from "../../lib/site";

export const metadata = {
  title: "Privacy Policy | MouseTester",
  description: "Read our privacy policy. Learn how MouseTester processes your local diagnostic data.",
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-muted/30 border-b border-border py-12">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: August 2024
            </p>
          </div>
        </Container>
      </div>

      <section className="py-12 bg-background">
        <Container>
          <div className="max-w-3xl space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              This Privacy Policy describes how {SITE_CONFIG.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) handles information when you use our website.
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information Processed by Mouse Tests</h2>
            <p>
              All interactive diagnostic tests on our website execute locally within your web browser. When you click, scroll, or move your mouse to use our tools, that input data is processed locally by JavaScript on your device to display your immediate results. <strong>We do not intentionally collect, store, or transmit your diagnostic test results or mouse movements to our servers.</strong>
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Technical and Hosting Data</h2>
            <p>
              Like almost all websites, the servers that host our website automatically log standard technical information when you visit. This may include your IP address, browser type, operating system, referring URLs, and timestamps. This information is processed by our hosting providers for security, performance monitoring, and basic traffic routing purposes.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Cookies and Analytics</h2>
            <p>
              Currently, our website does not utilize any third-party tracking cookies, analytics frameworks (such as Google Analytics), or advertising scripts. If we introduce these services in the future to maintain or monetize the website, we will update this policy accordingly.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Third-Party Links</h2>
            <p>
              Our website may contain links to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these external sites and cannot accept responsibility for their respective privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Children&apos;s Privacy</h2>
            <p>
              Our services are generally intended for a broad audience but we do not knowingly collect personally identifiable information from children.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect technical or operational changes. We encourage you to review this page periodically for any updates.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact</h2>
            <p>
              Contact information will be provided on the site when a public support channel is available.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
