import CruiseCard from "@/components/Reusable-cards/CruiseCard";
import useFetchCruises from "@/hooks/useFetchCruises";

const CruiseSection = () => {
  const { cruises, loading, error } = useFetchCruises();

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <section>
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
    </section>
  );
};

export default CruiseSection;
