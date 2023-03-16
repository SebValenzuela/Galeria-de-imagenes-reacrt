import Button from 'react-bootstrap/Button';

const Footer = () => {
    return (
        <div className="contenedor">
            <hr />
            <h2>Todos los derechos reservados</h2>
            <br />
            <h4>Te gustan las camaras?. <br/> <br/> Encuentra más en nuestra página oficial!</h4>
            <br />
            <Button variant="success">Revisa nuestra página</Button>
        </div>
    );
};

export default Footer;