import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { server__image__host__url } from '../../../../../app/store';
const UploadProductImage = () => {
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState(JSON.parse(sessionStorage.getItem('images')) || []);
  
    const handleImageUpload = (event) => {
      const files = Array.from(event.target.files);
      setImages(files);
      
      const previewURLs = files.map((file) => URL.createObjectURL(file));
      setPreviewImages([...previewImages, ...previewURLs]);
    };
  
    const handleUploadAllImages = () => {
      let formData = new FormData();
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }
      axios.post('http://localhost:10000/api/v1/file/upload/multiple',formData,{headers: {'Content-Type': 'multipart/form-data'}}).then((res)=>{
        if(res.status === 200 && res.data && res.data?.status__code === 200){
          toast.success('Successfully all images uploaded!',{duration: 3000})

          let images = res.data.images;
          let resetPreviewImages = previewImages.filter((info)=> info.indexOf('/images') !== -1);
          setImages([])
          sessionStorage.setItem('images',JSON.stringify([...resetPreviewImages, ...images]));
          setPreviewImages([...resetPreviewImages, ...images]);
        }else{
          toast.error('There was a server side error!',{duration: 3000})
        }
      }).catch(err => {
        toast.error(err.message,{duration: 3000})
      })
    }
  
    let newPreviewImages = [];
    previewImages.forEach((info)=>{
      if(info.indexOf('ryans') === -1){
        newPreviewImages.push(info)
      }
    })
  
    const handleDeleteUploadedImages = () => {
      let images = JSON.parse(sessionStorage.getItem('images'))||[];
      if(images && images?.length){
          axios.delete('http://localhost:10000/api/v1/file/upload/multiple', {headers: {images: previewImages}}).then((res)=>{
            if(res.status === 200 && res.data && res.data?.status__code === 200){
              toast.success('Successfully all images deleted!',{duration: 3000})
              
              sessionStorage.setItem('images',JSON.stringify([]));
              setPreviewImages([]);
            }else{
              toast.error('There was a server side error!',{duration: 3000})
            }
          }).catch(err => { 
            
          })
      }else{
        toast.error('Invalid Server Request!',{duration: 3000})
      }
    } 

    const [selectedImage, setSelectedImage] = useState([]);
    const handleMarkImage = (className, imgSrc) => {
      let imageItem = document.querySelector(`.${className}`);
      if(imageItem){
        imageItem.classList.toggle('active')
        let newSelectedImage = [...selectedImage]; 
          let imgSrcIndex = imgSrc.indexOf('/images');
          if(imgSrcIndex !== -1){
            let imageIndex = newSelectedImage.indexOf(imgSrc);
            if( imageIndex === -1){
                newSelectedImage.push(imgSrc)
                setSelectedImage(newSelectedImage);
            }else{
              newSelectedImage.splice(imageIndex,1);
              setSelectedImage(newSelectedImage);
            }
          }
      }
    }


    const handleDeleteMarkImages = () => {
      let images = selectedImage;
      if(images && images?.length){
          axios.delete('http://localhost:10000/api/v1/file/upload/multiple', {headers: {images}}).then((res)=>{
            if(res.status === 200 && res.data && res.data?.status__code === 200){
              toast.success('Successfully all images deleted!',{duration: 3000})
                let newImagesSrcInfo = previewImages.filter((info)=> images.indexOf(info) === -1);
                    setPreviewImages(newImagesSrcInfo);
                    setSelectedImage([]);
                    let previewItems = document.querySelectorAll('.preview__image');
                    if(previewItems){ 
                        previewItems.forEach((info)=>{
                          info.classList.remove('active');
                        })
                    }
              sessionStorage.setItem('images',JSON.stringify(newImagesSrcInfo)); 
            }else{
              toast.error('There was a server side error!',{duration: 3000})
            }
          }).catch(err => { 

          })
      }else{
        toast.error('Invalid Server Request!',{duration: 3000})
      }
    }

    const handleRemoveImages = () => {
      sessionStorage.removeItem('images');
      setImages(()=> []);
      setPreviewImages(()=> []);
    }

    return (
      <div> 
          <Text fontSize={'2xl'} className='padding__bottom'>Upload product images</Text>
          <form> 
            <Box className='data__view__form'>
              <FormControl>
                <FormLabel>Upload Images</FormLabel>
                <Input type="file" size='sm' multiple onChange={handleImageUpload} />
              </FormControl> 
            </Box>
              {newPreviewImages.length > 0 && (
              <div className='data__form__submit__button'>
                {
                  selectedImage.length !== 0 && 
                  <Button 
                    size='sm' 
                    onClick={handleDeleteMarkImages}
                    variant="outline"
                    colorScheme="orange"
                    mr='30px'
                    isDisabled={selectedImage.length === 0}
                  >
                    Delete Marked Images
                  </Button>
                }
                {
                    newPreviewImages[newPreviewImages.length-1].indexOf('/images') !== -1 &&
                  <Button 
                    size='sm' 
                    onClick={handleDeleteUploadedImages}
                    variant="outline"
                    colorScheme="orange"
                    mr='30px'
                    isDisabled={newPreviewImages[newPreviewImages.length-1].indexOf('/images') === -1}
                  >
                    Delete Uploaded Images
                  </Button>
                }
                  { newPreviewImages[newPreviewImages.length-1].indexOf('/images') === -1 &&
                    <Button 
                      size='sm'  
                      onClick={handleUploadAllImages}
                      variant={'outline'}
                      colorScheme='green'
                      isDisabled={newPreviewImages[newPreviewImages.length-1].indexOf('/images') !== -1}
                    >
                      Upload Images
                    </Button>
                  }
                  { newPreviewImages[newPreviewImages.length-1].indexOf('/images') !== -1 &&
                    <Button 
                      size='sm'  
                      onClick={handleRemoveImages}
                      variant={'outline'}
                      colorScheme='green'
                      isDisabled={newPreviewImages[newPreviewImages.length-1].indexOf('/images') === -1}
                    >
                      Remove Images
                    </Button>
                  }
              </div>
              )}
          </form> 
          <div className='data__view__image__preview'>
              {newPreviewImages.map((url, index) => (
              <Image  className={`preview__image__${index} preview__image`} onClick={()=> handleMarkImage(`preview__image__${index}`, url)}  key={index} src={url.indexOf('/images') !== -1 ? server__image__host__url+url: url} alt={`Preview Image ${index + 1}`} />
              ))}
          </div> 
      </div>
  );
};

export default UploadProductImage;