// import { Dialog } from '@headlessui/react';
import { lazy, Suspense, useState } from 'react'
import { Outlet, RouteObject, useRoutes, BrowserRouter } from 'react-router-dom'

const Loading = () => (<p> Loading...</p>)

const IndexScreen = lazy(() => import('@/components/screen/Index'))
const Page404Screen = lazy(() => import('@/components/screen/404'))

function Layout () {
  // const [isDark, setIsDark] = useState<Boolean>(false)
  return (
    <div>
      Header
      <Outlet />
    </div>
  )
}

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
      element: <Layout />,
      children: [
        {
          index: true,
          element: <IndexScreen />
        },
        {
          path: '*',
          element: <Page404Screen />
        }
      ]
    }
  ]
  const element = useRoutes(routes)
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  )
}
