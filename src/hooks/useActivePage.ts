import { useRouter } from "next/router";

const useActivePage = () => {
  const router = useRouter();

  const activePage = router.pathname;

  return activePage;
};

export default useActivePage;
