import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import { Container } from './styles';

interface DropzoneProps {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState<string>();

  const onDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];
      const fileURL = URL.createObjectURL(file);

      setSelectedFileUrl(fileURL);
      onFileUploaded(file);
    },
    [onFileUploaded],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <Container {...getRootProps()}>
      <input accept="image/*" {...getInputProps()} />

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Receita" />
      ) : (
        <p>
          <FiUpload />
          Selecione uma Imagem
        </p>
      )}
    </Container>
  );
};

export default Dropzone;
