export function Logo() {
  return (
    <a href="#" className="flex items-center gap-2">
      <img
        src="/curie-icon.png"
        alt="Curie"
        className="h-7 w-7 object-contain"
      />
      <span className="font-display text-lg font-semibold italic tracking-tight text-brand-dark">
        Curie
      </span>
    </a>
  );
}
