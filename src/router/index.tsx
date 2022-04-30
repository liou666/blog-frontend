// import { Dialog } from '@headlessui/react';
import react, { lazy, Suspense } from 'react'
import { RouteObject, useRoutes, BrowserRouter } from 'react-router-dom'

const Loading = () => (<p> Loading...</p>)

const IndexScreen = lazy(() => import('@/components/screen/Home'))
const Page404Screen = lazy(() => import('@/components/screen/404'))
const Archive = lazy(() => import('@/components/screen/Archive'))
const Tags = lazy(() => import('@/components/screen/Tags'))
const Detail = lazy(() => import('@/components/screen/Detail'))

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  )
}

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <IndexScreen />
    },
    {
      path: '/archive',
      element: <Archive />
    },
    {
      path: '/tags',
      element: <Tags />
    },
    {
      path: '/detail/:id',
      element: <Detail />
    },
    {
      path: '*',
      element: <Page404Screen />
    }

  ]
  const element = useRoutes(routes)
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  )
}
