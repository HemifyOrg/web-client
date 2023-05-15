import P2PComponent from "./P2PComponent";
import AuctionComponent from "./AuctionComponent";

const TrandingComponent = () => {
  return (
    <section className="pt-8 bg-[#F6EFE2] rounded-t-3xl mt-16">
      <AuctionComponent />
      <P2PComponent />
    </section>
  );
};

export default TrandingComponent;
