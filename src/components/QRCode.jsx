// import styles from "./QRCode.module.scss";
import Card from "./Card";
import qr from "qrcode";
import Head from "./Head";
import { createResource, createSignal } from "solid-js";

const makeQRCodeCanvas = async (url) => {
  const canvas = document.createElement("canvas");
  await qr.toCanvas(canvas, url, {
    margin: 0,
    errorCorrectionLevel: "L",
    color: {
      light: "#10181C" /* $color-grey-900 */,
      dark: "#f9fafb" /* $color-grey-50 */,
    },
  });
  return canvas;
};

const QRCode = (props) => {
  const url = props.url;
  const [canvas] = createResource(url, makeQRCodeCanvas);
  return (
    <Card>
      <Head text={url} />
      {canvas}
    </Card>
  );
};
export default QRCode;
