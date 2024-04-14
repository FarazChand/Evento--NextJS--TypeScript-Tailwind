import { Metadata } from "next";
import { Suspense } from "react";

import { capitalize } from "@/lib/utils";
import H1 from "@/components/h1";
import Loading from "./loading";
import EventsList from "@/components/events-list";

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

type Props = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: Props) {
  const city = params.city;

  return (
    <main className="flex  flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All events"}

        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
