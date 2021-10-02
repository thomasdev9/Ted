import React, {useState, useContext, useEffect} from 'react'
import './MainSection.css'
import PhotoFriend_1 from './images/friend_1.jpg'
import PhotoRoad from './images/road.jpg'
import VideoPosted from './videos/video_1.mp4'
import AudioPlayerImage from './images/record.jpg'
import { UserContext } from '../../Contexts/UseContext'
import axios from 'axios'
import ModalPage, { ModalJob } from './modal/ModalPage'

function MainSection() {

    const [postText, setPostText] = useState('')
    const [postImage,setPostImage] = useState(null)
    const [postVideo, setPostVideo] = useState(null)
    const [postAudio, setPostAudio] = useState(null)
    const {value1, value2} = useContext(UserContext)
    const {isAuth, setIsAuth} = value1
    const {email, setEmail} = value2
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [likes, setLikes] = useState([])
    const [comment, setComment] = useState('')
    const [commentList, setCommentsList] = useState([])
    const [response, setResponse] = useState('')
    const [showModal,setShowModal] = useState(false)
    const [commentResponse, setCommentResponse] = useState([])
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

        await axios.get('http://127.0.0.1:8000/api/get-all-users/')
        .then(
            data => {
                setUsers(data.data)
            }
        ).catch(
            error => {
                console.log(error)
            }
        )

        await axios.get('http://127.0.0.1:8000/api/get-likes/')
        .then(
            data => {
                setLikes(data.data)
            }
        )
        .catch(
            error => {
                console.log(error)
            }
        )

        await axios.get('http://127.0.0.1:8000/api/get-comments/')
        .then(
            data => {
                setCommentsList(data.data)
            }
        )
        .catch(
            error => {
                console.log(error)
            }
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
                const newPost = data.data
                setPosts(oldPosts => [...oldPosts, newPost]);
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
        setPostAudio()
        setPostVideo()
        var newImage = imageName.replace(/^.*\\/,"")
        document.getElementById("display-image").innerHTML = newImage
        document.getElementById('display-image').style.visibility = 'visible'
    }

    const getVideo = (e) => {
        var videoName = e.target.value
        setPostVideo(e.target.files[0])
        setPostImage()
        setPostAudio()
        var newVideo = videoName.replace(/^.*\\/,"")
        document.getElementById("display-image").innerHTML = newVideo
        document.getElementById('display-image').style.visibility = 'visible'
    }

    const getAudio = (e) => {
        var audioName = e.target.value
        setPostAudio(e.target.files[0])
        setPostVideo()
        setPostImage()
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

    const getName = (id) => {
        var firstname, lastname,name
        users.forEach(function(item){
            if (item.id == id){
                firstname = item.firstname
                lastname = item.lastname
            }
        })
        name = firstname + ' ' + lastname
        return name
    }

    const getImageUser = (id) => {
        var image = 'http://localhost:8000';
        var temp_image;

        users.forEach(function(item){
            if(item.id == id){
                temp_image = item.image
            }
        })

        image = image + temp_image
        return image
    }

    const formatDate = (date) => {
        var date = String(date)
        date = date.split('T')
        date = date[0]
        return date
    }

    const getLikes = (id) => {
        var likesCounter = 0
        likes.forEach(function(item){
            if(item.post_id == id){
                likesCounter++;
            }
        })

        return likesCounter
    }

    const makeLike = (e,id) => {
        const sendLike = async () => {
            await axios.post('http://127.0.0.1:8000/api/send-like/',{
                email: email,
                post_id: id
            })
            .then(
                data => {
                    setResponse(data.data.Message)
                }
            )
            .catch(
                error => {
                    console.log(error)
                }
            )
        }

        sendLike()
        const newLike = {
            post_id: id
        }
        if(response == 'You have already liked this post.'){
            return;
        }
        setLikes(oldLikes => [...oldLikes, newLike]);
    }
    
    const postComment = (id) => {
        
        const sendComment = async () => {
            await axios.post('http://127.0.0.1:8000/api/send-comment/',{
                email: email,
                post_id: id,
                text: comment
            })
            .then(
                data => {
                    console.log(data.data)
                }
            )
            .catch(
                error => {
                    console.log(error)
                }
            )
        }

        sendComment()
    }

    const getCountComments = (id) => {
        var count = 0
        commentList.forEach(function(item){
            if(item.post_id == id){
                count++
            }
        })

        return count
    }

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (
        <div>
            <ModalPage showModal={showModal} setShowModal={setShowModal} />
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
                    (posts.length > 0)
                    ?posts.map(post => 
                        <div className="posted-container">
                            <div className="poster-info">
                                <img src={getImageUser(post.user_id)}/>
                                <div className="poster-publish">
                                    <h6>{getName(post.user_id)}</h6>
                                    <p>Published on {formatDate(post.created_at)}</p>
                                </div>
                            </div>
                            <div className="posted-content">
                            <div className="posted-content-text">
                                <p key={post.id}>{post.text}</p>
                            </div>
                            {(post.image !== null && post.image != '/media/undefined') &&
                                <img src={imageUrl + post.image}/>
                            }
                            {(post.audio !== null && post.audio != '/media/undefined') &&
                                <div className="audio-player">
                                    <div className="audio-title">{setTitleAudio(post.audio)}</div>
                                    <img src={AudioPlayerImage}/>
                                    <audio controls width="90%" height="100%">
                                        <source src={imageUrl + post.audio}/>
                                    </audio>
                                </div>
                            }
                            {(post.video !== null && post.video != '/media/undefined') &&
                                <video width="90%" height="100%" controls>
                                    <source src={imageUrl + post.video}/>
                                </video>
                            }
                            </div>
                            <div className="posted-footer">
                                <div className="posted-likes">
                                    <ul>
                                        <li>{getLikes(post.id)} Likes</li>
                                        <li className="comments-button">{getCountComments(post.id)} Comments</li>
                                    </ul>
                                    <div className="comment-section">
                                        <i className="material-icons-outlined" onClick={(e) => makeLike(e,post.id)}>favorite_border</i>
                                        <div className="mx-auto"></div>
                                        <textarea className="textarea-post" placeholder="Add a comment..." onChange={(e) => setComment(e.target.value)}></textarea>
                                        <button className="comment-button" onClick={() => postComment(post.id)}>Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
                :<h2 className="empty-posts">No posts yet.</h2>
                }
                    
                
            </section>
        </div>
    )
}

export default MainSection
