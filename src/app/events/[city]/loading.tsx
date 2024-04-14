import SkeletonCard from "@/components/skeleton-card";

export default function Loading() {
  return (
    <div className="animate-pulse flex flex-wrap  gap-20 py-24 px-[20px] max-w-[1100px] mx-auto">
      {Array.from({ length: 6 }).map((item, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
