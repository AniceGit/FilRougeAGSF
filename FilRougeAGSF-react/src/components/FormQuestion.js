import React from "react";
import { Link } from "react-router-dom";
import '../styles/Profil.css';
import { Redirect } from 'react-router';
import axios from "axios";

export default class FormQuestion extends React.Component {
    state = {
        tags: '',
        title: '',
        content: '',
    };

    handleChangeTag = event => {
        this.setState({
            tags: event.target.value
        })
    }

    handleChangeTitle = event => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeContent = event => {
        this.setState({
            content: event.target.value
        })
    }


    handleSubmit = event => {
        return new Promise((onSuccess, onFail) => {
            event.preventDefault()
            console.log(this.state.tags)
            let formData = new FormData();
            formData.append("tags", this.state.tags);
            formData.append("title", this.state.title);
            formData.append("content", this.state.content);

            axios.post('http://localhost:58516/api/questions/submitQuestion', formData)
                .then((res, err) => {
                    if (!res || err) {
                        return onFail(`Response failure : ${err}`)
                    }
                    onSuccess(res)
                    console.log(res);
                    console.log(res.data);
                })
                .then(() => this.setState({ redirect: true }))
        })
    }




    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/Question" />;
        }
        return (
            <div>
                <div className="wrapperForm ">
                    <div className="form ">
                        <form onSubmit={this.handleSubmit}>
                            <select class="form-select" aria-label="Default select example" name="tag" onChange={this.handleChangeTag}>
                                <option selected>Tag</option>
                                <option value="HTML">HTML</option>
                                <option value="CSS">CSS</option>
                                <option value="C#">C#</option>
                                <option value="JAVA">JAVA</option>
                            </select>
                            {/* <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="tags" value="HTML" id="flexCheckDefault" onChange={this.handleChangeTag} />
                                <label className="form-check-label" for="flexCheckChecked">
                                    HTML
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="tags" value="CSS" id="flexCheckDefault" onChange={this.handleChangeTag} />
                                <label className="form-check-label" for="flexCheckChecked">
                                    CSS
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="tags" value="C#" id="flexCheckDefault" onChange={this.handleChangeTag} />
                                <label className="form-check-label" for="flexCheckChecked">
                                    C#
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="tags" value="JAVA" id="flexCheckDefault" onChange={this.handleChangeTag} />
                                <label className="form-check-label" for="flexCheckChecked">
                                    JAVA
                                </label>
                            </div> */}
                            <label htmlFor="Question">
                                Question :
                                <input type="text" name="title" className="input" placeholder="Enter sujet" onChange={this.handleChangeTitle} />
                            </label>
                            <textarea type="text" name="content" className="input" placeholder="Veuillez saisir le detail de votre question" onChange={this.handleChangeContent} />
                            <div>
                                <Link to='/Question'><button className="button" type="submit" onClick={this.handleSubmit}><span>Valider</span></button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

// export default FormQuestion;