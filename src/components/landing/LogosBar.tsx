const LogosBar = () => {
  return (
    <section className="py-12 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <p className="text-sm text-muted-foreground font-medium tracking-wide uppercase">
          Equipos que crecen con Arrowpoint
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-28 h-10 border-2 border-dashed border-muted-foreground/30 rounded flex items-center justify-center text-xs text-muted-foreground"
            >
              Logo {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosBar;
