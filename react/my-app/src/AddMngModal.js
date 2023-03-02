import React,{ Component } from "react";
import { Modal, Button, Row, Col, Form, ModalHeader, ModalTitle, ModalBody, FormGroup, FormLabel, FormControl, ModalFooter} from "react-bootstrap";


export class AddMngModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'manga/',{
            method:'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:null,
                title:event.target.title.value,
                score:event.target.score.value,
                synopsis:event.target.synopsis.value,
                author:event.target.author.value,
                chapters:event.target.chapters.value,
                demographic:event.target.demographic.value,
                publisher:event.target.publisher.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed.');
        })
    }


    render(){
        return(
            <div className="container">
<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
<ModalHeader closeButton>
    <ModalTitle id="contained-modal-title-vcenter">
        Add Manga
    </ModalTitle>
</ModalHeader>
<ModalBody>
    <Row>
        <Col sm={7}>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup controlId="title">
                    <FormLabel>Title</FormLabel>
                    <FormControl name="title" required
                    placeholder="Type the manga tittle."/>
                </FormGroup>
                <FormGroup controlId="score">
                    <FormLabel>Score</FormLabel>
                    <FormControl name="score" required
                    placeholder="Type your score. example:8.50"/>
                </FormGroup>
                <FormGroup controlId="synopsis">
                    <FormLabel>Synopsis</FormLabel>
                    <FormControl  name="synopsis" required
                    placeholder="Type the synopsis."/>
                </FormGroup>
                <FormGroup controlId="author">
                    <FormLabel>Author</FormLabel>
                    <FormControl name="author" required
                    placeholder="Type the name of author."/>
                </FormGroup>
                <FormGroup controlId="chapters">
                    <FormLabel>Chapters</FormLabel>
                    <FormControl name="chapters" required
                    placeholder="Type the number of chapters."/>
                </FormGroup>
                <FormGroup controlId="demographic">
                    <FormLabel>Demographic</FormLabel>
                    <FormControl name="demographic" required
                    placeholder="Type the demographic."/>
                </FormGroup>
                <FormGroup controlId="publisher">
                    <FormLabel>Publisher</FormLabel>
                    <FormControl type="date" name="publisher" required
                    placeholder="Type the date the publication started."/>
                </FormGroup>

                <Button variant="primary" type="submit">
                    Add Manga
                </Button>

            </Form>
        </Col>
    </Row>

</ModalBody>
<ModalFooter>
    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
</ModalFooter>
</Modal>
            </div>
        )
    }
}