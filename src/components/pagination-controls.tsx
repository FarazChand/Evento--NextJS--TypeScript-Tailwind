import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const btnStyles =
  "flex items-center gap-x-2 text-white px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opactiy-100 transition text-sm";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between w-full">
      {previousPath ? (
        <Link href={previousPath} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath && (
        <Link href={nextPath} className={btnStyles}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
