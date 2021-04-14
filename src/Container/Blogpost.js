import React, {Component} from "react";
import Post from "./Post";
import './BlogPost.css';
import API from "../Services";

class BlogPost extends Component{

    state = {
        listArtikel: [],
        insertartikel:{
            userId: 1,
            id: 1,
            title:"",
            body:""
        }
    }
// 2
        ambilDataDariApi(){
        API.getNewsBlog()
            .then(result => {
                this.setState({
                    listArtikel: result
                })
            })
    }

    componentDidMount(){
        this.ambilDataDariApi()
    }
    handleHapusArtikel = (data) => {
        API.deleteBlog(data).then((response) => {
          this.ambilDataDariApi();
        });
      };
    

    handleTambahArtikel =(event) =>{
        let formInsertArtikel ={...this.state.insertartikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertartikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
       API.postNewBlog(this.state.insertartikel)
        .then((Response) => {
            this.ambilDataDariApi();
        })
    }

    render(){
        return(
            <div className="post-artikel">
                <div className="form pb2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title"  className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title"
                            onChange={this.handleTambahArtikel} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>

                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return<Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
                {/* <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi -
                Politeknik Negeri Malang" /> */}
                {/* <div class="artikel">
                <div class="gambar-artikel">
                    <image src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel" />
                    </div>
                    <div class="koten-artikel">
                        <div class="judul-artikel">Judul Artikel</div>
                        <p class="isi-artikel">Isi Article</p>
                    </div>
            </div> */}
            </div>
        )
    }
}

export default BlogPost;