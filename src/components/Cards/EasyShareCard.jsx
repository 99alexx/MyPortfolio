
function EasyShareCard({ onClick }) {

  return (
    <>
      <div className="flex justify-center items-center absolute inset-0 bg-black/30" onClick={onClick}>
        <div className="h-[90%] w-[30%] bg-white border border-black rounded-2xl"
        onClick={(e) => e.stopPropagation()}
        ></div>
      </div>
    </>
  );
}
export default EasyShareCard;
