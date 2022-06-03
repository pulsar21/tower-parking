import {Suspense} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {routes} from "../../routes";
import {ALL_ROUTE, BASE_ROUTE} from "../../routes/consts";

export default function AppRouter() {
    return (
        <main className={"appRouter"}>
            <Suspense fallback={"...loading"}>
                <Routes>
                    {
                        routes.map(({path, Component}) => (
                            <Route
                                key={path}
                                path={path}
                                element={<Component/>}
                            />
                        ))
                    }
                    <Route path={ALL_ROUTE} element={<Navigate to={BASE_ROUTE}/>} />
                </Routes>
            </Suspense>
        </main>
    );
};