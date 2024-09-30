import React,{lazy} from 'react'

function retryableLazy(importFunc){
    let LazyComponent
    function lazyWrappedComponent(props){
        if(!LazyComponent){
            const promise = importFunc()

            LazyComponent = lazy(()=> promise);

            promise.catch(()=>{
                LazyComponent = undefined;
            })
        }
        return <LazyComponent {...props} />
    }

    return lazyWrappedComponent;
}

export default retryableLazy;