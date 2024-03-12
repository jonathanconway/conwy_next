import Image from "next/image";

export function Header() {
  return (
    <div>
      <Image
        src="/conwy.svg"
        alt="conwy Logo"
        width={100}
        height={24}
        priority
      />

      <div>Articles</div>
      <div>Projects</div>
      <div>Work</div>
      <div>Contact</div>
    </div>
  );
}
