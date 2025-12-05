import Link from "next/link";

const Button = ({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
  onClick,
  href,
}) => {
  const baseStyle =
    "relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-1",
    secondary:
      "bg-white dark:bg-neutral-800 text-slate-700 dark:text-neutral-200 border border-slate-200 dark:border-neutral-700 hover:bg-slate-50 dark:hover:bg-neutral-700 hover:-translate-y-1",
    ghost:
      "text-slate-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400",
    white: "bg-white text-blue-600 hover:bg-blue-50 shadow-lg",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyle} ${variants[variant]} ${className}`}
      >
        {children}
        {Icon && (
          <Icon
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        )}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
      {Icon && (
        <Icon
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      )}
    </button>
  );
};

export default Button;
