import {useRoutes,RouteObject} from "react-router-dom";
import {Test} from "../pages/Test";

const routes:Array<RouteObject>= [
    {
        path: "/",
        element: <Test/>
    },
];

 const RenderRouter = () => {
     return useRoutes(routes)
}
export default RenderRouter
