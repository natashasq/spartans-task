import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("../Home/Home"));

function AppRoutes() {
  const routes = useRoutes(
    ["/", "/:name/:offset"].map((path) => ({
      path,
      element: (
        <>
          <Suspense fallback={<>Loading</>}>
            <Home />
          </Suspense>
        </>
      ),
    }))
  );
  return routes;
}

export default AppRoutes;
