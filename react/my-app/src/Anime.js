import React,{ Component } from "react";
import { Table,Button,ButtonToolbar } from "react-bootstrap";

import { AddAnmModal } from "./AddAnmModal";
import { EditAnmModal } from "./EditAnmModal";

export class Anime extends Component {

    constructor(props){
        super(props);
        this.state={anms:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'anime')
        .then(response=>response.json())
        .then(data=>{
            this.setState({anms:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(prevPops, prevState) {
        if (JSON.stringify(prevState.anms) !== JSON.stringify(this.state.anms)) {
          this.refreshList();
        }
      }
      

    deleteAnm(anmid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API + "anime/" + anmid,{
                method: 'DELETE',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
            })
        }
    }

    render(){
        const {anms, anmid, anmtittle, anmscore, anmsynopsis, anmepisodes, anmgenres, anmstudios}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Score</th>
                            <th>Synopsis</th>
                            <th>Episodes</th>
                            <th>Genres</th>
                            <th>Studios</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {anms.map(anm=>
                        <tr key={anm.id}>
                            <td>{anm.id}</td>
                            <td>{anm.title}</td>
                            <td>{anm.score}</td>
                            <td>{anm.synopsis}</td>
                            <td>{anm.episodes}</td>
                            <td>{anm.genres}</td>
                            <td>{anm.studios}</td>
                            <td>
                            <ButtonToolbar>
                                <Button className="mr-2" variant="info"
                                onClick={()=>this.setState({editModalShow:true, 
                                    anmid:anm.id,
                                    anmtittle:anm.title,
                                    anmscore:anm.score,
                                    anmsynopsis:anm.synopsis,
                                    anmepisodes:anm.episodes,
                                    anmgenres:anm.genres,
                                    anmstudios:anm.studios
                                })}>
                                    Edit
                                </Button>

                                <Button className="mr-2" variant="danger"
                                onClick={()=>this.deleteAnm(anm.id)
                                }>
                                    Delete
                                </Button>

                            
                            <EditAnmModal show={this.state.editModalShow}
                            onHide={editModalClose}
                            anmid={anmid}
                            anmtittle={anmtittle}
                            anmscore={anmscore}
                            anmsynopsis={anmsynopsis}
                            anmepisodes={anmepisodes}
                            anmgenres={anmgenres}
                            anmstudios={anmstudios}
                            />
                            </ButtonToolbar>
                            </td>
                        </tr>
                        )} 
                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button
                    variant="primary"
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Anime
                    </Button>

                    <AddAnmModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddAnmModal>
                </ButtonToolbar>
            </div>
        )
    }
}