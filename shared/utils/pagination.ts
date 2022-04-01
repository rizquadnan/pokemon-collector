const getTotalPages = (totalItems: number, itemPerPage: number) => {
  return Math.ceil(totalItems / itemPerPage);
};

const getPageOffset = (currentPage: number, itemPerPage: number) => {
  return (currentPage - 1) * itemPerPage;
};

export { getTotalPages, getPageOffset };
