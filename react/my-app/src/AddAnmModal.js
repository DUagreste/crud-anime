import React,{ Component } from "react";
import { Modal, Button, Row, Col, Form, ModalHeader, ModalTitle, ModalBody, FormGroup, FormLabel, FormControl, ModalFooter} from "react-bootstrap";


export class AddAnmModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'anime/',{
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
                episodes:event.target.episodes.value,
                genres:event.target.genres.value,
                studios:event.target.studios.value
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
        Add Anime
    </ModalTitle>
</ModalHeader>
<ModalBody>
    <Row>
        <Col sm={7}>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup controlId="title">
                    <FormLabel>Title</FormLabel>
                    <FormControl name="title" required
                    placeholder="Type the anime tittle."/>
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
                <FormGroup controlId="episodes">
                    <FormLabel>Episodes</FormLabel>
                    <FormControl name="episodes" required
                    placeholder="Type the number of episodes."/>
                </FormGroup>
                <FormGroup controlId="genres">
                    <FormLabel>Genres</FormLabel>
                    <FormControl name="genres" required
                    placeholder="Type the genres."/>
                </FormGroup>
                <FormGroup controlId="studios">
                    <FormLabel>Studios</FormLabel>
                    <FormControl name="studios" required
                    placeholder="Type the studios that made it."/>
                </FormGroup>

                <Button variant="primary" type="submit">
                    Add Anime
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