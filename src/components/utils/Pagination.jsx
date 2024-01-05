export default function Pagination({ page, setPage }) {
  const autoScroll = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    autoScroll();
  };
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    autoScroll();
  };
  return (
    <div className="flex justify-center py-3">
      <div className="join">
        {page <= 1 ? (
          <button onClick={handlePrevPage} disabled className="join-item btn">
            «
          </button>
        ) : (
          <button onClick={handlePrevPage} className="join-item btn">
            «
          </button>
        )}
        <button className="join-item btn">
          {page}
        </button>
        {page >= 100 ? (
          <button onClick={handleNextPage} disabled className="join-item btn">
            »
          </button>
        ) : (
          <button onClick={handleNextPage} className="join-item btn">
            »
          </button>
        )}
      </div>
    </div>
  );
}
