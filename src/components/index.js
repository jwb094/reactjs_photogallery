import React, { Component } from 'react';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: []
    };
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
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
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
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...2</div>

        </div>


      </section>




    )
  }


}

export default Index;


