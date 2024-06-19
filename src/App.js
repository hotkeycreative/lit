import { 
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import DashboardPage from './pages/dashboard/DashboardPage';

// Layouts
import RootLayout from './layouts/RootLayout';

import PlayLayout from './layouts/PlayLayout';
import PlayIntro from './pages/play/PlayIntro';
import PlayCreate from './pages/play/PlayCreate';
import PlayBrowse from './pages/play/PlayBrowse';

import WriteLayout from './layouts/WriteLayout';

import ReadLayout from './layouts/ReadLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path='dashboard' element={<DashboardPage />} />

            <Route path='play' element={<PlayLayout />}>
                <Route path='intro' element={<PlayIntro />} />
                <Route path='create' element={<PlayCreate />} />
                <Route path='browse' element={<PlayBrowse />} />
            </Route>

            <Route path='write' element={<WriteLayout />}>
            
            </Route>

            <Route path='read' element={<ReadLayout />}>
            
            </Route>
        </Route>
    )
);

function App() {
    return (
      <RouterProvider router={router} />
    );
};

export default App;