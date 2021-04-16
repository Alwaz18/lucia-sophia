import Image from 'next/image';
import React from 'react'

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const images = ["https://res.cloudinary.com/dewxikysw/image/upload/v1618453363/slideShow_iqghdn.jpg",
    "https://res.cloudinary.com/dewxikysw/image/upload/v1618453363/slide_cbrak6.jpg",
    "https://res.cloudinary.com/dewxikysw/image/upload/v1618453394/show_fiyybg.jpg"];
const delay = 4500;

function SlideShow({ images }) {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="min-w-full min-h-screen relative z-0 top-0 left-0">
            <div
                className="min-h-screen
        whitespace-nowrap transition ease-linear delay-1000"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {images.map((image, index) => (
                    <div
                        className="inline-block w-full h-full"
                        key={index}
                    // style={{ backgroundColor:color }}
                    >
                        <Image
                            src={image}
                            height={700}
                            width={1350}
                            className=""

                        />
                    </div>
                ))}
            </div>

            <div className="text-center">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}

                    ></div>
                ))}
            </div>
        </div>
    );
}

export default SlideShow
