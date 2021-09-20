import React, {useState, useContext, useEffect} from 'react'
import './MainSection.css'
import PhotoFriend_1 from './images/friend_1.jpg'
import PhotoRoad from './images/road.jpg'
import VideoPosted from './videos/video_1.mp4'
import AudioPlayerImage from './images/record.jpg'
import { UserContext } from '../../Contexts/UseContext'
import axios from 'axios'

function MainSection() {

    const [postText, setPostText] = useState('')
    const [postImage,setPostImage] = useState(null)
    const [postVideo, setPostVideo] = useState(null)
    const [postAudio, setPostAudio] = useState(null)
    const {value1, value2} = useContext(UserContext)
    const {isAuth, setIsAuth} = value1
    const {email, setEmail} = value2
    const [posts, setPosts] = useState([])
    const splitArr = [];
    const imageUrl = 'http://localhost:8000'
    const mediaUrl = 'http://localhost:8000/posts/'

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        await axios.post('http://127.0.0.1:8000/api/send-posts/',{
            email: email
        }).then(
            response => response.data
        ).then(
            data => setPosts(data)
        ).catch(
            error => console.log(error)
        )
    }

    const submitPost = (e) => {
        e.preventDefault()
        let formData = new FormData()
        if(postImage !== null){
            formData.append('image', postImage)
        }
        if(postVideo != null){
            formData.append('video', postVideo)
        }   
        if(postAudio !== null){
            formData.append('audio', postAudio)
        }
        formData.append('text', postText)
        formData.append('email', email)
        let url = 'http://127.0.0.1:8000/api/create-post/'
        axios.post(url,formData,{
            headers: {
                'content-type': 'multipart/form_data'
            }
        }).then(
            data => {
                console.log(data)
            }
        ).catch(
            error => {
                console.log(error)
            }
        )
    }

    const getImage = (e) => {
        var imageName = e.target.value
        setPostImage(e.target.files[0])
        var newImage = imageName.replace(/^.*\\/,"")
        document.getElementById("display-image").innerHTML = newImage
        document.getElementById('display-image').style.visibility = 'visible'
    }

    const getVideo = (e) => {
        var videoName = e.target.value
        setPostVideo(e.target.files[0])
        var newVideo = videoName.replace(/^.*\\/,"")
        document.getElementById("display-image").innerHTML = newVideo
        document.getElementById('display-image').style.visibility = 'visible'
    }

    const getAudio = (e) => {
        var audioName = e.target.value
        setPostAudio(e.target.files[0])
        var newAudio = audioName.replace(/^.*\\/,"")
        document.getElementById("display-image").innerHTML = newAudio
        document.getElementById('display-image').style.visibility = 'visible'
    }

    const setTitleAudio = (title) => {
        var title = String(title).split('/media/posts/')
        title = String(title).split('.mp3')
        title = String(title).split('_')
        title = String(title).split(',')
        for (var i = 0; i < title.length; i++) {
            title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1); 
        }
        return title.join(' ');
    }

    console.log(posts)

    return (
        <div>
            <section className="main-container">
                <div className="post-container">
                    <textarea placeholder="What's in your mind today?" 
                              onChange={(e) => setPostText(e.target.value)}></textarea>
                    <div className="post-list">
                        <div className="list-container">
                            <ul>
                                <li>
                                    <label for="img_upload"><i className="material-icons-outlined">photo_camera</i></label>
                                    <input type="file" id="img_upload" name="" accept="image/*"
                                        onChange={(e) => getImage(e)}
                                    />
                                </li>
                                <li>
                                    <label for="video_upload"><i className="material-icons-outlined">videocam</i></label>
                                    <input type="file" id="video_upload" name="" accept="video/*"
                                        onChange={(e) => getVideo(e)}
                                    />

                                </li>
                                <li>
                                    <label for="audio_upload"><i className="material-icons-outlined">mic_none</i></label>
                                    <input type="file" id="audio_upload" name="" accept="audio/*"
                                        onChange={(e) => getAudio(e)}
                                    />
                                </li>
                            </ul>
                        </div>  
                        <div className="mx-auto"></div>
                        <div id="display-image"></div>
                        <button onClick={(e) => submitPost(e)}>Post</button>
                    </div>
                </div>
                
                {
                    posts.map(post => 
                        <div className="posted-container">
                            <div className="poster-info">
                                <img src={PhotoFriend_1}/>
                                <div className="poster-publish">
                                    <h6>Jim Brown</h6>
                                    <p>Published on 5 May, 2021</p>
                                </div>
                            </div>
                            <div className="posted-content">
                            <div className="posted-content-text">
                                <p key={post.id}>{post.text}</p>
                            </div>
                            <img src={imageUrl + post.image}/>
                            {post.audio !== null &&
                                <div className="audio-player">
                                    <div className="audio-title">{setTitleAudio(post.audio)}</div>
                                    <img src={AudioPlayerImage}/>
                                    <audio controls width="90%" height="100%">
                                        <source src={imageUrl + post.audio}/>
                                    </audio>
                                </div>
                            }
                            {post.video !== null &&
                                <video width="90%" height="100%" controls>
                                    <source src={imageUrl + post.video}/>
                                </video>
                            }
                            </div>
                            <div className="posted-footer">
                                <div className="posted-likes">
                                    <ul>
                                        <li>32 Likes</li>
                                    </ul>
                                    <div className="comment-section">
                                        <i className="material-icons-outlined">favorite_border</i>
                                        <div className="mx-auto"></div>
                                        <textarea placeholder="Add a comment..."></textarea>
                                        <button className="comment-button">Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                )}
                    
                

                <div className="posted-container">
                    <div className="poster-info">
                        <img src={PhotoFriend_1}/>
                        <div className="poster-publish">
                            <h6>Jim Brown</h6>
                            <p>Published on 5 May, 2021</p>
                        </div>
                    </div>
                    <div className="posted-content">
                        <img src={PhotoRoad}/>
                    </div>
                    <div className="posted-footer">
                        <div className="posted-likes">
                            <ul>
                                <li>32 Likes</li>
                            </ul>
                            <div className="comment-section">
                                <i className="material-icons-outlined">favorite_border</i>
                                <div className="mx-auto"></div>
                                <textarea placeholder="Add a comment..."></textarea>
                                <button className="comment-button">Post</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="posted-container">
                    <div className="poster-info">
                        <img src={PhotoFriend_1}/>
                        <div className="poster-publish">
                            <h6>Jim Brown</h6>
                            <p>Published on 5 May, 2021</p>
                        </div>
                    </div>
                    <div className="posted-content">
                        <video width="90%" height="100%" controls>
                            <source src={VideoPosted}/>
                        </video>
                    </div>
                    <div className="posted-footer">
                        <div className="posted-likes">
                            <ul>
                                <li>32 Likes</li>
                            </ul>
                            <div className="comment-section">
                                <i className="material-icons-outlined">favorite_border</i>
                                <div className="mx-auto"></div>
                                <textarea placeholder="Add a comment..."></textarea>
                                <button className="comment-button">Post</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="posted-container">
                    <div className="poster-info">
                        <img src={PhotoFriend_1}/>
                        <div className="poster-publish">
                            <h6>Jim Brown</h6>
                            <p>Published on 5 May, 2021</p>
                        </div>
                    </div>
                    <div className="posted-content">
                        <div className="posted-content-text">
                            <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </div>
                    <div className="posted-footer">
                        <div className="posted-likes">
                            <ul>
                                <li>32 Likes</li>
                            </ul>
                            <div className="comment-section">
                                <i className="material-icons-outlined">favorite_border</i>
                                <div className="mx-auto"></div>
                                <textarea placeholder="Add a comment..."></textarea>
                                <button className="comment-button">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default MainSection
