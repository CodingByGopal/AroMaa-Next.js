export interface NavigationOptionsModel {
    label: string,
    path: string,
    icon: React.ReactNode,
    target?: "_blank" | undefined,
    rel?: "noopener noreferrer" | undefined
}