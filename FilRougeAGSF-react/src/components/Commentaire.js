import { CodeBlock } from "@atlaskit/code";
import { PureComponent } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

class Commentaire extends PureComponent {
    state = {  }
    render() { 
        return ( 
            <Row>
                <Col xs={1}>
                    <Stack>
                    <CaretUpOutlined/>
                    <div className="center">{this.props.comm.vote}</div>
                    <CaretDownOutlined/>
                    </Stack>
                </Col>
                <Col>
                <p>{this.props.comm.content}</p>
                <div className="codeblock">
                <CodeBlock language="JavaScript" text={this.props.comm.code} />
                </div>
                <Stack>
                    <div className="ms-auto">Répondu par {this.props.comm.userName} le {new Date(this.props.comm.date).toLocaleDateString()}</div>
                </Stack>
                </Col>
                <hr/>
            </Row>
            
         );
    }
}
 
export default Commentaire;