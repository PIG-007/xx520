import React, {useEffect, useState} from "react";

export default function Demo() {
    const initScript = () => {
        let script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = false
        script.src = 'show.js'//这个代表的是script 的src
        document.head.appendChild(script)
        document.getElementById('startControl').style.display = "none";
    }
    useEffect(() => {
        initScript()
    }, [])

    return <div >
    </div>
}

