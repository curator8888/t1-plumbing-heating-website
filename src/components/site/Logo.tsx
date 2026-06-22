import logo from "@/assets/t1-logo.asset.json";

export function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="T1 Plumbing & Heating Services Ltd"
      className={`${className} rounded-md object-cover`}
    />
  );
}
