import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import PageLoader from '@/components/ui/page-loader';
import { ROUTES } from '@/shared/routing/routes';

const AppRouter = () => {
    return (
        <Routes>
            {ROUTES.map(
                ({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <Suspense fallback={<PageLoader />}>{element}</Suspense>
                        }
                    />
                ),
            )}
        </Routes>
    );
};

export default AppRouter;