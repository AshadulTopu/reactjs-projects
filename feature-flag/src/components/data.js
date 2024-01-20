const dummyAPI = {
    showTopBar: true,
    showSideBar: false,
    showHeader: true,
    showNav: true,
    showFooter: true,
}


const featureFlagsDataServiceCall = () => {
    return new Promise((resolve, reject) => {
        if (dummyAPI) {
            setTimeout(() => {
                resolve(dummyAPI)
            }, 500)
        } else {
            reject('something error')
        }
    })
}

export default featureFlagsDataServiceCall