import SlideShow from "../components/SllideShow";


function slider() {
    const images = ["https://res.cloudinary.com/dewxikysw/image/upload/v1618453394/show_fiyybg.jpg",
        "https://res.cloudinary.com/dewxikysw/image/upload/v1618453363/slide_cbrak6.jpg",
        "https://res.cloudinary.com/dewxikysw/image/upload/v1618442750/comp_cyllyz.jpg"];
    return (
        <div className="min-h-screen center">

            <SlideShow images={images} />

        </div>
    )
}

export default slider
