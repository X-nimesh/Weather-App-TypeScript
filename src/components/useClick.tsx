import React, { useState } from 'react'

const useClick = () => {
    const [loading, setLoading] = useState<boolean>(false);

    let loadingChange = () => {

        setLoading(true)
        setInterval(function () {
            setLoading(false);

        }, 5000);

    }
    return { loading, loadingChange };
}

export default useClick