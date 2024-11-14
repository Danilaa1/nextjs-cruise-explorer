import AdventureCard from "@/components/Reusable-cards/AdventureCards";
import useFetchAdventures from "@/hooks/useFetchAdventures";

const AdventureSection = () => {
  const { adventures, loading, error } = useFetchAdventures();

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error loading data</p>;

  return (
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
  );
};

export default AdventureSection;
