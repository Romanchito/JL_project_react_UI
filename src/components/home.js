import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export class Home extends Component{

    constructor(props){
        super(props);
        this.state = {films:[]}
    }

    componentDidMount(){
        this.refreshList();
    }

    refreshList(){
        fetch('https://localhost:44327/api/Films')
        .then(response => response.json())
        .then(data => {
            this.setState({films:data});
        });
    }

    getFilmImagePath(filmImageName){
        let dataImg = fetch('https://localhost:44327/api/Image/filmImage/5')
        .then(response => response.json()).then(r => r.text);
        return dataImg;
    }

    render(){
        const {films} = this.state;
        return(
           <Table className = "mt-4" striped bordered hover size="sm">
               <thead>
                   <tr>
                       <td>Id</td>
                       <th>Name</th>
                       <th>ReleaseDate</th>
                       <th>Country</th>  
                       <th>Image</th>                     
                   </tr>
               </thead>

               <tbody>
                   {films.map((film) => 
                        <tr key={film.id}>  
                            <td>{film.id}</td>                                                                       
                            <td>{film.name}</td>
                            <td>{film.releaseDate}</td>
                            <td>{film.country}</td>  
                            <td><img src={this.getFilmImagePath('https://localhost:44327/api/Image/filmImage/'+ film.id)} /></td>                                                    
                        </tr>
                    )}
               </tbody>
           </Table>
        )
    }
}