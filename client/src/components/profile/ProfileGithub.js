import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Spinner from "../common/spinner";

class ProfileGithub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientId: '1350296509098d1d7363',
            clientSecret: 'd784ce60e2a91e81a139d8744603ba543b87927a',
            count: 5,
            sort: 'created:asc',
            repos: []
        }
    }

    async componentDidMount() {
        const {userName} = this.props;
        const {count, sort, clientId, clientSecret} = this.state;
        const response = await fetch(`https:/api.github.com/users/${userName}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)

        const body = await response.json();
        if (this.refs.myRef) {
            this.setState({
                repos: body
            })
        }


    }


    render() {
        const {repos} = this.state;
        console.log(repos);
        let repoItems;
        if (repos.length === 0) {
            repoItems = <Spinner/>
        } else {

            repoItems = repos.map((repo, index) => (
                <div key={index} className="card card-body mb-2">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>
                                <a href={repo.html_url} className="text-info" target="_blank"> {repo.name}</a>
                            </h4>
                            <p>{repo.description}</p>
                        </div>
                        <div className="col-md-6">
                  <span className="badge badge-info m-1">
                    Stars: {repo.stargazers_count}
                  </span>
                            <span className="badge badge-secondary m-1">
                    Watchers: {repo.watchers_count}
                  </span>
                            <span className="badge badge-success">
                    Forks: {repo.forks_count}
                  </span>
                        </div>
                    </div>
                </div>
            ));
        }
        return (
            <div ref="myRef">
                <hr/>
                <h3 className="mb-4">Latest Github Repos</h3>
                {repoItems}
            </div>

        );
    }
}

export default ProfileGithub;