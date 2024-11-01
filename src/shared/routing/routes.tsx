import { lazy } from 'react';
import { RouteType } from '../types/routes.type';
import { PATHS } from '../constants/paths';

const HomePage = lazy(() => import('@/pages/home.tsx')),
    NewsListPage = lazy(() => import('@/pages/news-list.tsx')),
    NewsDetailPage = lazy(() => import("@/pages/news-detail.tsx"));

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
        path: PATHS.NEWS,
        element: <NewsListPage />
    },
    {
        path: PATHS.NEWS_DETAILS,
        element: <NewsDetailPage />
    },
];

