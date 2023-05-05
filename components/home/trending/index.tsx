import P2PComponent from "./P2PComponent";
import AuctionComponent from "./AuctionComponent";

const TrandingComponent = () => {
  return (
    <section className="py-8">
      <AuctionComponent />
      <P2PComponent />
    </section>
  );
};

export default TrandingComponent;
