import P2PComponent from "./P2PComponent";
import AuctionComponent from "./AuctionComponent";

const TrandingComponent = () => {
  return (
    <section className="py-8 bg-[#F6EFE2] rounded-t-3xl">
      <AuctionComponent />
      <P2PComponent />
    </section>
  );
};

export default TrandingComponent;
