// import styles from "./QRCode.module.scss";
import Card from "./Card";
import qr from "qrcode";
import Head from "./Head";

const QRCode = (props) => {
  const canvas = document.createElement("canvas");
  qr.toCanvas(canvas, props.url, {
    margin: 0,
    errorCorrectionLevel: "L",
    color: {
      light: "#10181C" /* $color-grey-900 */,
      dark: "#f9fafb" /* $color-grey-50 */,
    },
  });
  return (
    <Card>
      <Head text={props.url} />
      {canvas}
    </Card>
  );
};
export default QRCode;
