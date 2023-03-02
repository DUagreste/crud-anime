import React,{ Component } from "react";
import { Modal, Button, Row, Col, Form, ModalHeader, ModalTitle, ModalBody, FormGroup, FormLabel, FormControl, ModalFooter} from "react-bootstrap";


export class EditAnmModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'anime/',{
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
        Edit Anime
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
                    defaultValue={this.props.anmid}
                    placeholder="Anime ID."/>
                </FormGroup>
                <FormGroup controlId="title">
                    <FormLabel>Title</FormLabel>
                    <FormControl name="title" required
                    defaultValue={this.props.anmtitle}
                    placeholder="Type the anime tittle."/>
                </FormGroup>
                <FormGroup controlId="score">
                    <FormLabel>Score</FormLabel>
                    <FormControl name="score" required
                    defaultValue={this.props.anmscore}
                    placeholder="Type your score. example:8.50"/>
                </FormGroup>
                <FormGroup controlId="synopsis">
                    <FormLabel>Synopsis</FormLabel>
                    <FormControl  name="synopsis" required
                    defaultValue={this.props.anmsynopsis}
                    placeholder="Type the synopsis."/>
                </FormGroup>
                <FormGroup controlId="episodes">
                    <FormLabel>Episodes</FormLabel>
                    <FormControl name="episodes" required
                    defaultValue={this.props.anmepisodes}
                    placeholder="Type the number of episodes."/>
                </FormGroup>
                <FormGroup controlId="genres">
                    <FormLabel>Genres</FormLabel>
                    <FormControl name="genres" required
                    defaultValue={this.props.anmgenres}
                    placeholder="Type the genres."/>
                </FormGroup>
                <FormGroup controlId="studios">
                    <FormLabel>Studios</FormLabel>
                    <FormControl name="studios" required
                    defaultValue={this.props.anmstudios}
                    placeholder="Type the studios that made it."/>
                </FormGroup>

                <Button variant="primary" type="submit">
                    Update Anime
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