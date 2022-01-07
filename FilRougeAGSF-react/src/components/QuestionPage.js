import { SimpleTag } from "@atlaskit/tag";
import {CodeBlock} from "@atlaskit/code";
import { PureComponent } from "react";
import { Container, Row, Stack } from "react-bootstrap";
import Commentaire from "./Commentaire";

class QuestionPage extends PureComponent {
    state = {
        question: {
            title: "Probleme utilisation des variables React.Js",
            content: "Lorem ipsum dolor sit amet. Id dolorum quia eos asperiores consectetur qui quas beatae et veritatis autem id voluptas quis. Id tenetur possimus in tenetur porro ut perferendis voluptatem sit veniam debitis. Qui rerum temporibus ea nulla numquam qui corrupti quas non voluptas recusandae quo voluptatem quam ea quia ipsam aut quia modi. Et numquam minima ut tenetur illum ad veritatis tempora ex perspiciatis sunt et quibusdam internos et galisum consequatur.",
            nameUser: "de La Bath",
            prenomUser: "Hubert Bonisseur",
            dateCreation: Date.now(),
            code: "var var1 = 'blabla' \nvar var2 = 'bloblo'",
            tags: ["javascript", "react.JS"],
            vote: 0,
            comms:[{
                userName: "John Cena",
                content: "Lorem ipsum dolor sit amet. Id dolorum quia eos asperiores consectetur qui quas beatae et veritatis autem id voluptas quis.",
                code: "var var1 = 'blabla' \nvar var2 = 'bloblo'",
                date: Date.now(),
                vote: 0,
            },{
                userName: "Lewin Hamilton",
                content: "Lorem ipsum dolor sit amet. Id dolorum quia eos asperiores consectetur qui quas beatae et veritatis autem id voluptas quis.",
                code: "var var1 = 'blabla' \nvar var2 = 'bloblo'",
                date: Date.now(),
                vote: 2,
            }]
        }
    }

    render() {
        return (
            <Container>
                <Row><h3>{this.state.question.title}</h3></Row>
                <Stack direction="horizontal" gap={3}>
                    <div className="bg-light">Crée le {new Date(this.state.question.dateCreation).toLocaleDateString()}</div>
                    <div className="bg-light ms-auto">Par {this.state.question.prenomUser} {this.state.question.nameUser}</div>
                </Stack>
                <hr />
                <Row>
                    <p>{this.state.question.content}</p>
                </Row>
                <div className="codeblock">
                <CodeBlock language="JavaScript" text={this.state.question.code} />
                </div>
                <Stack direction="horizontal">
                {this.state.question.tags.map((tag) => (
                    <SimpleTag text={tag}/>
                ))}
                </Stack>
                <hr/>
                <div className="commentaires">
                {this.state.question.comms.map((comm) => (
                    <Commentaire comm={comm}/>
                ))}
                </div>
                
            </Container>
        );
    }
}

export default QuestionPage;