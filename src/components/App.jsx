import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import Home from 'pages/Home/Home';
// const Home = lazy(() => import('../pages/Home/Home'));

const Movies = lazy(() => import('../pages/Movies/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};
