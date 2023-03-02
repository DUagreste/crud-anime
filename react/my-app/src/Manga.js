import React,{ Component } from "react";
import { Table,Button,ButtonToolbar } from "react-bootstrap";

import { AddMngModal } from "./AddMngModal";
import { EditMngModal } from "./EditMngModal";

export class Manga extends Component {

    constructor(props){
        super(props);
        this.state={mngs:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'manga')
        .then(response=>response.json())
        .then(data=>{
            this.setState({mngs:data});
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

    deleteMng(mngid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API + "manga/" + mngid,{
                method: 'DELETE',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
            })
        }
    }

    render(){
        const {mngs, mngid, mngtittle, mngscore, mngsynopsis, mngauthor, mngchapters, mngdemographic, mngpublisher}=this.state;
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
                            <th>Author</th>
                            <th>Chapters</th>
                            <th>Demographic</th>
                            <th>Publisher</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mngs.map(mng=>
                        <tr key={mng.id}>
                            <td>{mng.id}</td>
                            <td>{mng.title}</td>
                            <td>{mng.score}</td>
                            <td>{mng.synopsis}</td>
                            <td>{mng.author}</td>
                            <td>{mng.chapters}</td>
                            <td>{mng.demographic}</td>
                            <td>{mng.publisher}</td>
                            <td>
                            <ButtonToolbar>
                                <Button className="mr-2" variant="info"
                                onClick={()=>this.setState({editModalShow:true, 
                                    mngid:mng.id,
                                    mngtittle:mng.title,
                                    mngscore:mng.score,
                                    mngsynopsis:mng.synopsis,
                                    mngauthor:mng.author,
                                    mngchapters:mng.chapters,
                                    mngdemographic:mng.demographic,
                                    mngpublisher:mng.publisher
                                })}>
                                    Edit
                                </Button>

                                <Button className="mr-2" variant="danger"
                                onClick={()=>this.deleteMng(mng.id)
                                }>
                                    Delete
                                </Button>

                            
                            <EditMngModal show={this.state.editModalShow}
                            onHide={editModalClose}
                            mngid={mngid}
                            mngtittle={mngtittle}
                            mngscore={mngscore}
                            mngsynopsis={mngsynopsis}
                            mngauthor={mngauthor}
                            mngchapters={mngchapters}
                            mngdemographic={mngdemographic}
                            mngpublisher={mngpublisher}
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
                    Add Manga
                    </Button>

                    <AddMngModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddMngModal>
                </ButtonToolbar>
            </div>
        )
    }
}