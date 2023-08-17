import { Switch, Route } from 'react-router-dom'
import { Home, AboutPage, useP } from '../pages'
import { PageProps } from './route'


interface IRouterWithLoad {
    Component: React.ComponentType
    exact?: any
    path?: string | undefined
}

// const DynamicRouting: React.FC<IRouterWithLoad> = ({
//     Component, ...rest
// }) => {
//     return (
//         <>
//             <Route 
//             {...rest}
//             render={(props: any) => (
//                 <>
//                     <Component {...props} />
//                 </>
//             )}
//             />
//         </>
//     )
// }

const ApplicationRouter = () => {
    return (
        <Switch>
                <Route
                exact
                path={PageProps.homepage.path}
                component={Home}
                />
                <Route
                exact
                path={PageProps.aboutus.path}
                component={AboutPage}
                />
                 <Route
                exact
                path={PageProps.usestate.path}
                component={useP}
                />
            
        </Switch>
    )
}

export default ApplicationRouter