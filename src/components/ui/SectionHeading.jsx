export function SectionHeading({ title, description, className = "" }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
