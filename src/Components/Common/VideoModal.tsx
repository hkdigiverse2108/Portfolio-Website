import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Store";
import { closeVideoModal } from "../../Store/Slice/videoSlice";

const VideoModal = () => {
    const dispatch = useDispatch();
    const { videoUrl } = useSelector((state: RootState) => state.video);
    const isOpen = !!videoUrl;

    // Extract video ID from common YouTube URL formats
    const getVideoId = (url: string | null) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getVideoId(videoUrl);
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("mfp-zoom-out-cur");
        } else {
            document.body.classList.remove("mfp-zoom-out-cur");
        }
        return () => {
            document.body.classList.remove("mfp-zoom-out-cur");
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleClose = () => {
        dispatch(closeVideoModal());
    };

    return (
        <>
            <div className="mfp-bg mfp-ready" onClick={handleClose}></div>
            <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabIndex={-1} style={{ overflow: 'hidden auto' }}>
                <div className="mfp-container mfp-iframe-holder" onClick={handleClose}>
                    <div className="mfp-content" onClick={(e) => e.stopPropagation()}>
                        <div className="mfp-iframe-scaler">
                            <button title="Close (Esc)" type="button" className="mfp-close" onClick={handleClose}>×</button>
                            {videoId ? (
                                <iframe
                                    className="mfp-iframe"
                                    src={embedUrl}
                                    frameBorder="0"
                                    allowFullScreen
                                    title="Video"
                                ></iframe>
                            ) : (
                                <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
                                    Invalid Video URL
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoModal;
