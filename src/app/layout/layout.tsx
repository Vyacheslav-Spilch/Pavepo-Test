import { useScrollToTop } from '@/shared/hooks/useScrollToTop';
import { Wrapper } from '@/widgets/wrapper/Wrapper';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Routers } from '../routers/routers';
import NotFoundPage from '@/pages/not.found.page/NotFoundPage';
import React, { Suspense } from 'react';
import ContentLoader from '@/shared/ui/ContentLoader';

const LazyMainPage = React.lazy(() => import('@/pages/main.page/MainPage'));
const LazyUserPage = React.lazy(() => import('@/pages/user.page/UserPage'));

export const Layout = () => {
  useScrollToTop();

  return (
    <Wrapper>
      <Routes>
        <Route
          path={Routers.MAIN}
          element={
            <Suspense fallback={<ContentLoader message="Загрузка пользователей..." variant="large" />}>
              <LazyMainPage />
            </Suspense>
          }
        />
        <Route
          path={`${Routers.MAIN}/${Routers.USER}/:id`}
          element={
            <Suspense fallback={<ContentLoader message="Загружаем информацию о пользователе..." variant="medium" />}>
              <LazyUserPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to={Routers.NOT_FOUNT_PAGE} />} />
        <Route path={Routers.NOT_FOUNT_PAGE} element={<NotFoundPage />} />
      </Routes>
    </Wrapper>
  );
};
