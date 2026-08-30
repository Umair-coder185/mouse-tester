import Link from "next/link";
import { Container } from "../components/layout/Container";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col justify-center py-20 bg-background text-center">
      <Container>
        <div className="max-w-md mx-auto space-y-6">
          <h1 className="text-6xl font-extrabold text-foreground tracking-tight">404</h1>
          <h2 className="text-2xl font-bold text-foreground">Page not found</h2>
          <p className="text-muted-foreground text-lg">
            The page or test you are looking for does not exist or has been moved.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Back to Mouse Tester
            </Link>
            <Link 
              href="/all-tests"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-transparent px-8 font-medium text-foreground transition-colors hover:bg-muted"
            >
              View All Tests
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
