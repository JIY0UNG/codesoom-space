import { useState } from 'react';

import styled from '@emotion/styled';
import { Button, Dialog, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Wrap = styled.div({
  display: 'flex',
  padding: '3rem',
  flexDirection: 'column',
});

const ButtonWrap = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',

  'button: nth-child(1)': {
    marginRight: '1rem',
  },
});

const RetrospectionModal: React.FC = () => {
  const characterLimit = 500;
  const [values, setValues] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValues(event.target.value);
  };

  return (
    <Dialog
      open
    >
      <Wrap>
        <IconButton
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: 0,
          }}
          color="primary"
          aria-label="close dialog"
          component="label">
          <CloseIcon />
        </IconButton>
        <TextField
          label="회고"
          variant="outlined"
          multiline
          rows={3}
          placeholder="회고를 입력해주세요."
          fullWidth
          style={{ margin: '1rem 3rem 1rem 0' }}
          inputProps={{ maxlength: characterLimit, minLength: 100 }}
          value={values}
          helperText={`${values.length} /${characterLimit}`}
          onChange={handleChange}
        />
        <ButtonWrap>
          <Button variant='outlined' size='small'>
            취소
          </Button>
          <Button variant='contained' size='small'>
            제출
          </Button>
        </ButtonWrap>
      </Wrap >
    </Dialog >
  );
};

export default RetrospectionModal;
