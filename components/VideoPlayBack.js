import React,{useRef,useEffect} from 'react';

export default function VideoPlayBack({poster, src}) {
    const videoRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            videoRef.current.play()
        }, 5000)
    }, []);

    return (
        <>
            <video className="w-full min-h-screen object-cover  opacity-70 absolute z-0"
            poster={poster}
                   ref={videoRef}
                   controls
                   loop
                   autoPlay="autoPlay"
                   controls={false}
                   muted>
                <source src={src} type="video/mp4"
                />
            </video>
        </>
    )

}
// export default VideoPlayBack;