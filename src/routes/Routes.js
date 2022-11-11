import Blog from '../components/Blog';
import Courses from '../components/Courses';
import Home from '../components/Home';
import LogIn from '../components/LogIn';
import Registration from '../components/Registration';
import Main from '../layout/Main';
const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/courses', element: <Courses></Courses> },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/login', element: <LogIn></LogIn> },
            { path: '/registration', element: <Registration></Registration> }
        ]
    }
])