import { lazy } from 'react';
import { RouteType } from '../types/routes.type';
import { PATHS } from '../constants/paths';

const HomePage = lazy(() => import('@/pages/home.tsx')),
    ServicesListPage = lazy(() => import('@/pages/services-list.tsx')),
    ServiceDetailPage = lazy(() => import('@/pages/service-detail.tsx')),
    NewsListPage = lazy(() => import('@/pages/news-list.tsx')),
    NewsDetailPage = lazy(() => import("@/pages/news-detail.tsx")),
    CasesListPage = lazy(() => import("@/pages/cases-list.tsx")),
    CaseDetailPage = lazy(() => import("@/pages/case-detail.tsx"));

export const ROUTES: RouteType[] = [
    {
        path: '*',
        element: <HomePage />
    },
    {
        path: PATHS.HOME,
        element: <HomePage />
    },
    {
        path: PATHS.SERVICES,
        element: <ServicesListPage />
    },
    {
        path: PATHS.SERVICES_DETAILS,
        element: <ServiceDetailPage />
    },
    {
        path: PATHS.NEWS,
        element: <NewsListPage />
    },
    {
        path: PATHS.NEWS_DETAILS,
        element: <NewsDetailPage />
    },
    {
        path: PATHS.CASES,
        element: <CasesListPage />
    },
    {
        path: PATHS.CASES_DETAILS,
        element: <CaseDetailPage />
    },
];

