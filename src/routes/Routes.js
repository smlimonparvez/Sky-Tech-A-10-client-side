import Blog from '../components/Blog';
import Courses from '../components/Courses';
import Home from '../components/Home';
import LogIn from '../components/LogIn';
import Registration from '../components/Registration';
import Main from '../layout/Main';
import CourseDetails from '../components/CourseDetails';
import CheckOut from '../components/CheckOut';
import PrivateRoutes from './PrivateRoutes';
const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/login', element: <LogIn></LogIn> },
            { path: '/registration', element: <Registration></Registration> },
            {
                path: '/category/:id', element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/course/:id', element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/course/:id/checkout', element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            }
        ]
    },

    {
        path: '*',
        element: <div className=' text-center mt-52'>
            <span className='font-bold text-9xl text-red-600 mb-2'>404</span>
            <p className='font-semibold text-xl'>page not found</p>
        </div>
    }
])