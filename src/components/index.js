import React, { Component } from 'react';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: [],
      search_pics: [],
      term:''
    };
    this.searchimages = this.searchimages.bind(this);
  }


    searchimages(){
      this.setState({
        term:document.getElementById('search_term').value
      });

      fetch(`https://api.unsplash.com/photos?query=?${this.state.term}&client_id=${process.env.REACT_APP_CLIENT_ID_KEY}`)
      .then(result => result.json())
      .then(result => {
        console.log(result)
        this.setState({
          search_pics: result
        })
      });

    }


  componentDidMount() {
    fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_CLIENT_ID_KEY}`)
      .then(result => result.json())
      .then(result => {
        console.log(result)
        this.setState({
          pics: result
        })
      });

  }


  render() {

    return (
      
      <section id="element">


        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Search</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...1
          <h5>New Image</h5>
          {this.state.pics.map(pic => 
          
            <div class="card">
            <img class="card-img-top" src={pic.urls.full} alt="Card image cap"></img>
            <div class="card-body">
              photo by <a href={`{$pic.user.links.self}/?utm_source=your_app_name&utm_medium=referral`}> {pic.user.first_name}{pic.user.last_name} </a>
              on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a>
            </div>
          </div>
          )}
       
     



          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Search Images
          <div className="col-sm-12">
                <div className="input-group mb-3">
                    <input type="text" class="form-control" id="search_term" placeholder="E.g. Beach,city,dog" aria-describedby="button-addon2"></input>
                    <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2"  onClick={this.searchimages}>Button</button>
                    </div>
                </div>
                <h5>New Image</h5>
          {this.state.search_pics.map(pic => 
          
            <div class="card">
            <img class="card-img-top" src={pic.urls.full} alt="Card image cap"></img>
            <div class="card-body">
              photo by <a href={`{$pic.user.links.self}/?utm_source=your_app_name&utm_medium=referral`}> {pic.user.first_name}{pic.user.last_name} </a>
              on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a>
            </div>
          </div>
          )}
                
            </div> 
          </div>

        </div>


      </section>




    )
  }


}

export default Index;


