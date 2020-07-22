import React from 'react';
import logo from './logo.png';
import goldTrophy from './goldTrophy.jpg';
import silverTrophy from './silverTrophy.jpg';
import bronzeTrophy from './bronzeTrophy.jpg';
import contactImg from './contact.jpg';
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons';
import drivers from "./drivers.json";
import language from "./language.json"


function App() {
  return (
    <div className="website">
      <img src={logo} className="App-logo" alt = "logo"/>
      <div className="d-flex justify-content-end">
        <SocialIcon url="https://youtube.com/channel/UCZI6r8luusnwoG_VITrCfIQ"/>
        <SocialIcon url="https://twitter.com/PREMA_Team"/>
        <SocialIcon url="https://www.instagram.com/prema_team/?hl=en"/>
      </div>
      <br/>
        <Navbar variant="dark"expand='lg' className="custom-navbar justify-content-center" sticky="top">
              <Nav>
                <Nav.Link href="#top"><ac id="menuHomeEN">Home</ac><ac id="menuHomeFR" style={{display:"none"}}>Accueil</ac></Nav.Link>
                <Nav.Link href="#aboutus"><ac id="menuAboutEN">About Us</ac><ac id="menuAboutFR"style={{display:"none"}}>À propos de nous</ac></Nav.Link>
                <Nav.Link href="#drivers"><ac id="menuDriversEN">Drivers</ac><ac id="menuDriversFR"style={{display:"none"}}>Conducteurs</ac></Nav.Link>
                <Nav.Link href="#results"><ac id="menuResultsEN">Results</ac><ac id="menuResultsFR"style={{display:"none"}}>Résultats</ac></Nav.Link>
                <Nav.Link href="#contactus"><ac id="menuContactEN">Contact Us</ac><ac id="menuContactFR"style={{display:"none"}}>Nous contacter</ac></Nav.Link>
                <Nav.Link onClick={() => changeLanguage("EN")}><ac>English</ac></Nav.Link>
                <Nav.Link onClick={() => changeLanguage("FR")}><ac>Français</ac></Nav.Link>
              </Nav>
        </Navbar>
        <br/>
        <br/>
        <br/>
        <Container fluid="md">
        <ae>Welcome! This is the home to the premier open-wheel racing team in Europe.</ae><br/>
        <ac>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate lectus vel quam porttitor faucibus. Phasellus purus magna, rutrum ut est et, scelerisque scelerisque eros. Aenean sed odio cursus, facilisis enim in, suscipit justo. Proin ac dolor faucibus lacus rutrum mattis. Nulla viverra sodales dolor nec gravida. Suspendisse vestibulum leo a ex fermentum condimentum. Donec rhoncus tincidunt lorem in pretium. Maecenas in neque turpis. Aenean sit amet hendrerit magna, id tempor enim. Suspendisse facilisis turpis sit amet nibh vulputate rhoncus. Nulla vitae lectus tempor, laoreet arcu vel, interdum dolor. Etiam urna felis, dignissim eget libero id, dictum maximus dui. Aliquam in scelerisque massa.<br/>

Cras id orci sed diam feugiat semper vitae ut tellus. Sed nisi elit, pellentesque sit amet feugiat ut, gravida in sapien. Vivamus lobortis libero a mauris laoreet vestibulum. Suspendisse sodales nibh fermentum enim volutpat pharetra. Quisque sit amet justo erat. Donec in ipsum aliquet, porta elit in, ornare justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sem urna, congue eget massa ac, semper volutpat ligula. Aliquam tincidunt nulla lectus, non dapibus lectus commodo quis.<br/>

Etiam sollicitudin metus nisi, et cursus est molestie malesuada. Curabitur pulvinar, erat sed consequat accumsan, lacus eros rutrum odio, at scelerisque tortor ante placerat augue. Proin et nibh felis. Ut consectetur eget elit at aliquam. Aliquam purus orci, consectetur nec gravida vel, volutpat at ante. Nullam commodo nisi orci, convallis malesuada dui mattis id. Morbi aliquam varius diam, ac rhoncus purus luctus vitae. Nullam vulputate egestas ultrices. Nunc vel tincidunt ipsum. Proin est quam, consequat ac ultrices ut, pretium quis eros. Nullam et arcu nulla. Phasellus ut magna aliquam, finibus odio eget, lobortis enim. Suspendisse aliquam felis tellus, id scelerisque nulla accumsan non.<br/>

Suspendisse tempor leo et turpis efficitur, vitae condimentum ante faucibus. Nulla facilisi. Nulla facilisi. Mauris malesuada nisi cursus leo dignissim dictum. Proin cursus lobortis velit, in euismod nisl consectetur et. Sed vel aliquam neque. Etiam sit amet pharetra risus. Nullam eget tempus sem. Nulla vel ligula eget diam sagittis dapibus. Donec eget risus ligula.<br/>

In suscipit sapien vitae scelerisque hendrerit. Maecenas at ultricies dui. Integer ac nisl vel diam maximus tincidunt nec in libero. Proin sit amet mattis nunc. Nam sollicitudin aliquet ligula non ultricies. Curabitur lobortis ante ut libero posuere, at venenatis enim elementum. Sed vitae nisi turpis. Vestibulum vestibulum nisi ac est malesuada accumsan. Morbi mollis, nisi non vestibulum ultricies, mauris mi pharetra urna, a accumsan tortor urna ac odio. Sed cursus ex mauris, sed eleifend sapien aliquam quis. Praesent posuere eget dolor eget cursus. Sed fermentum vulputate leo, ullamcorper eleifend nibh euismod nec. Morbi ut nibh elementum, commodo nulla sed, accumsan sapien.<br/></ac>
      </Container>
      <br/>
      <br/>
      <div id="aboutus">
        <Container fluid="md">
        <ae>About Us</ae><br/>
        <ac>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie, est nec vehicula sollicitudin, odio ante aliquam turpis, eget luctus velit turpis a massa. Nam maximus arcu eget est pulvinar, quis ultrices justo elementum. Nam semper nec tortor quis mattis. Sed ut iaculis felis, ut interdum mi. In eleifend sapien odio, eget commodo lectus imperdiet eu. Praesent tempus, nisi nec interdum feugiat, neque felis aliquet orci, nec dignissim mauris nisi non arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt dictum condimentum. Sed ornare tempus congue. Praesent fermentum, risus ac dictum facilisis, turpis neque accumsan quam, at pulvinar tellus justo lobortis magna. Maecenas ullamcorper diam vitae mi eleifend consectetur. Sed tincidunt magna sed venenatis ultrices.<br/>

Mauris cursus, tortor at maximus molestie, risus nunc mollis lacus, eu lobortis nisi enim eu diam. In enim sapien, consequat ac commodo consectetur, congue at purus. Curabitur imperdiet vel lorem a vehicula. Integer ac eleifend ipsum. Curabitur sed accumsan orci. Curabitur vitae vehicula turpis. Nam sagittis nulla id ex congue, vitae aliquet felis volutpat.<br/>

Nunc nec condimentum dolor. Sed eu nibh nisi. Nulla molestie metus nec mi rhoncus, ac eleifend purus eleifend. Aenean id nisi at felis pretium aliquet. Duis faucibus sodales nisl, quis molestie lectus placerat eget. Vivamus mauris diam, vulputate ut felis et, malesuada egestas nibh. Etiam aliquam nibh non nisl sagittis, non sagittis nunc condimentum. Aenean leo urna, vestibulum non massa vel, euismod aliquam dolor. Proin lectus orci, auctor a justo non, posuere mollis massa. Integer vitae dapibus velit. Ut eu fringilla magna.<br/>

Vivamus eget magna eu nunc suscipit semper auctor nec lorem. Sed vitae elit ut purus fringilla pharetra. Cras nunc leo, commodo vitae porttitor ac, suscipit vitae quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Fusce tincidunt faucibus mauris, a lobortis diam viverra ut. Nam porttitor risus et congue varius. Sed interdum orci sem, quis lobortis nulla laoreet vitae. Nulla convallis ex non purus faucibus condimentum. Fusce porttitor sapien eu nisl faucibus, blandit porta nisl hendrerit.<br/>

Nulla in mauris in ipsum eleifend pulvinar. Nulla dapibus placerat sapien ac euismod. Cras gravida justo sit amet felis interdum sollicitudin. Curabitur ac odio feugiat felis ullamcorper ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam viverra et ipsum non sollicitudin. Vestibulum ut sollicitudin nisl. Suspendisse vitae hendrerit enim, ut congue metus.</ac><br/>
        </Container>
      </div>

      <div id="drivers">
      <br/>
      <br/>
      <ae>Drivers</ae><br/>x`
        <Container fluid="md">
          <ac>
          <Row>
            <Col>
              <ListGroup>
                <ListGroup.Item>FIA Formula 2 Championship</ListGroup.Item>
                <ListGroup.Item id="schumacher" action onClick={() => DriverClick("schumacher")}>Mick Schumacher</ListGroup.Item>
                <ListGroup.Item id="schwartzman" action onClick={() => DriverClick("schwartzman")}>Robert Schwartzman</ListGroup.Item>
                <ListGroup.Item>FIA Formula 3 Championship</ListGroup.Item>
                <ListGroup.Item id="piastri" action onClick={() => DriverClick("piastri")}>Oscar Piastri</ListGroup.Item>
                <ListGroup.Item id="vesti" action onClick={() => DriverClick("vesti")}>Frederik Vesti</ListGroup.Item>
                <ListGroup.Item id="sargent" action onClick={() => DriverClick("sargent")}>Logan Sargent</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
            Driver Biography<br/>
            <text id="schumacherBio">Schumacher Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat ac lacus ut fermentum. Sed feugiat pretium eleifend. Pellentesque rutrum pharetra sapien, eget aliquet sem. Nullam vel lorem posuere, fringilla metus condimentum, dapibus sapien. Aenean id ex interdum sapien lacinia scelerisque vel at ligula. In sed gravida tortor. Vestibulum commodo dignissim velit. Vivamus euismod nunc eu tortor lobortis fermentum. Ut metus nulla, condimentum eu blandit vel, ultrices quis nisl. Quisque ut libero vel urna luctus vehicula viverra eget nulla. Ut congue posuere urna, ut congue tortor rhoncus in. Vestibulum id enim nec sapien pellentesque facilisis vitae quis nulla.<br/></text>
            <text id="schwartzmanBio" style={{display:"none"}}>Schwartzman Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat ac lacus ut fermentum. Sed feugiat pretium eleifend. Pellentesque rutrum pharetra sapien, eget aliquet sem. Nullam vel lorem posuere, fringilla metus condimentum, dapibus sapien. Aenean id ex interdum sapien lacinia scelerisque vel at ligula. In sed gravida tortor. Vestibulum commodo dignissim velit. Vivamus euismod nunc eu tortor lobortis fermentum. Ut metus nulla, condimentum eu blandit vel, ultrices quis nisl. Quisque ut libero vel urna luctus vehicula viverra eget nulla. Ut congue posuere urna, ut congue tortor rhoncus in. Vestibulum id enim nec sapien pellentesque facilisis vitae quis nulla.<br/></text>
            <text id="piastriBio"style={{display:"none"}}>Piastri Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat ac lacus ut fermentum. Sed feugiat pretium eleifend. Pellentesque rutrum pharetra sapien, eget aliquet sem. Nullam vel lorem posuere, fringilla metus condimentum, dapibus sapien. Aenean id ex interdum sapien lacinia scelerisque vel at ligula. In sed gravida tortor. Vestibulum commodo dignissim velit. Vivamus euismod nunc eu tortor lobortis fermentum. Ut metus nulla, condimentum eu blandit vel, ultrices quis nisl. Quisque ut libero vel urna luctus vehicula viverra eget nulla. Ut congue posuere urna, ut congue tortor rhoncus in. Vestibulum id enim nec sapien pellentesque facilisis vitae quis nulla.<br/></text>
            <text id="vestiBio"style={{display:"none"}}>Vesti Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat ac lacus ut fermentum. Sed feugiat pretium eleifend. Pellentesque rutrum pharetra sapien, eget aliquet sem. Nullam vel lorem posuere, fringilla metus condimentum, dapibus sapien. Aenean id ex interdum sapien lacinia scelerisque vel at ligula. In sed gravida tortor. Vestibulum commodo dignissim velit. Vivamus euismod nunc eu tortor lobortis fermentum. Ut metus nulla, condimentum eu blandit vel, ultrices quis nisl. Quisque ut libero vel urna luctus vehicula viverra eget nulla. Ut congue posuere urna, ut congue tortor rhoncus in. Vestibulum id enim nec sapien pellentesque facilisis vitae quis nulla.<br/></text>
            <text id="sargentBio"style={{display:"none"}}>Sargent Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat ac lacus ut fermentum. Sed feugiat pretium eleifend. Pellentesque rutrum pharetra sapien, eget aliquet sem. Nullam vel lorem posuere, fringilla metus condimentum, dapibus sapien. Aenean id ex interdum sapien lacinia scelerisque vel at ligula. In sed gravida tortor. Vestibulum commodo dignissim velit. Vivamus euismod nunc eu tortor lobortis fermentum. Ut metus nulla, condimentum eu blandit vel, ultrices quis nisl. Quisque ut libero vel urna luctus vehicula viverra eget nulla. Ut congue posuere urna, ut congue tortor rhoncus in. Vestibulum id enim nec sapien pellentesque facilisis vitae quis nulla.<br/></text>

            <br/>
            Driver Acheivements
            <text id="schumacherAch">Schumacher Acheivements</text>
            <text id="schwartzmanAch"style={{display:"none"}}>Schwartzman Acheivements</text>
            <text id="piastriAch"style={{display:"none"}}>Piastri Acheivements</text>
            <text id="vestiAch"style={{display:"none"}}>Vesti Acheivements</text>
            <text id="sargentAch"style={{display:"none"}}>Sargent Acheivements</text>

            </Col>
            <Col>
            <img src="https://www.premapowerteam.com/img/driver_schumacher_01.jpg" id="schumacherImg"/>
            <img src="https://www.premapowerteam.com/img/driver_shwartzman_01.jpg" id="schwartzmanImg"style={{display:"none"}}/>
            <img src="https://www.premapowerteam.com/img/driver_piastri_01.jpg" id="piastriImg"style={{display:"none"}}/>
            <img src="https://www.premapowerteam.com/img/driver_vesti_01.jpg" id="vestiImg"style={{display:"none"}}/>
            <img src="https://www.premapowerteam.com/img/driver_sargeant_01.jpg" id="sargentImg"style={{display:"none"}}/>
            </Col>
          </Row>
          </ac>
        </Container>
      </div>
      <div id="results">
      <br/>
      <br/>
      <ae>Team Results</ae>
        <Container id="trophyCase" fluid="xl" className="align-self-center">
          <Row className="row-md-auto">
            <Col className="col-md-auto"><Container><Button variant="none"><img src = {goldTrophy} className="trophy"/></Button><br/>
            <text>2020 Styrian GP F2 Feature Race</text></Container></Col>
            <Col className="col-md-auto"><Container><Button variant="none"><img src = {bronzeTrophy} className="trophy"/></Button><br/>
            <text>2020 Austrian GP F2 Feature Race</text></Container></Col>
            <Col className="col-md-auto"><Container><Button variant="none"><img src = {goldTrophy} className="trophy"/></Button><br/>
            <text>2020 Austrian GP F3 Feature Race</text></Container></Col>
          </Row>
          <Row>
            <Col className="col-md-auto"><Container><Button variant="none"><img src = {goldTrophy} className="trophy"/></Button><br/>
            <text>2020 Austrian GP F3 Feature Race</text></Container></Col>
            <Col className="col-md-auto"><Container><Button variant="none"><img src = {silverTrophy} className="trophy"/></Button><br/>
            <text>2020 Austrian GP F3 Feature Race</text></Container></Col>
            <Col className="col-md-auto"><Container><Button variant="none"><img src = {silverTrophy} className="trophy"/></Button><br/>
            <text>2020 Austrian GP F3 Sprint Race</text></Container></Col>
          </Row>
        </Container>

      </div>
      <div id="contactus">
      <br/>
      <br/>
      <ae>Contact Us</ae>
      <Container fluid="md">

        <Row>
          <Col>
          <Container>
            <Col>
              <Form>
                <Form.Group controlId="contactForm">
                  Name:
                  <Form.Control type="text" placeholder="Please enter your Name."/>
                  Email:
                  <Form.Control type="email" placeholder = "example@example.com"/>
                  Message:
                  <Form.Control as="textarea"/>
                </Form.Group>
              </Form>
              <img src={contactImg}></img>
            </Col>
          </Container>
          <Container>

          </Container>
          </Col><Col>
          <ae>Are you a media correspondant?</ae>
          <Button variant = "danger">Media Login</Button>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}

function DriverClick(driver){
  var driverBio = document.getElementById(driver+"Bio");
  var driverImg = document.getElementById(driver+"Img");
  var driverAch = document.getElementById(driver+"Ach");
  for(var i = 0; i < drivers.length; i++){
    document.getElementById(drivers[i]+"Bio").style.display = "none";
    document.getElementById(drivers[i]+"Img").style.display = "none";
    document.getElementById(drivers[i]+"Ach").style.display = "none";
  }
  driverBio.style.display="block";
  driverAch.style.display="block";
  driverImg.style.display="block";
}
function changeLanguage(lan){
  for(var i = 0; i < language.length; i++){
    document.getElementById(language[i]+"EN").style.display="none";
    document.getElementById(language[i]+"FR").style.display="none";
    document.getElementById(language[i]+lan).style.display="block";
  }
}
export default App;
