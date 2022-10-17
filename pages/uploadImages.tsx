import MainContainer from "components/containers/MainContainer";
import { MainSlider } from "components/templates/MainSlider";
import { withLayout } from "layout/Layout";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { getBase64 } from "untils/getBase64";

interface uploadedFile {
  id: number;
  value: string;
}
function UploadImages(): JSX.Element {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [uploadedImages, setUploadedImages] = useState<uploadedFile[]>([]);
  const [fileId, setFileId] = useState(0);
  const getStringFrom64 = (ImageBase64: string) => {
    setUploadedImages((prev) => [
      ...prev,
      { id: fileId + 1, value: ImageBase64 },
    ]);
    setFileId(fileId + 1);
  };

  useEffect(() => {
    acceptedFiles.length &&
      acceptedFiles.map((file: File) => {
        if (file) {
          getBase64(file, (data: string) => getStringFrom64(data));
        }
        return;
      });
  }, [acceptedFiles]);
  //   console.log(uploadedImages);
  return (
    <UploadImagesWrapper>
      <MainContainer>
        <section className="container">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
          <aside>
            <h4>Files</h4>
            <ul>
              {uploadedImages.map((file: uploadedFile, index) => {
                return <img key={file.id + index} src={file.value} />;
              })}
            </ul>
          </aside>
        </section>
      </MainContainer>
    </UploadImagesWrapper>
  );
}

export default withLayout(UploadImages);

const UploadImagesWrapper = styled.section``;
