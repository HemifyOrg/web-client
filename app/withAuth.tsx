import { useRouter, withRouter } from "next/router";
import { useAppSelector } from "./store";

const withAuth = (
  Component: React.ComponentType<any>,
  authPage?: boolean
) => {
  return withRouter((props: any) => {
    let user = useAppSelector((state) => state.user);
    const router = useRouter();
    const { asPath: pathname } = router;
    const { query: searchQuery } = router;
    let query = searchQuery.next ? searchQuery.next : null;

    if (!user && !authPage) {
      router.push(`/auth/login?next=${pathname}`);
      return null;
    }

    if (user) {
      if (authPage) {
        router.push(`${query ? query : "/"}`);
        return null;
      }
    }

    return <Component {...props} />;
  });
};

export default withAuth;
