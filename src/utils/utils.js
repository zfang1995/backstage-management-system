import {componentsPathMap} from './componentsPathMap'

export  function findComponent (componentName) {
    return () => (
        import(`${componentsPathMap[componentName]}`)
    )
}

export function getComponentPath (componentName) {
    return componentsPathMap[componentName]
}
