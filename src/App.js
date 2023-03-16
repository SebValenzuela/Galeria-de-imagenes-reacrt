import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <>
      <Header titulo="Galeria de Imagenes 'Camaras'"/>
      
      <Card ruta="https://tododigital.cl/wp-content/uploads/2018/11/1492611670000_1333200.jpg" titulo="Cámara Nikon D7500 kit 18-140mm" descripcion="Cámara Nikon Sensor CMOS de formato DX de 20.9MP. EXPEED 5 Procesador de imágenes. Grabación de video 4K UHD a 30 fps. Disparo de 8 fps para hasta 100 cuadros."/>
      <Card ruta="https://tododigital.cl/wp-content/uploads/2020/03/a-2.jpg" titulo="Cámara Canon 90D kit EF-S 18-135 mm f/ 3.5-5.6 IS" descripcion="Cámara Canon Sensor CMOS APS-C de 32.5MP. Procesador de imagen DIGIC 8. Grabación de video UHD 4K30p y Full HD 120p. Pantalla LCD táctil de ángulo variable de 3 “y 1.04 m de punto."/>
      <Card ruta="https://tododigital.cl/wp-content/uploads/2022/09/SONY-A-7III-28-70-A.jpg" titulo="Cámara Sony a7 II" descripcion="Cámara Sony Sensor CMOS BSI Exmor R de fotograma completo de 42MP. BIONZ X Image Processor & Front-End LSI. Pantalla táctil inclinable con pantalla táctil de 3.0 “y 1.44 m."/>

      <Footer/>
    </>
  );
}

export default App;
