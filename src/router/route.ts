
export type PathProp = {
    path?: string
}

type RouteProp = {
    homepage : PathProp
    aboutus : PathProp
    usestate : PathProp
}

export const PageProps : RouteProp = {
    homepage : { path: "/" },
    aboutus :  {path: "/About-us"},
    usestate : {path: "/usestate"}

}
