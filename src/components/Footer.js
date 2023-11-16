import React from "react";
import {Col, Container,Row } from "react-bootstrap";
import "./footer.css"

function Footer() {
  
  return (
    <Container className="footer-container">
      <Row>
      <Col>
     
      <table>
        <th>Learn</th>
        <th>More from us</th>
        <th>Contact</th>
        <tr>
        <td><ul>
          <li>Mathematics</li>
          <li>Physics</li>
          <li>Chemistry</li>
          
        </ul></td>
        <td><ul>
          <li>Presentations</li>
          <li>Character building</li>
          <li>Compresion</li>
          
        </ul></td>
        <td><ul>
          <li>Location</li>
          <li>Contact : +914545457885</li>
          <li>Email : me@hello.com</li>
          
        </ul></td>
        </tr>
        
      </table>
      <div>Div 2</div>
      </Col>
      <Col>
      <from>
        <label for="email"> Email</label>
        <input type="email" id="email" />
          <label for="description">description</label>
          <textarea id="text-box" name="description"  row="3" cols="39"> enter your query</textarea>

        
      </from>
      </Col>
     
      </Row>
    </Container>
  )
}

export default Footer