import { useRouter } from "next/router";

import Link from "next/link";

const ActiveLink = ({ href,children }) => {
  const router = useRouter();
  const isCurrentPath = router.pathname === href || router.asPath === href;
  const active = isCurrentPath?'border-yellow-500 border-b  font-semibold ':'';

  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  })();
  const handleClick = (event) => {
    
    router.push(href);
  };

  return (
    <Link href={href} onClick={handleClick}>
      <a className={`active-link px-2 txt-main custom-roboto font-medium text-base hover:opacity-80 ${active}`}>{children}</a>
    </Link>
  );
};

export default ActiveLink;
