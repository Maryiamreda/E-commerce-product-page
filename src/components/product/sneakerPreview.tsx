import { useState } from "react";
import styles from './sneakerPreview.module.scss';

const SneakerPreview = () => {
    const [sneaker, setSneaker] = useState('../../../public/images/image-product-1.jpg');
    const [modal, setModal] = useState(false);

    const thumbnails = [
        { src: '../../../public/images/image-product-1-thumbnail.jpg', fullSrc: '../../../public/images/image-product-1.jpg', alt: 'Thumbnail 1' },
        { src: '../../../public/images/image-product-2-thumbnail.jpg', fullSrc: '../../../public/images/image-product-2.jpg', alt: 'Thumbnail 2' },
        { src: '../../../public/images/image-product-3-thumbnail.jpg', fullSrc: '../../../public/images/image-product-3.jpg', alt: 'Thumbnail 3' },
        { src: '../../../public/images/image-product-4-thumbnail.jpg', fullSrc: '../../../public/images/image-product-4.jpg', alt: 'Thumbnail 4' },
    ];

    return (
        <div>
            <img src={sneaker} width={380} height={380} alt="Sneaker Preview" onClick={() => { setModal(true) }} />

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
                            onClick={() => setSneaker(thumb.fullSrc)}
                            className={`${styles.thumbnailImage} ${sneaker === thumb.fullSrc ? styles.active : ''}`}
                            alt={thumb.alt}
                        />
                    </div>
                ))}
            </div>
            {modal &&
                <div className={styles.modal}>
                    <div className={styles.modalcontent}>
                        <img src={sneaker} width={380} height={380} alt="Sneaker Preview" />
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
                                        onClick={() => setSneaker(thumb.fullSrc)}

                                        className={`${styles.thumbnailImage} ${sneaker === thumb.fullSrc ? styles.active : ''}`}
                                        alt={thumb.alt}
                                    />
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
