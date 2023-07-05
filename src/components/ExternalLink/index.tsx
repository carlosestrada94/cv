import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

import "./index.scss";

export default function ExternalLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link href={href} className="external-link" target="_blank">
      <span>{label}</span>
      <ArrowUpRightIcon className="external-link__icon" />
    </Link>
  );
}
