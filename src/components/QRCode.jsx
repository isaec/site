import styles from "./QRCode.module.scss";
import Card from "./Card";
import qr from "qrcode";
import Head from "./Head";
import { createResource } from "solid-js";

const makeQRCodeCanvas = async (url) => {
  const canvas = document.createElement("canvas");
  canvas.className = styles.qr;
  await qr.toCanvas(canvas, url, {
    margin: 0,
    scale: 4 * 6,
    errorCorrectionLevel: "L",
    color: {
      light: "#10181C" /* $color-grey-900 */,
      dark: "#d4d7dd" /* $color-grey-300 */,
    },
  });
  return canvas;
};

const QRCode = (props) => {
  const url = props.url;
  const [canvas] = createResource(`https://${url}`, makeQRCodeCanvas);
  return (
    <Card>
      <Head text={url} />
      {canvas}
    </Card>
  );
};
export default QRCode;
