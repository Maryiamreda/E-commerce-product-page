import { useState } from "react";
import styles from './sneakerPreview.module.scss';
import Next from '../../../public/images/icon-next.svg';
import Previous from '../../../public/images/icon-previous.svg';
import Close from '../../../public/images/icon-close.svg';

const SneakerPreview = () => {
    const [sneaker, setSneaker] = useState('/images/image-product-1.jpg');
    const [modal, setModal] = useState(false);
    const [mobile, setMobile] = useState(false);

    const [sliderIndex, setSliderIndex] = useState(1);

    const thumbnails = [
        { src: '/images/image-product-1-thumbnail.jpg', fullSrc: '/images/image-product-1.jpg', alt: 'Thumbnail 1' },
        { src: '/images/image-product-2-thumbnail.jpg', fullSrc: '/images/image-product-2.jpg', alt: 'Thumbnail 2' },
        { src: '/images/image-product-3-thumbnail.jpg', fullSrc: '/images/image-product-3.jpg', alt: 'Thumbnail 3' },
        { src: '/images/image-product-4-thumbnail.jpg', fullSrc: '/images/image-product-4.jpg', alt: 'Thumbnail 4' },
    ];
    const maxIndex = thumbnails.length;

    const plusDivs = (n: number) => {
        const newIndex = sliderIndex + n;
        const validIndex = newIndex > maxIndex ? 1 : newIndex < 1 ? maxIndex : newIndex;
        setSliderIndex(validIndex);
    };

    const plusDivsForMobile = (n: number) => {
        const newIndex = sliderIndex + n;
        const validIndex = newIndex > maxIndex ? 1 : newIndex < 1 ? maxIndex : newIndex;
        setSneaker(thumbnails[validIndex - 1].fullSrc);
        setSliderIndex(validIndex);
    };

    return (
        <div className={styles.sneakerPreview}>
            <div className={styles.desktop}>
                <div className={styles.previewSneaker}>
                    <div className={styles.carouselButtonMobile}>
                        <div onClick={() => plusDivsForMobile(-1)}>
                            <img src={Previous} alt="Previous" />
                        </div>
                        <div onClick={() => plusDivsForMobile(1)}>
                            <img src={Next} alt="Next" />
                        </div>
                    </div>
                    <img src={sneaker} width={380} height={380} alt="Sneaker Preview" onClick={() => setModal(true)} />
                </div>

                <div className={styles.thumbnailPics}>
                    {thumbnails.map((thumb, index) => (
                        <div
                            key={index}
                            className={`${styles.thumbnailWrapper} ${sneaker === thumb.fullSrc ? styles.active : ''}`}
                        >
                            <img
                                src={thumb.src}
                                width={70}
                                height={73}
                                onClick={() => setSneaker(thumb.fullSrc)}  // Only sets the main sneaker image
                                className={`${styles.thumbnailImage} ${sneaker === thumb.fullSrc ? styles.active : ''}`}
                                alt={thumb.alt}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {modal &&
                <div className={styles.modal}>
                    <div className={styles.modalcontent}>
                        <div className={styles.closeButton}>
                            <img src={Close} onClick={() => setModal(false)} />

                        </div>
                        <div>
                            <div className={styles.carouselButton}>
                                <div onClick={() => plusDivs(-1)}>
                                    <img src={Previous} alt="Previous" />
                                </div>
                                <div onClick={() => plusDivs(1)}>
                                    <img src={Next} alt="Next" />
                                </div>
                            </div>

                            <img src={`/images/image-product-${sliderIndex}.jpg`} width={380} height={380} alt="Sneaker Preview" />
                        </div>

                        <div className={styles.thumbnailPics}>
                            {thumbnails.map((thumb, index) => (
                                <div
                                    key={index}
                                    className={`${styles.thumbnailWrapper} ${`/images/image-product-${sliderIndex}.jpg` === thumb.fullSrc ? styles.active : ''}`}
                                >
                                    <div style={{ backgroundColor: "white", borderRadius: "11px", height: "73px" }}> <img
                                        src={thumb.src}
                                        width={70}
                                        height={73}
                                        onClick={() => setSliderIndex(index + 1)}  // Only updates the slider index
                                        className={`${styles.thumbnailImage} ${`/images/image-product-${sliderIndex}.jpg` === thumb.fullSrc ? styles.active : ''}`}
                                        alt={thumb.alt}
                                    /></div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default SneakerPreview;
