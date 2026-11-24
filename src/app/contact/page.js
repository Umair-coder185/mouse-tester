import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { Breadcrumb } from "../../components/ui/Breadcrumb";

export const metadata = {
  title: "Contact Us | ClickMouseTest",
  description: "Get in touch with ClickMouseTest. Send us your tool suggestions, feedback, bug reports, or general inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-muted/30 border-b border-border py-12">
        <Container>
          <div className="max-w-4xl">
            <Breadcrumb
              items={[
                { name: "Home", path: "/" },
                { name: "Contact", path: "/contact" },
              ]}
            />
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mt-4 mb-4">
              Contact ClickMouseTest
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question, feedback, or a tool request? We'd love to hear from you.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-12 bg-background">
        <Container>
          <div className="max-w-3xl space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Card */}
              <div className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:border-primary/50 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2">Direct Email Support</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  For inquiries, partnerships, or direct questions regarding our diagnostic tools:
                </p>
                <a
                  href="mailto:contact@clickmousetest.com"
                  className="text-base font-semibold text-primary hover:underline break-all"
                >
                  contact@clickmousetest.com
                </a>
              </div>

              {/* Developer Profile Card */}
              <div className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:border-primary/50 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2">Developer & Connect</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Maintained by Umair Tufail. Connect for technical discussions or web engineering queries:
                </p>
                <a
                  href="https://www.linkedin.com/in/umair-nextjs-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-blue-500 hover:underline inline-flex items-center gap-1.5"
                >
                  LinkedIn (umair-nextjs-dev)
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                </a>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-foreground">What Can We Help You With?</h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">🐛 Bug Reports</h3>
                  <p>
                    Found an issue with one of our testers? Please let us know your browser version, operating system, and mouse model so we can reproduce and fix it quickly.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">💡 Tool Suggestions & Feedback</h3>
                  <p>
                    Want to see a new mouse or keyboard diagnostic tool added to ClickMouseTest? We regularly add new features based on user suggestions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">🔒 Privacy Notice</h3>
                  <p>
                    Remember that all testing tools on ClickMouseTest execute entirely client-side inside your browser. No mouse tracking, click event telemetry, or personal hardware data is ever stored or transmitted to our servers.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex flex-wrap gap-4">
                <Link
                  href="/all-tools"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 font-medium text-primary-foreground transition-colors hover:bg-primary-hover text-sm"
                >
                  Explore All Tools
                </Link>
                <Link
                  href="/about"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-transparent px-6 font-medium text-foreground transition-colors hover:bg-muted text-sm"
                >
                  About ClickMouseTest
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
