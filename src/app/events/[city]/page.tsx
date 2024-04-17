import { Metadata } from "next";
import { Suspense } from "react";
import { z } from "zod";

import { capitalize } from "@/lib/utils";
import H1 from "@/components/h1";
import Loading from "./loading";
import EventsList from "@/components/events-list";

type Props = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

type EventsPageProps = Props & {
  searchParams: {
    page: { [key: string]: string | string[] | undefined };
  };
};

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);

  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="flex  flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All events"}

        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>

      <Suspense fallback={<Loading />} key={city + parsedPage.data}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
