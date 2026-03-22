import HeaderLayout from '../components/Layout/HeaderLayout/index';
import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../components/Layout/DefaultLayout/Upload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
