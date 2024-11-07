import React from 'react'
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import productStore from '@/context/useProductStore';
import RegulerTeks from '../atoms/RegulerText';
import TitleTeks from '../atoms/TitleText';
import GeneralButton from '../atoms/GeneralButton';
import colors from '@/utils/colors';
;

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

export const ModalConfirmDelete: React.FC<ModalProps> = ({ open, handleClose }) => {

  const { selectItem, handleDeleteProduct } = productStore()
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    marginRight: 0,
    overflow: 'auto',
    maxHeight: '80vh',
    borderRadius: '12px'
  };

  return (
    <Box>
      <Modal
        disableScrollLock
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <TitleTeks color={colors.error} text='Delete Product' />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <RegulerTeks color={colors.black} text={` Apakah Anda yakin untuk menghapus "${selectItem?.name}"? Anda tidak dapat mengembalikan product yang sudah dihapus`} />
            </Box>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: '20px', gap: '12px' }}>
              <GeneralButton variant='contained' onClick={handleClose} color={colors.white} bgColor={colors.success}  >Batal</GeneralButton>
              <GeneralButton
                variant='contained'
                onClick={() => {
                  if (selectItem) {
                    handleDeleteProduct(selectItem!.id);
                  }
                }} color={colors.white} bgColor={colors.error}  >Delete</GeneralButton>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}