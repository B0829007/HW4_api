import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom';
class UserGithub extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    username: '',
    githubtUrl: '',
    avatarUrl: '',
    website:'',
    location: '',
    followers:'',
    }
    }
    componentDidMount() {
    $.get(this.props.source, (result) => {
    console.log(result);
    const data = result;
    if (data) {
    this.setState({
    username: data.name,
    githubtUrl: data.html_url,
    avatarUrl: data.avatar_url,
    website: data.blog,
    location:data.location,
    followers:data.followers
    });
    }
    });
    }
    render() {
    return (
    <div>
    <h3>{this.state.username}</h3>
    <img src={this.state.avatarUrl} />
    <h3><a href={this.state.githubtUrl}>Github Link</a></h3>
    <h3><a href={this.state.website}>My Website</a></h3>
    <h3>Location : {this.state.location}</h3>
    <h3>My Followers : {this.state.followers}</h3>
    </div>
    );
    }
   }
   ReactDOM.render(
    <UserGithub source="https://api.github.com/users/B0829007" />,
    document.getElementById('root')
   );
   