import React, { Component } from 'react';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        }


    
            
        /*componentDidMount() {
          fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_CLIENT_ID_KEY}`)
            .then(result => result.json())
            .then(result => {
              console.log(result)
              this.setState({
                      articles: result.articles,  
                      top_four: result.articles   
                 })
            });
      
          }*/

          
    render() {
    
        return(
            <section id="element">

          
          <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...1
    <h5>New Image</h5>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...2</div>
  
</div>
  
        
</section>
            

            
      
            )
        }


}

export default Index;


          