import React,{ Component } from "react";
import { Modal, Button, Row, Col, Form, ModalHeader, ModalTitle, ModalBody, FormGroup, FormLabel, FormControl, ModalFooter} from "react-bootstrap";


export class EditMngModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'manga/',{
            method:'PUT',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:event.target.id.value,
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
        Edit Manga
    </ModalTitle>
</ModalHeader>
<ModalBody>
    <Row>
        <Col sm={7}>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup controlId="id">
                    <FormLabel>ID</FormLabel>
                    <FormControl name="id" required
                    disabled
                    defaultValue={this.props.mngid}
                    placeholder="Manga ID."/>
                </FormGroup>
                <FormGroup controlId="title">
                    <FormLabel>Title</FormLabel>
                    <FormControl name="title" required
                    defaultValue={this.props.mngtitle}
                    placeholder="Type the manga title."/>
                </FormGroup>
                <FormGroup controlId="score">
                    <FormLabel>Score</FormLabel>
                    <FormControl name="score" required
                    defaultValue={this.props.mngscore}
                    placeholder="Type your score. example:8.50"/>
                </FormGroup>
                <FormGroup controlId="synopsis">
                    <FormLabel>Synopsis</FormLabel>
                    <FormControl  name="synopsis" required
                    defaultValue={this.props.mngsynopsis}
                    placeholder="Type the synopsis."/>
                </FormGroup>
                <FormGroup controlId="author">
                    <FormLabel>Author</FormLabel>
                    <FormControl name="author" required
                    defaultValue={this.props.mngauthor}
                    placeholder="Type the name of author."/>
                </FormGroup>
                <FormGroup controlId="chapters">
                    <FormLabel>Chapters</FormLabel>
                    <FormControl name="chapters" required
                    defaultValue={this.props.mngchapters}
                    placeholder="Type the number of chapters."/>
                </FormGroup>
                <FormGroup controlId="demographic">
                    <FormLabel>Demographic</FormLabel>
                    <FormControl name="demographic" required
                    defaultValue={this.props.mngdemographic}
                    placeholder="Type the demographic."/>
                </FormGroup>
                <FormGroup controlId="publisher">
                    <FormLabel>Publisher</FormLabel>
                    <FormControl type="date" name="publisher" required
                    defaultValue={this.props.mngpublisher}
                    placeholder="Type the date the publication started."/>
                </FormGroup>

                <Button variant="primary" type="submit">
                    Update Manga
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