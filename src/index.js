import './index.css';

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from './components/HomePage';
import ResearchPage from './components/ResearchPage';
import ProjectsPage from './components/ProjectsPage';
import GymnasticsPage from './components/GymnasticsPage';
import VoxelPage from './components/VoxelPage';
import DabPage from './components/DabPage';
import Pix2VoxPage from './components/Pix2VoxPage';
import UnderwaterPage from './components/UnderwaterPage';
import NerfPage from './components/NerfPage';

const home = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "research",
    element: <ResearchPage />
  },
  {
    path: "projects",
    element: <ProjectsPage />
  },
  {
    path: "gymnastics",
    element: <GymnasticsPage />
  },
  {
    path: "pix2vox",
    element: <Pix2VoxPage />
  },
  {
    path: "nerf",
    element: <NerfPage />
  },
  {
    path: "voxel",
    element: <VoxelPage />
  },
  {
    path: "dab",
    element: <DabPage />
  },
  {
    path: "underthesea",
    element: <UnderwaterPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={home} />
  </React.StrictMode>
);
