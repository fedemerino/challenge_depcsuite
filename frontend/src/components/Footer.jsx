import dePC from "../assets/depc.png";
import facebookIcon from "../assets/icon_fb.svg";
import instagramIcon from "../assets/icon_ig.svg";
import linkedinIcon from "../assets/icon_in.svg";
import whatsappIcon from "../assets/icon_wa.svg";
import topArrow from "../assets/icon_bullet.png";
import argFlag from "../assets/arg.svg";
import colFlag from "../assets/col.svg";
import afipQr from "../assets/QR_afip.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerLeft">
          <div className="footerLeftTop">
            <div className="footerLeftTopImageContainer">
              <img src={dePC} />
            </div>
            <div className="footerLeftTopTextContainer">
              <p className="footerLeftTopText">ACADEMIA DE PROGRAMACIÓN</p>
            </div>
          </div>
          <div className="footerLeftBottom">
            <div className="footerLeftBottomSocialMediaContainer">
              <img className="footerLeftBottomSocialMedia" src={whatsappIcon} />
              <img className="footerLeftBottomSocialMedia" src={facebookIcon} />
              <img
                className="footerLeftBottomSocialMedia"
                src={instagramIcon}
              />
              <img className="footerLeftBottomSocialMedia" src={linkedinIcon} />
            </div>
            <p className="footerLeftBottomText">
              www.depcsuite.com | info@depcsuite.com
            </p>
          </div>
        </div>
        <div className="footerRight">
          <div className="footerRightTop">
            <img src={topArrow} />
          </div>
          <div className="footerRightCenter">
            <div className="footerRightCenterCursos">
              <p className="footerRightCenterCursosText">
                CURSOS DE PROGRAMACIÓN
              </p>
              <div className="footerRightCenterCursosTextContainer">
                <p className="footerRightCenterCursosText">
                  Web Full Stack PHP
                </p>
                <p className="footerRightCenterCursosText">Python</p>
                <p className="footerRightCenterCursosText">Microsoft C# .Net</p>
              </div>
            </div>
            <div className="footerRightCenterCursos">
              <p className="footerRightCenterCursosText">
                CURSOS COMPLEMENTARIOS
              </p>
              <div className="footerRightCenterCursosTextContainer">
                <p className="footerRightCenterCursosText">Microsoft Excel</p>
                <p className="footerRightCenterCursosText">
                  Workshop de Criptomonedas
                </p>
              </div>
            </div>
          </div>
          <div className="footerRightBottom">
            <p>OFICINAS</p>
            <div className="footerRightBottomOficinasContainer">
              <div className="footerRightBottomOficinasPais">
                <div className="footerRightBottomOficinasBandera">
                  <img src={argFlag} />
                  <p className="footerRightBottomOficinasText">Argentina</p>
                </div>
                <p className="footerRightBottomOficinasText">
                  Güemes 3355 Piso 35
                </p>
                <p className="footerRightBottomOficinasText">Buenos Aires</p>
              </div>
              <div className="footerRightBottomOficinasPais">
                <div className="footerRightBottomOficinasBandera">
                  <img src={colFlag} />
                  <p className="footerRightBottomOficinasText">Colombia</p>
                </div>
                <p className="footerRightBottomOficinasText">
                  Diagonal 45d #20-22
                </p>
                <p className="footerRightBottomOficinasText">Bogotá</p>
              </div>
              <div className="footerRightBottomAfipQrContainer">
                <img className="afipQr" src={afipQr} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <span className="footerBottomDivider" />
        <div className="footerBottomTextContainer">
          <p className="footerBottomText">
            © 2023 DEPCSUITE S.A. Todos los derechos reservados. 
          </p>
          <a className="footerBottomTextUnderlined">
            Política de privacidad.
          </a>
          <p className="footerBottomText">
            CUIT N° 30-71683193-7. I.N.P.I. Res 2999343/19. Según disposición Nro: DI-2019-131-APN-DNM#INPI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
