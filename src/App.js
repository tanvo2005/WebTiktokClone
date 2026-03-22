import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { publicRoutes } from './routes';
import { Fragment } from 'react/jsx-runtime';
import DefaultLayout from './components/Layout/DefaultLayout/index';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((publicRoute, index) => {
                        // nếu chưa có layout thì mặc định nó là DefaultLayout
                        // Fragment là 1 componmet chỉ để chứa khong sinh ra thẻ thật trong dom
                        // const Layout = publicRoute.layout === null ? Fragment : DefaultLayout;
                        let Layout = DefaultLayout;
                        if (publicRoute.layout) {
                            Layout = publicRoute.layout;
                        } else if (publicRoute.layout === null) {
                            Layout = Fragment;
                        }
                        const Pages = publicRoute.component;
                        return (
                            <Route
                                key={index}
                                path={publicRoute.path}
                                element={
                                    <Layout>
                                        <Pages />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
