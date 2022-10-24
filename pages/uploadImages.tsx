import MainContainer from "components/containers/MainContainer";
import { MainSlider } from "components/templates/MainSlider";
import { withLayout } from "layout/Layout";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { getBase64 } from "untils/getBase64";
import { slides } from "untils/slides";
import GridLayout from "react-grid-layout";

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
            <UploadedItems
              className="layout"
              cols={4}
              rowHeight={250}
              width={1000}
            >
              {uploadedImages.map((file: uploadedFile, index) => {
                return (
                  <UploadedItem key={file.id + index}>
                    <img src={file.value} />
                  </UploadedItem>
                );
              })}
              {/* {slides.map((file, index) => (
                <UploadedItem key={index}>
                  <img src={file} />
                </UploadedItem>
              ))} */}
            </UploadedItems>
            {/* <UploadedItems>
              {uploadedImages.map((file: uploadedFile, index) => {
                return (
                  <UploadedItem>
                    <img key={file.id + index} src={file.value} /> 
                  </UploadedItem>
                );
              })}
            </UploadedItems> */}
          </aside>
        </section>
      </MainContainer>
    </UploadImagesWrapper>
  );
}

export default withLayout(UploadImages);

const UploadImagesWrapper = styled.section``;
const UploadedItems = styled(GridLayout)`
  margin: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const UploadedItem = styled.div`
  width: 100%;
  border: 1px solid #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
  }
`;
