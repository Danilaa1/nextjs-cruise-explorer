"use client";

import Header from "../components/Header";
import CruiseCard from "@/components/Reusable-cards/CruiseCard";
import AdventureCard from "@/components/Reusable-cards/AdventureCards";
import useFetchAdventures from "@/hooks/useFetchAdventures";
import useFetchCruises from "@/hooks/useFetchCruises";

export default function Home() {
  const {
    cruises,
    loading: cruisesLoading,
    error: cruisesError,
  } = useFetchCruises();
  const {
    adventures,
    loading: adventuresLoading,
    error: adventuresError,
  } = useFetchAdventures();

  if (cruisesLoading || adventuresLoading) return <p>Loading..</p>;
  if (cruisesError || adventuresError) return <p>Error loading data</p>;

  return (
    <>
      <Header />
      <div className="p-6 space-y-8">
        <section>
          <h2 className="text-2xl font-normal mb-4">My Adventures</h2>
          <div className="flex overflow-x-auto space-x-4">
            {adventures.map((adventure, index) => (
              <AdventureCard
                key={`${adventure.name}-${index}`} //Create a unique key for each card by combining the name and index
                name={adventure.name}
                image={adventure.image}
              />
            ))}
          </div>
        </section>
        <h2 className="text-2xl font-normal mb-4">Popular Cruises</h2>
        <div className="flex flex-row gap-3 overflow-x-auto flex-nowrap">
          {cruises.map((cruise, index) => (
            <CruiseCard
              key={`${cruise.name}-${index}`}
              name={cruise.name}
              sailDate={cruise.sailDate}
              nights={cruise.nights}
              startPort={cruise.startPort}
              endPort={cruise.endPort}
              shipImage={cruise.shipImage}
              shipName={cruise.shipName}
              cruiseLineName={cruise.cruiseLineName}
              iconOverlay={cruise.iconOverlay}
              iconBackgroundColor={cruise.iconBackgroundColor}
              price={cruise.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
