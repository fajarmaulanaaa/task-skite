'use client';
import colors from '@/utils/colors';
import { Box, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React, { useEffect } from 'react';
import GeneralButton from '../atoms/GeneralButton';
import RegulerTeks from '../atoms/RegulerText';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import productStore from '@/context/useProductStore';
import { useParams } from 'next/navigation';

const ImageUpload = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const { formProduct, setFormProduct, resetImage, handleCreateProduct, handleUpdateProduct } = productStore();
    const [images, setImages] = React.useState<ImageListType>([]);
    const params = useParams()

    useEffect(() => {
        if (formProduct.image) {
            setImages([{ data_url: formProduct.image }]);
        }
    }, [formProduct.image]);

    const onChange = (imageList: ImageListType) => {
        setImages(imageList);
        if (imageList.length > 0) {
            const uploadedImageUrl = imageList[0].data_url;
            setFormProduct('image', uploadedImageUrl || '');
        } else {
            setFormProduct('image', '');
        }
    };

    const handleRemoveImage = () => {
        setImages([]);
        resetImage();
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', bgcolor: colors.bgLight, width: '100%', minHeight: '100vh', p: '28px' }}>
            <ImageUploading
                value={images}
                onChange={onChange}
                maxNumber={1}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    <div className="upload__image-wrapper">
                        <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: colors.white, justifyContent: 'start', alignItems: 'center', gap: '12px' }}>
                            {imageList.length > 0 ? (
                                imageList.map((image, index) => (
                                    <div key={index} className="image-item">
                                        <img src={image['data_url']} alt="" width="100" />
                                    </div>
                                ))
                            ) : (
                                <Image src={'/img/coolicon.png'} alt='img' width={170} height={170} />
                            )}
                            {imageList.length > 0 ? (
                                <GeneralButton variant='text' bgColor={colors.white} color={colors.error} onClick={handleRemoveImage}>
                                    <RegulerTeks textDecoration='underline' size='14px' text='Remove Image' />
                                </GeneralButton>
                            ) : (
                                <GeneralButton variant='text' bgColor={colors.white} color={colors.primary} onClick={onImageUpload}>
                                    <RegulerTeks textDecoration='underline' size='14px' text='Upload image here' />
                                </GeneralButton>
                            )}
                            {isMobile && (
                                <GeneralButton variant='contained' onClick={() => {
                                    if (params.id) {
                                        handleUpdateProduct(params.id)
                                    } else {
                                        handleCreateProduct()
                                    }
                                }} color={colors.white} bgColor={colors.success}>
                                    <RegulerTeks text='Publish' />
                                </GeneralButton>
                            )}
                        </Box>
                    </div>
                )}
            </ImageUploading>
        </Box>
    );
};

export default ImageUpload;
